import InputText from "@/component/chat/ChatInputBox";

const App = () => {
  const sendMessage = () => {
    alert("send message");
  };

  return (
    <>
      <h1 className="bg-gradient-to-b from-[#D4D7E2] to-transparent p-4 flex justify-center items-center">
        전남대 스마트 비서
      </h1>
      <div className="p-4">
        <InputText sendMessage={sendMessage} />
      </div>
    </>
  );
};

export default App;
