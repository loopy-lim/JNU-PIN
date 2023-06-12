import { BoardType, ChatListStore, isMicOn } from "@/store/chat/chat.store";
import { useAtom } from "jotai";
import { useLottie } from "lottie-react";
import siri_motion from "../../assets/siri_motion.json";
import { useEffect } from "react";
import { voiceToText } from "@/functions/audio/audio.fetch";
import { sendMessage } from "@/functions/chat/chat.functions";
import { chatInputBoxStore } from "@/store/chat/inputbox.store";

const audioArray = [] as Blob[];
let mediaRecorder: MediaRecorder;

const ChatMicInputbox = () => {
  const [isMicOnValue, setIsMicOn] = useAtom(isMicOn);
  const [chatText, setChatText] = useAtom(chatInputBoxStore);
  const [boardType, setBoardType] = useAtom(BoardType);
  const [chatList, setChatList] = useAtom(ChatListStore);

  const options = {
    animationData: siri_motion,
    loop: true,
    autoplay: true,
  };
  const lottie = useLottie(options, { width: "35%" });
  lottie.setSpeed(2);

  useEffect(() => {
    isMicOnValue ? lottie.play() : lottie.pause();
  }, [lottie, isMicOnValue]);

  const record = async () => {
    if (mediaRecorder == null) {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaRecorder = new MediaRecorder(mediaStream);
    }

    if (!isMicOnValue) {
      mediaRecorder.ondataavailable = (event) => {
        audioArray.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(audioArray, {
          type: "audio/mpeg",
        });
        audioArray.splice(0);
        const text = await voiceToText(blob);

        setChatList(
          (
            prev: {
              id: number;
              isMine: boolean;
              isDone: boolean;
              message: string;
            }[]
          ) => [
            ...prev,
            {
              id: chatList.length,
              isMine: true,
              isDone: true,
              message: text,
            },
          ]
        );

        sendMessage(chatList.length, text, boardType, setChatText, setChatList);
      };
      mediaRecorder.start();

      setIsMicOn(true);
    } else {
      mediaRecorder.stop();
      setIsMicOn(false);
    }
  };

  return (
    <button
      className="flex justify-center items-center w-full rounded-full py-2 px-4"
      onClick={() => {
        setIsMicOn((v) => !v);
        record();
      }}
    >
      {lottie.View}
    </button>
  );
};

export default ChatMicInputbox;
