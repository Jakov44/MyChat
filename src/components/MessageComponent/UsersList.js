import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Stack, Typography } from "@mui/material";
import { stringAvatar } from "../../material/material";
import { styleUsersStack } from "../../styles/styles";

const UsersList = () => {
  const members = useSelector((state) => state.members);
  const displayAvatars = members.map((member) => {
    return (
      <Avatar
        title={member.clientData.username}
        key={member.id}
        {...stringAvatar(member.clientData.username)}
      />
    );
  });
  return (
    <Stack
      className="users"
      spacing={1}
      alignItems="center"
      direction="row"
      sx={styleUsersStack}
    >
      <Typography sx={{ marginLeft: "3%" }}>Online:</Typography>
      {displayAvatars}
    </Stack>
  );
};

export default UsersList;
