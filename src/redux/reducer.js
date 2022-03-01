const allMessages = ["jedna poruka", "druga poruka", "treca poruka"];
const input = "";
const username = "";
const loggedIn = false;
const error = false;
const members = [];

const initialState = { input, allMessages, username, loggedIn, error, members };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, allMessages: [...state.allMessages, action.payload] };
    case "CURRENT_MESSAGE":
      return { ...state, input: action.payload };
    case "USERNAME":
      return { ...state, username: action.payload };
    case "LOGGED_IN":
      return { ...state, loggedIn: !loggedIn };
    case "ERROR":
      return { ...state, error: !error };
    case "MEMBERS":
      return { ...state, members: action.payload };
    default:
      return state;
  }
}
