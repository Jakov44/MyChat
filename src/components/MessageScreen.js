import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const MessageScreen = () => {
  // const renderedMessages = messages.map((message) => {
  //   return <p key={message.timestamp}>{message.data}</p>;
  // });
  const messages = useSelector((state) => state.allMessages);
  const renderedMessages = messages.map(({ id, data, messageTime, member }) => {
    return (
      <Typography key={id}>
        {data}
        {messageTime}
        {member.clientData.username}
      </Typography>
    );
  });

  return (
    <Box
      sx={{
        height: "70%",
        width: "90%",
        marginRight: "5%",
        marginBottom: "2%",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <Stack
        spacing={2}
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={{
          width: "95%",
          height: "90%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        {renderedMessages}
      </Stack>
    </Box>
  );
};

export default MessageScreen;
