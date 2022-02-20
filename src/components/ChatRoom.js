import React from "react";
import RoomsList from "./RoomsList";
import MessageScreen from "./MessageScreen";
import MessageInput from "./MessageInput";
import UsersList from "./UsersList";

const ChatRoom = ({ sendMessage, messages }) => {
  return (
    <div>
      <RoomsList />
      <hr />
      <MessageScreen messages={messages} />
      <MessageInput sendMessage={sendMessage} />
      <hr />
      <UsersList />
    </div>
  );
};

export default ChatRoom;
