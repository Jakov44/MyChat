import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainCard from "../containers/MainCard";
import {
  Input,
  Stack,
  InputLabel,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { stringAvatar } from "../material/material";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.username);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGGED_IN", payload: true });
  };
  return (
    <MainCard>
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
          <Avatar {...stringAvatar("Chat Away")}></Avatar>
          <InputLabel sx={{ fontSize: "22px" }}>Enter username:</InputLabel>
          <Input
            inputProps={{ minLength: 2 }}
            required={true}
            placeholder="UserName"
            label="Outlined"
            value={input}
            onChange={(e) =>
              dispatch({ type: "USERNAME", payload: e.target.value })
            }
            type="text"
          ></Input>
          <Button variant="outlined" type="submit" sx={{ width: "130px" }}>
            Login
          </Button>
        </Stack>
      </form>
    </MainCard>
  );
};

export default LoginScreen;
