import InputTextComponent from "@/component/chat/ChatInputBox.component";
import { useAtom, useSetAtom } from "jotai";
import { chatInputBoxStore } from "@/store/chat/inputbox.store";
import ChatListComponent from "@/component/chat/ChatList.component";
import { chatListStore } from "@/store/chat/chat.store";

const App = () => {
  const [chatText, setChatText] = useAtom(chatInputBoxStore);
  const setChatList = useSetAtom(chatListStore);

  const sendMessage = () => {
    if (!chatText || chatText == "") return;
    setChatList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        isMine: true,
        isDone: true,
        message: chatText,
      },
    ]);
    getMessage();

    setChatText("");
  };

  const getMessage = () => {
    setChatList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        isMine: false,
        isDone: false,
        message: "",
      },
    ]);
    setTimeout(() => {
      setChatList((prev) => {
        const newChatList = [...prev];
        newChatList[prev.length - 1].isDone = true;
        newChatList[prev.length - 1].message =
          "카카오 테크 캠퍼스는 팀 프로젝트 수행을 통한 현업 투입 가능한 주니어 개발자 양성을 목표로 하고 있습니다. 4월부터 11월 까지 3번에 걸쳐 운영될 예정입니다. 링크는 여기에 있습니다.";
        return newChatList;
      });
    }, 3000);
  };

  return (
    <div className="h-screen w-screen">
      <h1 className="bg-gradient-to-b from-[#D4D7E2] to-transparent p-4 flex justify-center items-center">
        전남대 스마트 비서
      </h1>
      <div className="p-4 h-[calc(100%-4rem)] flex flex-col justify-between">
        <ChatListComponent />
        <InputTextComponent sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default App;
