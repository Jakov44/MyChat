import React from "react";
import MainCard from "../../containers/MainCard";
import { Typography, Button, Box, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { styleErrorBox, styleErrorT } from "../../styles/styles";

const ErrorScreen = () => {
  const dispatch = useDispatch();
  return (
    <MainCard>
      <Box sx={styleErrorBox}>
        <Typography align="center" sx={styleErrorT}>
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
