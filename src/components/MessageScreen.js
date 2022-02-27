import React from "react";

const MessageScreen = ({ messages }) => {
  const renderedMessages = messages.map((message) => {
    return <p key={message.timestamp}>{message.data}</p>;
  });

  return (
    <div style={{ height: "78%" }}>
      Neka poruka
      {renderedMessages}
    </div>
  );
};

export default MessageScreen;
