import React, { useState, useEffect } from "react";
import "./index.css";

export const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      author: "Bot",
      text: "its my message",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User",
          message: value,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setValue("");
    }
  };
  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author === "User") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: "Bot",
            message: "Hi, this is Bot answer",
            date: new Date().toLocaleDateString(),
          },
        ]);
      }, 500);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  return (
    <>
      <div>
        <input
          placeholder="Введите сообщение здесь"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button value onClick={sendMessage}>
          Отправить
        </button>
        {messages.map((msg) => (
          <div>
            <h1>{msg.author}</h1>
            <h3>{msg.text}</h3>
            <h5>{msg.date}</h5>
          </div>
        ))}
      </div>
    </>
  );
};
