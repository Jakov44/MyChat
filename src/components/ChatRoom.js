import React, { Component } from "react";
import RoomsList from "./RoomsList";
import MessageScreen from "./MessageScreen";
import MessageInput from "./MessageInput";
import UsersList from "./UsersList";
import { Container, Paper, Box } from "@mui/material";

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    // this.drone = new window.Scaledrone("Z806yyLPr25GOfjY", {
    //   data: { username: this.props.username },
    // });
    // const room = this.drone.subscribe("my-room");
    // room.on("message", (message) => {
    //   const { data, id, timestamp, clientId, member } = message;
    //   this.setState({
    //     messages: [
    //       ...this.state.messages,
    //       {
    //         data: data,
    //         id: id,
    //         timestamp: timestamp,
    //         clientId: clientId,
    //         member: member,
    //       },
    //     ],
    //   });
    // });
  }
  sendMessage = (text) =>
    this.drone.publish({
      room: "my-room",
      message: text,
    });
  render() {
    return (
      <Container maxWidth={"lg"}>
        <Paper style={{ height: "800px" }} sx={{ borderRadius: "15px" }}>
          <Box sx={{ display: "flex", height: "100%", flexDirection: "row" }}>
            <RoomsList />
            <Box
              sx={{
                display: "flex",
                height: "100%",
                width: "90%",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <UsersList />
              <MessageScreen messages={this.state.messages} />
              <MessageInput sendMessage={this.sendMessage} />
            </Box>
          </Box>
        </Paper>
      </Container>
    );
  }
}
