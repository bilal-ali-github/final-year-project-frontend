import * as actionType from "../constants/actionTypes";

const freelancerProfile = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionType.GETFREELANCERPROFILEINFO:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default freelancerProfile;
