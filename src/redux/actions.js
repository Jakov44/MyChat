export const onError = () => {
  return { type: "ERROR" };
};

export const getMembers = (members) => {
  return { type: "MEMBERS", payload: members };
};
