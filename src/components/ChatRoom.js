import React, { Component } from "react";
import RoomsList from "./RoomsList";
import MessageScreen from "./MessageScreen";
import MessageInput from "./MessageInput";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import { Container, Paper, Box } from "@mui/material";
import { onError, getMembers } from "../redux/actions";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("Z806yyLPr25GOfjY", {
      data: { username: this.props.username },
    });

    this.drone.on("error", (error) => {
      this.props.onError();
    });

    const room = this.drone.subscribe("observable-my-room");
    room.on("members", (members) => {
      console.log(members);
      this.props.getMembers(members);
    });
    room.on("member_join", (member) => {
      this.props.getMembers([...this.props.chatMembers, member]);
    });
    room.on("member_leave", (member) => {
      let newMembers = this.props.chatMembers.filter(
        (chatMember) => chatMember.id !== member.id
      );
      this.props.getMembers(newMembers);
    });
    // room.on("message", (message) => {
    //   const { data, id, timestamp, clientId, member } = message;

    // });
  }
  // sendMessage = (text) =>
  //   this.drone.publish({
  //     room: "my-room",
  //     message: text,
  //   });

  componentWillUnmount() {
    this.room.unsubscribe();
    this.drone.close();
  }

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
              <MessageScreen />
              <MessageInput />
            </Box>
          </Box>
        </Paper>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    chatMembers: state.members,
  };
}

const mapDispatchToProps = {
  onError,
  getMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
