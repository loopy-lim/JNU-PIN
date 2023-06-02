import InputTextComponent from "@/component/chat/ChatInputBox.component";
import ChatListComponent from "@/component/chat/ChatList.component";
import ChatBoardType from "./component/chat/ChatBaordType.component";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <ChatBoardType />
      </div>
      <div className="p-4 h-[calc(100%-4rem)] flex flex-col justify-between">
        <ChatListComponent />
        <InputTextComponent />
      </div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src="/jnu_background_logo.png" alt="jnu_background" />
      </div>
    </div>
  );
};

export default App;
