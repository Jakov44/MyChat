import React from "react";
import MainCard from "../containers/MainCard";
import { Typography, Button, Box, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";

const ErrorScreen = () => {
  const dispatch = useDispatch();
  return (
    <MainCard>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          align="center"
          sx={{
            fontSize: "20px",
            color: "#fc5603",
            paddingRight: "10%",
            paddingLeft: "10%",
          }}
        >
          Something went wrong. Please try logging in again, or wait while we
          attempt to reconnect.
        </Typography>

        <CircularProgress />
        <Button variant="outlined" onClick={() => dispatch({ type: "RESET" })}>
          Go back
        </Button>
      </Box>
    </MainCard>
  );
};

export default ErrorScreen;
