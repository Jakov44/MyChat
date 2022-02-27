import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../index";
import { Button, TextField, Stack, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ sendMessage }) => {
  const [typedMessage, setTypedMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ height: "10%" }}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <TextField
            sx={{ width: "70%" }}
            placeholder="Type your message..."
            type="text"
            value={typedMessage}
            onChange={(event) => {
              setTypedMessage(event.target.value);
            }}
          />
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            type="submit"
            onClick={() => sendMessage(typedMessage)}
          >
            Pošalji
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default MessageInput;
