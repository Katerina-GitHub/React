import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { useStyles } from "./use-styles";
import { Send } from "@mui/icons-material";
import { Message } from "./message";

export const MessageList = () => {
  const ref = useRef();
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      author: "",
      text: "",
      date: "",
    },
  ]);
  const styles = useStyles();
  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User",
          text: value,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setValue("");
    }
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
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
            text: "Hi, this is Bot answer",
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
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.date} />
        ))}
      </div>
      <Input
        placeholder="Введите сообщение здесь"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {value && <Send className={styles.icon} onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </>
  );
};
