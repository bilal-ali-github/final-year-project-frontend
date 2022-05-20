import * as actionTypes from "../constants/actionTypes";

const checkApply = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.CHECKAPPLY:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default checkApply;
