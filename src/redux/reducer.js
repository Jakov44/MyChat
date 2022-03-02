const allMessages = [];
const input = "";
const username = "";
const loggedIn = false;
const error = false;
const members = [];
const fontSize = "default";
const backColor =
  "90deg, rgba(203, 140, 0, 1) 0%, rgba(255, 189, 32, 1) 46%, rgba(204, 164, 0, 1) 100%";
const initialState = {
  input,
  allMessages,
  username,
  loggedIn,
  error,
  members,
  fontSize,
  backColor,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, allMessages: [...state.allMessages, action.payload] };
    case "CURRENT_MESSAGE":
      return { ...state, input: action.payload };
    case "USERNAME":
      return { ...state, username: action.payload };
    case "LOGGED_IN":
      return { ...state, loggedIn: action.payload };
    case "ERROR":
      return { ...state, error: !error };
    case "MEMBERS":
      return { ...state, members: action.payload };
    case "FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "BACKGROUND_COLOR":
      return { ...state, backColor: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
