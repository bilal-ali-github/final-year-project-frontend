import * as actionTypes from "../constants/actionTypes";

const allJobs = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.GETALLJOBS:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default allJobs;
