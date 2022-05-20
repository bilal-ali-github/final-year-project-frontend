import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: [] }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action.payload };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: [] };
    default:
      return state;
  }
};

export default authReducer;
