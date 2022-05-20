import * as actionTypes from "../constants/actionTypes";

const contractClient = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.GETCONTRACTCLIENT:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default contractClient;
