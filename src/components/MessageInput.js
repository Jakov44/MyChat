import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../index";

const MessageInput = ({ sendMessage }) => {
  const [typedMessage, setTypedMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          value={typedMessage}
          onChange={(event) => {
            setTypedMessage(event.target.value);
          }}
        />
        <button type="submit" onClick={() => sendMessage(typedMessage)}>
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
