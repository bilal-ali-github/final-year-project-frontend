import * as actionType from "../constants/actionTypes";

const clientProfile = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionType.GETCLIENTPROFILEINFO:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default clientProfile;
