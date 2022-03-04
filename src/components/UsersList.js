import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Stack, Typography } from "@mui/material";
import { stringAvatar } from "../material/material";

const UsersList = () => {
  const members = useSelector((state) => state.members);
  const displayAvatars = members.map((member) => {
    return (
      <Avatar key={member.id} {...stringAvatar(member.clientData.username)} />
    );
  });
  return (
    <Stack
      className="users"
      spacing={1}
      alignItems="center"
      direction="row"
      sx={{
        height: "10%",
        width: "80%",
        marginRight: "5%",
        marginTop: "2%",
        backgroundColor: "#fcfcfc",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ marginLeft: "3%" }}>Online:</Typography>
      {displayAvatars}
    </Stack>
  );
};

export default UsersList;
