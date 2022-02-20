import React, { Component } from "react";
import ChatRoom from "./components/ChatRoom";

class App extends Component {
  constructor() {
    super();
    this.state = { messages: [] };
    this.drone = new window.Scaledrone("Z806yyLPr25GOfjY", {
      data: { username: "Jakov" },
    });
    const room = this.drone.subscribe("my-room");
    room.on("message", (message) => {
      const { data, id, timestamp, clientId, member } = message;
      this.setState({
        messages: [
          ...this.state.messages,
          {
            data: data,
            id: id,
            timestamp: timestamp,
            clientId: clientId,
            member: member,
          },
        ],
      });
    });
  }
  sendMessage = (text) =>
    this.drone.publish({
      room: "my-room",
      message: text,
    });

  render() {
    return (
      <div>
        <ChatRoom
          sendMessage={this.sendMessage}
          messages={this.state.messages}
        />
      </div>
    );
  }
}

export default App;
