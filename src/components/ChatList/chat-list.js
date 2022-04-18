import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { List, Button } from "@mui/material";
import { Chat } from "./chat";
import {
  createConversationFB,
  deleteConversation,
  conversationsSelector,
} from "../../store/conversations";

export function ChatList() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate("/chat");
  const { conversations, pending } = useSelector(conversationsSelector);
  const create = () => {
    const name = prompt("Введите комнату");

    const isValidName = !conversations.includes(name);
    if (!!name && isValidName) {
      dispatch(createConversationFB(name));
    } else {
      alert("Такая комната уже есть");
    }
  };
  const deleteConv = (conversation) => {
    dispatch(deleteConversation(conversation));
    setTimeout(() => navigate("/chat"));
  };
  if (pending) {
    return <h1>выполняется...</h1>;
  }
  return (
    <List component="nav">
      <Button color="info" onClick={create}>
        Новая комната
      </Button>
      {conversations.map((chat, index) => (
        <div style={{ display: "flex" }} key={index}>
          <Button color="info" onClick={() => deleteConv(chat)}>
            УДАЛИТЬ
          </Button>
          <Link to={`/chat/${chat}`}>
            <Chat title={chat} selected={roomId === chat} />
          </Link>
        </div>
      ))}
    </List>
  );
}
