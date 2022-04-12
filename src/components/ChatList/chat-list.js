import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { List, Button } from "@mui/material";
import { Chat } from "./chat";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";

const selector = (state) => {
  return state.conversations.conversations;
};

export function ChatList() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate("/chat");
  const conversations = useSelector(selector);
  const create = () => {
    const name = prompt("Введите комнату");

    const isValidName = !conversations.includes(name);
    if (!!name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Такая комната уже есть");
    }
  };
  const deleteConv = (conversation) => {
    dispatch(deleteConversation(conversation));
    setTimeout(() => navigate("/chat"));
  };
  return (
    <List component="nav">
      <Button color="info" onClick={create}>
        Новая комната
      </Button>
      {conversations.map((chat, index) => (
        <Link key={index} to={`/chat/${chat}`}>
          <Chat title={chat} selected={roomId === chat} />
          <Button color="info" onClick={() => deleteConv(chat)}>
            Удалить комнату
          </Button>
        </Link>
      ))}
    </List>
  );
}
