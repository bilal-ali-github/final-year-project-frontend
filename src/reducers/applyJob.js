import * as actionTypes from "../constants/actionTypes";

const applyJob = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.APPLYTOJOB:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default applyJob;
