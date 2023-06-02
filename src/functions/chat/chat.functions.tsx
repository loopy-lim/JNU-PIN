export const sendMessage = (
  chatText: string,
  setChatText: any,
  setChatList: any
) => {
  if (!chatText || chatText == "") return;
  setChatList((prev: any) => [
    ...prev,
    {
      id: prev.length + 1,
      isMine: true,
      isDone: true,
      message: chatText,
    },
  ]);
  getMessage(setChatList);

  setChatText("");
};

export const getMessage = (setChatList: any) => {
  setChatList((prev: any) => [
    ...prev,
    {
      id: prev.length + 1,
      isMine: false,
      isDone: false,
      message: "",
    },
  ]);
  setChatList((prev: any) => {
    const newChatList = [...prev];
    newChatList[prev.length - 1].isDone = true;
    newChatList[prev.length - 1].message = "a";
    return newChatList;
  });
};
