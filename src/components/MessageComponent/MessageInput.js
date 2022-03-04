import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Stack, Divider, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ sendMessage }) => {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const onClickHandler = (input) => {
    sendMessage(input);
    dispatch({ type: "CURRENT_MESSAGE", payload: "" });
  };
  return (
    <form className="input-form" onSubmit={(e) => e.preventDefault()}>
      <Stack direction="row" divider={<Divider flexItem />} spacing={2}>
        <Typography
          className="title"
          sx={{ fontSize: "30px", fontStyle: "italic", color: "#c9c9c9" }}
        >
          ChatAway...
        </Typography>
        <TextField
          className="textfield"
          sx={{ width: "70%" }}
          placeholder="Type your message..."
          type="text"
          value={input}
          onChange={(event) => {
            dispatch({
              type: "CURRENT_MESSAGE",
              payload: event.target.value,
            });
          }}
        />
        <Button
          onClick={() => onClickHandler(input)}
          variant="outlined"
          endIcon={<SendIcon />}
          type="submit"
        >
          Send
        </Button>
      </Stack>
    </form>
  );
};

export default MessageInput;
