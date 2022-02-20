const allMessages = ["jedna poruka", "druga poruka", "treca poruka"];
const currentMessage = "";

const initialState = { currentMessage, allMessages };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, allMessages: [...state.allMessages, action.payload] };
    case "CURRENT_MESSAGE":
      return { ...state, currentMessage: action.payload };
    default:
      return state;
  }
}
