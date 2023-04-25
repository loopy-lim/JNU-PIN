import { useAtomValue } from "jotai";
import { chatListStore } from "@/store/chat/chat.store";
import ChatElement from "./ChatElement.component";

const ChatListComponent = () => {
  const chatList = useAtomValue(chatListStore);

  return (
    <div className="flex flex-col h-[calc(100%-3rem)] overflow-auto justify-end">
      {chatList.map((chat) => (
        <ChatElement
          isMine={chat.isMine}
          message={chat.message}
          isDone={chat.isDone}
          key={chat.id}
        />
      ))}
    </div>
  );
};

export default ChatListComponent;
