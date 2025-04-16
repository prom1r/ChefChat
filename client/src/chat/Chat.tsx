import { useState } from "react";

import "./Chat.scss";
import { useSendNewMessage } from "../hooks/useSendNewMessage";
import useMessagesStore from "../store/MessagesStore";

export const Chat = () => {
  const [input, setInput] = useState("");

  const messages = useMessagesStore((state) => state.messages);

  const { mutate, isPending } = useSendNewMessage();

  const handleSend = () => {
    mutate(input);
    setInput("");
  };

  return (
    <div className="wrapper">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "userMsg" : "aiMsg"}>
            {msg.message}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isPending}
        />
        <button
          disabled={isPending || input.trim() === ""}
          onClick={handleSend}
        >
          {isPending ? "Отправка..." : "Отправить"}
        </button>
      </div>
    </div>
  );
};
