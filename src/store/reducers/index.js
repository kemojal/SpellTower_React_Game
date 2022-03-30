const initialState = {
  currentWord: ""
};
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case "SET_WORD":
      let newState = { ...state, currentWord: state.currentWord + payload };
      console.log("new state  = ", newState);
      return newState;
    default:
      return state;
  }
}
