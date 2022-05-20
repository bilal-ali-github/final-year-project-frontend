import * as actionType from "../constants/actionTypes";

const checkProfile = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionType.CHECKPROFILE:
      console.log(action.payload);
      return { ...state, data: action.payload };
    case actionType.UPDATEPROFILE:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default checkProfile;
