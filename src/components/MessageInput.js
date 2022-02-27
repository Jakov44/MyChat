import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../index";
import { Button, TextField, Stack, Divider, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ sendMessage }) => {
  const [typedMessage, setTypedMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        height: "8%",
        width: "100%",
        marginBottom: "3%",
      }}
    >
      <form
        style={{ marginLeft: "40%", marginRight: "5%", width: "100%" }}
        onSubmit={(e) => onSubmitHandler(e)}
      >
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
    </Box>
  );
};

export default MessageInput;
