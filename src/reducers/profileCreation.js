import * as actionType from "../constants/actionTypes";

const profileCreation = (state = null, action) => {
  switch (action.type) {
    case actionType.CREATEINFO:
      return state;
    default:
      return state;
  }
};

export default profileCreation;
