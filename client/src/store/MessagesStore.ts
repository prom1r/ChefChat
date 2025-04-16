import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface Message {
  message: string;
  role: "user" | "ai";
}

export interface MessagesStore {
  messages: Message[];
  addMessage: (message: Message) => void;
}

const useMessagesStore = create(
  devtools(
    immer<MessagesStore>((set) => ({
      messages: [],
      addMessage: (message: Message) =>
        set((state) => {
          state.messages.push(message);
        }),
    }))
  )
);

export default useMessagesStore;
