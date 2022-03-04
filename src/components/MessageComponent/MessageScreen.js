import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { styleMessageBox, styleMessageStack } from "../../styles/styles";

const MessageScreen = () => {
  const messages = useSelector((state) => state.allMessages);
  const username = useSelector((state) => state.username);
  const fontSize = useSelector((state) => state.fontSize);
  const fontSizeMessage =
    fontSize === "default" ? "16px" : fontSize === "small" ? "13px" : "22px";
  const fontSizeTime =
    fontSize === "default" ? "11px" : fontSize === "small" ? "9px" : "14px";
  const renderedMessages = messages.map(({ id, data, messageTime, member }) => {
    return (
      <Stack
        sx={{
          backgroundColor: "#f7f7f7",
          padding: "1%",
          borderRadius: "10px",
        }}
        key={id}
        spacing={1}
        justifyContent="flex-end"
        alignSelf={
          username === member.clientData.username ? "flex-end" : "flex-start"
        }
      >
        <Typography
          sx={{
            color: `${member.clientData.color}`,
            fontWeight: "bold",
            fontSize: `${fontSizeMessage}`,
          }}
        >
          {" "}
          {member.clientData.username}
        </Typography>
        <Typography
          sx={{
            fontSize: `${fontSizeMessage}`,
          }}
        >
          {data}{" "}
          <span
            style={{
              fontSize: `${fontSizeTime}`,
            }}
          >
            {messageTime}
          </span>
        </Typography>
      </Stack>
    );
  });

  return (
    <Box className="message-container2" sx={styleMessageBox}>
      <Stack
        spacing={2}
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={styleMessageStack}
      >
        {renderedMessages}
      </Stack>
    </Box>
  );
};

export default MessageScreen;
