import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Stack, Typography } from "@mui/material";
import { stringAvatar } from "../material/material";

const UsersList = () => {
  const userAvatar = useSelector((state) => state.username);
  console.log(userAvatar);
  return (
    <Stack
      spacing={1}
      alignItems="center"
      direction="row"
      sx={{
        height: "10%",
        width: "90%",
        marginRight: "5%",
        marginTop: "2%",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ marginLeft: "3%" }}>Online:</Typography>
      <Avatar {...stringAvatar(userAvatar)} />
    </Stack>
  );
};

export default UsersList;
