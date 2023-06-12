export const sendMessage = (
  id: number,
  chatText: string,
  boardType: string,
  setChatText: any,
  setChatList: any
) => {
  if (!chatText || chatText == "") return;
  setChatList(
    (
      prev: { id: number; isMine: boolean; isDone: boolean; message: string }[]
    ) => {
      const newChatList = [...prev];
      newChatList.filter((v) => v.id == id);
      newChatList[prev.length - 1].isDone = true;
      return newChatList;
    }
  );
  getMessage(boardType, chatText, setChatList);

  setChatText("");
};

export const getMessage = async (
  boardType: string,
  chatText: string,
  setChatList: any
) => {
  let id = 0;
  setChatList(
    (
      prev: { id: number; isMine: boolean; isDone: boolean; message: string }[]
    ) => {
      id = prev.length;
      return [
        ...prev,
        {
          id: prev.length + 1,
          isMine: false,
          isDone: false,
        },
      ];
    }
  );
  fetch(
    `http://localhost:8080/ask?question=${chatText}&board_type=${boardType}`
  )
    .then((r) => r.text())
    .then((t) =>
      setChatList(
        (
          prev: {
            id: number;
            isMine: boolean;
            isDone: boolean;
            message: string;
          }[]
        ) => {
          const newChatList = [...prev];
          newChatList.filter((v) => v.id == id);
          newChatList[prev.length - 1].isDone = true;
          newChatList[prev.length - 1].message = t;
          return newChatList;
        }
      )
    );
};
