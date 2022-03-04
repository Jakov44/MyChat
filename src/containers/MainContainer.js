import React from "react";

const MainContainer = (props) => {
  return (
    <div id="main-screen" style={props.style}>
      {props.children}
    </div>
  );
};

export default MainContainer;
