import { atom } from "jotai";

export type chat = {
  id: number;
  isMine: boolean;
  isDone: boolean;
  message: string;
};

export const chatListStore = atom([] as chat[]);
