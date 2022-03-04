export const onError = () => {
  return { type: "ERROR", payload: true };
};

export const getMembers = (members) => {
  return { type: "MEMBERS", payload: members };
};

export const newMessage = (message) => {
  return { type: "ADD_MESSAGE", payload: message };
};

export const reConnect = () => {
  return { type: "RECONNECT", payload: false };
};
