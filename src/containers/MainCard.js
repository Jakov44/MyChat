import React from "react";
import { Paper } from "@mui/material";

const MainContainer = (props) => {
  return (
    <Paper id="login-card" elevation={5} sx={{ borderRadius: "15px" }}>
      {props.children}
    </Paper>
  );
};

export default MainContainer;
