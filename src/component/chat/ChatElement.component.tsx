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
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          src="/typing-in-chat.lottie"
          class="w-[25%]"
        />
      )}
    </div>
  );
};

export default ChatElement;
