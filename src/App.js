import React from "react";
import { useSelector } from "react-redux";
import ChatRoom from "./components/ChatRoom";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const username = useSelector((state) => state.username);
  const backgroundColor = useSelector((state) => state.backColor);
  return (
    <div
      id="main-screen"
      style={{
        background: `linear-gradient(${backgroundColor})`,
      }}
    >
      {isLoggedIn === true && username ? <ChatRoom /> : <LoginScreen />}
    </div>
  );
};

export default App;
