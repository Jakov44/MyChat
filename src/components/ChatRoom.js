import React, { Component } from "react";
import RoomsList from "./RoomsList";
import MessageScreen from "./MessageScreen";
import MessageInput from "./MessageInput";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import { Paper, Box } from "@mui/material";
import { onError, getMembers, newMessage, reConnect } from "../redux/actions";
import { stringToColor } from "../material/material";
import ErrorScreen from "./ErrorScreen";
import MainContainer from "../containers/MainContainer";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("Z806yyLPr25GOfjY", {
      data: {
        username: this.props.username,
        color: stringToColor(this.props.username),
      },
    });

    this.drone.on("open", (error) => {
      if (error) {
        this.props.onError();
      }
    });
    this.drone.on("disconnect", () => {
      this.props.onError();
    });
    this.drone.on("reconnect", () => {
      this.props.reConnect();
    });

    const room = this.drone.subscribe("observable-room");
    room.on("members", (members) => {
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
    room.on("message", (message) => {
      const { data, id, timestamp, clientId, member } = message;
      const time = new Date(timestamp * 1000);
      const messageTime = `${time.getHours()}:${time.getMinutes()}`;
      this.props.newMessage({ data, id, messageTime, clientId, member });
    });
  }
  sendMessage = (text) =>
    this.drone.publish({
      room: "observable-room",
      message: text,
    });

  componentWillUnmount() {
    this.drone.close();
  }

  render() {
    return (
      <MainContainer>
        {this.props.error ? (
          <ErrorScreen />
        ) : (
          <Paper
            className="main-paper"
            style={{ height: "80%", width: "70%" }}
            sx={{ borderRadius: "15px" }}
          >
            <Box
              className="container"
              sx={{
                display: "flex",
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <RoomsList />
              <Box
                className="message-container"
                sx={{
                  display: "flex",
                  height: "100%",
                  width: "80%",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  borderLeft: "1px solid #f0f0f0",
                  borderRadius: "10px",
                }}
              >
                <UsersList />
                <MessageScreen />
                <MessageInput sendMessage={this.sendMessage} />
              </Box>
            </Box>
          </Paper>
        )}
      </MainContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    chatMembers: state.members,
    allMessages: state.allMessages,
    error: state.error,
  };
}

const mapDispatchToProps = {
  onError,
  getMembers,
  newMessage,
  reConnect,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
