import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  TextField,
  Stack,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ sendMessage }) => {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const onClickHandler = (input) => {
    sendMessage(input);
    dispatch({ type: "CURRENT_MESSAGE", payload: "" });
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
        style={{ marginLeft: "18%", marginRight: "5%", width: "100%" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <Stack direction="row" divider={<Divider flexItem />} spacing={2}>
          <Typography
            className="title"
            sx={{ fontSize: "30px", fontStyle: "italic", color: "#c9c9c9" }}
          >
            ChatAway...
          </Typography>
          <TextField
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
    </Box>
  );
};

export default MessageInput;
