const initialState = "/";

// Reducer
const changeView = (state = initialState, action) => {
  switch (action.type) {
    case "/": {
      state = "/";
      return state;
    }
    case "/view2": {
      state = "/view2";
      return state;
    }
    default:
      return state;
  }
};

export default changeView;
