import { isMicOn } from "@/store/chat/chat.store";
import { useAtom } from "jotai";
import { useLottie } from "lottie-react";
import siri_motion from "../../assets/siri_motion.json";
import { useEffect } from "react";

const ChatMicInputbox = () => {
  // const setChatType = useSetAtom(ChatInputType);
  const [isMicOnValue, setIsMicOn] = useAtom(isMicOn);

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

  return (
    <button
      className="flex justify-center items-center w-full rounded-full py-2 px-4"
      onClick={() => {
        setIsMicOn((v) => !v);
        sendMessage(chatText, setChatText, setChatList);
      }}
    >
      {lottie.View}
    </button>
  );
};

export default ChatMicInputbox;
