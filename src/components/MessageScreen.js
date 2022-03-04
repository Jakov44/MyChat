import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const MessageScreen = () => {
  const messages = useSelector((state) => state.allMessages);
  const username = useSelector((state) => state.username);
  const fontSize = useSelector((state) => state.fontSize);
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
            fontSize: `${
              fontSize === "default"
                ? "16px"
                : fontSize === "small"
                ? "13px"
                : "22px"
            }`,
          }}
        >
          {" "}
          {member.clientData.username}
        </Typography>
        <Typography
          sx={{
            fontSize: `${
              fontSize === "default"
                ? "16px"
                : fontSize === "small"
                ? "13px"
                : "22px"
            }`,
          }}
        >
          {data}{" "}
          <span
            style={{
              fontSize: `${
                fontSize === "default"
                  ? "11px"
                  : fontSize === "small"
                  ? "9px"
                  : "14px"
              }`,
            }}
          >
            {messageTime}
          </span>
        </Typography>
      </Stack>
    );
  });

  return (
    <Box
      className="message-container2"
      sx={{
        height: "70%",
        width: "80%",
        backgroundColor: "#fcfcfc",
        marginRight: "5%",
        marginBottom: "2%",
        borderRadius: "10px",
        overflow: "auto",
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
          marginLeft: "2%",
        }}
      >
        {renderedMessages}
      </Stack>
    </Box>
  );
};

export default MessageScreen;
