import { CHECKAPPLY } from "../constants/actionTypes";
import * as api from "../api/index";

const ActionCheckApplied = (id) => async (dispatch) => {
  try {
    const { data } = await api.checkApply(id);
    dispatch({ type: CHECKAPPLY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export default ActionCheckApplied;
