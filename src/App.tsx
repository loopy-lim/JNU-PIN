import InputText from "@/component/chat/ChatInputBox";
import { useAtom } from "jotai";
import { chatInputBox } from "./store/chat/inputbox";

const App = () => {
  const [chatText, setChatText] = useAtom(chatInputBox);

  const sendMessage = () => {
    if (!chatText || chatText == "") return;
    focus();
    alert("send message");
    setChatText("");
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
