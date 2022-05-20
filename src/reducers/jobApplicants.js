import * as actionTypes from "../constants/actionTypes";

const jobApplicants = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.JOBWITHAPPLICANTS:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default jobApplicants;
