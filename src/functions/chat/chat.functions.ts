export const sendMessage = (
  id: number,
  chatText: string,
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
  getMessage(setChatList);

  setChatText("");
};

export const getMessage = (setChatList: any) => {
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
          message: "",
        },
      ];
    }
  );
  setChatList(
    (
      prev: { id: number; isMine: boolean; isDone: boolean; message: string }[]
    ) => {
      const newChatList = [...prev];
      newChatList.filter((v) => v.id == id);
      newChatList[prev.length - 1].isDone = true;
      newChatList[prev.length - 1].message = "a";
      return newChatList;
    }
  );
};
