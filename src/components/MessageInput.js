import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Stack, Divider, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = () => {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
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
        onSubmit={(e) => e.preventDefault()}
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
            value={input}
            onChange={(event) => {
              dispatch({
                type: "CURRENT_MESSAGE",
                payload: event.target.value,
              });
            }}
          />
          <Button variant="outlined" endIcon={<SendIcon />} type="submit">
            Pošalji
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default MessageInput;
