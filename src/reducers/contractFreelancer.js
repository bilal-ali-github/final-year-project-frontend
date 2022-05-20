import * as actionTypes from "../constants/actionTypes";

const contractFreelancer = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.GETCONTRACTFREELANCER:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default contractFreelancer;
