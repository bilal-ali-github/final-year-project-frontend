import * as actionTypes from "../constants/actionTypes";

const createContract = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.CREATECONTRACT:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default createContract;
