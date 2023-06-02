import { atom } from "jotai";

export type Chat = {
  id: number;
  isMine: boolean;
  isDone: boolean;
  message: string;
};

export const ChatListStore = atom<Chat[]>([]);
export const ChatInputType = atom<string>("mic");
export const BoardType = atom<string>("software_engineering");
export const isMicOn = atom<boolean>(false);