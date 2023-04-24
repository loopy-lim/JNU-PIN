const ChatElement = ({
  isMine,
  message,
}: {
  isMine: boolean;
  message: string;
}) => {
  const chatTextBoxStyle = isMine ? "bg-[#D7D9FC] ml-auto" : "bg-[#F2F4F6]";

  return (
    <div
      className={
        "py-2 rounded-xl w-fit px-4 my-2 max-w-[90%] " + chatTextBoxStyle
      }
    >
      {message}
    </div>
  );
};

export default ChatElement;
