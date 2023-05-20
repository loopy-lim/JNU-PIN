import { Player } from "@lottiefiles/react-lottie-player";

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

  return (
    <div
      className={
        "py-2 rounded-xl w-fit px-4 my-2 max-w-[90%] break-words " +
        chatTextBoxStyle
      }
    >
      {isDone ? (
        message
      ) : (
        <Player
          autoplay={true}
          loop={true}
          className="h-4 scale-150"
          speed={1.5}
          src={"/typing-in-chat.json"}
        />
      )}
    </div>
  );
};

export default ChatElement;
