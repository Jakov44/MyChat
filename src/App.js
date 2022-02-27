import React, { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import LoginScreen from "./components/LoginScreen";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#ffab2c",
    },
  },
});

const App = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // return isLoggedIn === true && username ? (
  //   <ChatRoom username={username} />
  // ) : (
  //   <LoginScreen
  //     username={username}
  //     setUsername={setUsername}
  //     setIsLoggedIn={setIsLoggedIn}
  //   />
  return (
    <ThemeProvider theme={theme}>
      <div id="main-screen">
        <ChatRoom username={username} />
        {/* <LoginScreen
          username={username}
          setUsername={setUsername}
          setIsLoggedIn={setIsLoggedIn}
        /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
