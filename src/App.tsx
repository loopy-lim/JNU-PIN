import InputText from "@/component/chat/ChatInputBox";

const App = () => {
  const sendMessage = () => {
    alert("send message");
  };

  return (
    <>
      <h1>JNU-PIA</h1>
      <div className="p-4">
        <InputText />
      </div>
    </>
  );
};

export default App;
