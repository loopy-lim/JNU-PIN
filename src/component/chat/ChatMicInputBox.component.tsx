import { isMicOn } from "@/store/chat/chat.store";
import { useAtom } from "jotai";
import { useLottie } from "lottie-react";
import siri_motion from "../../assets/siri_motion.json";
import { useEffect, useRef } from "react";

const audioArray = [] as Blob[];
let mediaRecorder: MediaRecorder;

const ChatMicInputbox = () => {
  // const setChatType = useSetAtom(ChatInputType);
  const [isMicOnValue, setIsMicOn] = useAtom(isMicOn);
  const audioRef = useRef<HTMLAudioElement>(null);

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

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioArray, {
          type: "audio/ogg codecs=opus",
        });
        audioArray.splice(0);

        const blobUrl = window.URL.createObjectURL(blob);
        const audioElement = audioRef.current as HTMLAudioElement;

        audioElement.src = blobUrl;
        audioElement.play();
      };
      mediaRecorder.start();
      console.log(mediaRecorder);

      setIsMicOn(true);
    } else {
      mediaRecorder.stop();
      setIsMicOn(false);
      console.log("stop");
    }
  };

  return (
    <>
      <audio ref={audioRef} controls></audio>
      <button
        className="flex justify-center items-center w-full rounded-full py-2 px-4"
        onClick={() => {
          setIsMicOn((v) => !v);
          record();
        }}
      >
        {lottie.View}
      </button>
    </>
  );
};

export default ChatMicInputbox;
