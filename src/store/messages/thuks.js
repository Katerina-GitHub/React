import { sendMessage } from "./action";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, {
          author: "Bot",
          message: "Привет, я другой bot",
        })
      );
    }, 700);
  }
};
