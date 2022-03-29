import { memo } from "react";
import cls from "classnames";
import styles from "./message.module.css";

export const Message = memo(({ message }) => {
  return (
    <div
      className={cls(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.author}</h3>
      <p>{message.text}</p>
      <p>{message.date}</p>
    </div>
  );
});
