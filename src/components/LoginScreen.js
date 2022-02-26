import React from "react";
import {
  Input,
  Stack,
  InputLabel,
  Button,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const LoginScreen = ({ username, setUsername, setIsLoggedIn }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  return (
    <Paper id="login-card" elevation={5} sx={{ borderRadius: "15px" }}>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        style={{ width: "100%", height: "100%" }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={6}
          style={{ height: "100%" }}
        >
          <Typography component="h1" sx={{ fontSize: "30px" }}>
            Welcome to ChatAway
          </Typography>
          <Avatar {...stringAvatar("New User")}></Avatar>
          <InputLabel sx={{ fontSize: "22px" }}>Enter username:</InputLabel>
          <Input
            placeholder="UserName"
            label="Outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          ></Input>
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default LoginScreen;
