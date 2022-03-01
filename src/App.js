import React from "react";
import { useSelector } from "react-redux";
import ChatRoom from "./components/ChatRoom";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const username = useSelector((state) => state.username);
  return (
    <div id="main-screen">
      {isLoggedIn === true && username ? <ChatRoom /> : <LoginScreen />}
    </div>
  );
};

export default App;
