import { useMutation } from "@tanstack/react-query";
import { sentMessage } from "../query/api";
import useMessagesStore, { Message } from "../store/MessagesStore";

export const useSendNewMessage = () => {
  const addMessage = useMessagesStore((state) => state.addMessage);
  return useMutation({
    mutationFn: async (userMessage: string) => {
      const userMsg: Message = { role: "user", message: userMessage };
      addMessage(userMsg);

      const aiReplyMessage = await sentMessage({ message: userMessage });
      const aiMessage: Message = { role: "ai", message: aiReplyMessage };
      addMessage(aiMessage);
    },
  });
};
