import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { useStyles } from "./use-styles";
import { Send } from "@mui/icons-material";
import { Message } from "./message";

export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();
  const [value, setValue] = useState("");
  const [MessageList, setMessageList] = useState({
    room1: [
      {
        author: "",
        text: "",
        date: "",
      },
    ],
  });
  const styles = useStyles();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [MessageList]);

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList({
          ...MessageList,
          [roomId]: [
            ...(MessageList[roomId] ?? []),
            {
              author,
              message,
              date: new Date(),
            },
          ],
        });
        setValue("");
      }
    },
    [MessageList, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  useEffect(() => {
    const messages = MessageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage("Hello from Bot", "Bot");
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [MessageList, roomId, sendMessage]);

  const messages = MessageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.date} />
        ))}
      </div>

      <Input
        placeholder="Введите сообщение ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send
                className={styles.icon}
                onClick={() => sendMessage(value)}
              />
            )}
          </InputAdornment>
        }
      />
    </>
  );
};
