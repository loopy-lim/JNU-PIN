import { useAtomValue } from "jotai";
import BoardGroup from "./BoardGroup.compont";
import { BoardType } from "@/store/chat/chat.store";

const ChatBoardType = () => {
  const type = useAtomValue(BoardType);
  return (
    <BoardGroup
      selected={type}
      sortList={[
        { type: "software_engineering", string: "소프트웨어공학과" },
        { type: "engineering", string: "공학대학" },
        { type: "scholarship", string: "장학" },
      ]}
    />
  );
};

export default ChatBoardType;
