export const onError = () => {
  return { type: "ERROR" };
};

export const getMembers = (members) => {
  return { type: "MEMBERS", payload: members };
};

export const newMessage = (message) => {
  return { type: "ADD_MESSAGE", payload: message };
};
