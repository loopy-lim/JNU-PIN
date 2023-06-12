import { useLottie } from "lottie-react";
import typing_in_chat from "../../assets/typing-in-chat.json";
import { HiSpeakerWave } from "react-icons/hi2"
import { textToVoice } from "@/functions/audio/audio.fetch";

const ChatElement = ({
  isMine,
  message,
  isDone,
}: {
  isMine: boolean;
  message: string;
  isDone: boolean;
}) => {
  const chatTextBoxStyle = isMine ? "bg-[#D7D9FC] ml-auto" : "bg-[#F2F4F6]";

  const options = {
    animationData: typing_in_chat,
    loop: true,
    autoplay: true,
  };
  const lottie = useLottie(options, { width: "4rem" });

  return (
    <div
      className={
        "py-2 rounded-xl w-fit px-4 my-2 max-w-[90%] break-words " +
        chatTextBoxStyle
      }
    >
      {isDone
        ? <>{
          message.split("\n").map((v) => <div>{v}</div>)
        } {!isMine ? <button onClick={() => textToVoice(message)}><HiSpeakerWave /></button> : ""}
        </>
        : lottie.View}
    </div>
  );
};

export default ChatElement;
