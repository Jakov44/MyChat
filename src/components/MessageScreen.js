import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const MessageScreen = () => {
  // const renderedMessages = messages.map((message) => {
  //   return <p key={message.timestamp}>{message.data}</p>;
  // });

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
        <Typography>Jedna Poruka</Typography>
        <Typography>Druga Poruka</Typography>
        <Typography>Treca Poruka</Typography>
        {/* {renderedMessages} */}
      </Stack>
    </Box>
  );
};

export default MessageScreen;
