import { sendMessage } from "@/functions/chat/chat.functions";
import {
  BoardType,
  ChatInputType,
  ChatListStore,
  isMicOn,
} from "@/store/chat/chat.store";
import { chatInputBoxStore } from "@/store/chat/inputbox.store";
import { useAtom, useSetAtom } from "jotai";
import { CiKeyboard } from "react-icons/ci";
import ChatMicInputbox from "./ChatMicInputBox.component";

const InputTextComponent = () => {
  const [chatText, setChatText] = useAtom(chatInputBoxStore);
  const [chatType, setChatType] = useAtom(ChatInputType);
  const [boardType, setBoardType] = useAtom(BoardType);
  const setIsMicOn = useSetAtom(isMicOn);
  const inputTextButtonCss = !chatText ? "fill-[#D2D6DA]" : "fill-[#3239EF]";
  const [chatList, setChatList] = useAtom(ChatListStore);

  return chatType == "mic" ? (
    <div className="flex justify-between items-baseline ">
      <div className="w-10" />
      <ChatMicInputbox />
      <button
        className={"text-4xl "}
        onClick={() => {
          setChatType("text");
          setIsMicOn(true);
        }}
      >
        <CiKeyboard />
      </button>
    </div>
  ) : (
    <div className="flex justify-between items-center w-full bg-[#F5F6F8] rounded-full py-2 px-4">
      <input
        type="text"
        className="w-full bg-transparent outline-none border-none"
        placeholder="메시지 입력"
        value={chatText}
        onChange={(e) => {
          setChatText(e.target.value);
        }}
        onKeyPress={(e) => {
          // FIXME: must use onKeyDown with KeyboardEvent.isComposing(한글 조합 문제)
          if (e.key === "Enter") {
            e.preventDefault();
            setChatList(
              (
                prev: {
                  id: number;
                  isMine: boolean;
                  isDone: boolean;
                  message: string;
                }[]
              ) => [
                ...prev,
                {
                  id: chatList.length,
                  isMine: true,
                  isDone: true,
                  message: chatText,
                },
              ]
            );
            sendMessage(
              chatList.length,
              chatText,
              boardType,
              setChatText,
              setChatList
            );
          }
        }}
      ></input>
      <button
        className="h-2 flex justify-center items-center"
        onClick={() =>
          sendMessage(
            chatList.length,
            chatText,
            boardType,
            setChatText,
            setChatList
          )
        }
      >
        <svg
          className={"h-4 w-4 " + inputTextButtonCss}
          xmlns="http://www.w3.org/2000/svg"
          height="800px"
          width="800px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 495.003 495.003"
        >
          <g id="XMLID_51_">
            <path
              id="XMLID_53_"
              d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616   l-67.6-32.22V456.687z"
            />
            <path
              id="XMLID_52_"
              d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422   c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414   l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956   L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"
            />
          </g>
        </svg>
      </button>
      <button
        className="h-2 flex justify-center items-center"
        onClick={() => {
          setChatType("mic");
        }}
      >
        <img className="h-4 w-4 mx-4" src="/mic.svg" alt="mic" />
      </button>
    </div>
  );
};

export default InputTextComponent;
