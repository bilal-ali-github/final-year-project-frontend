import { CREATECONTRACT } from "../constants/actionTypes";
import * as api from "../api/index";

const ActionCreateContract = (FormData) => async (dispatch) => {
  try {
    const { data } = await api.createContract(FormData);
    dispatch({ type: CREATECONTRACT, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default ActionCreateContract;
