import * as actionTypes from "../constants/actionTypes";

const clientJobs = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.GETCLIENTJOBS:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default clientJobs;
