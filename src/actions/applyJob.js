import { APPLYTOJOB } from "../constants/actionTypes";
import * as api from "../api/index";

const ActionApplyToJob = (FormData) => async (dispatch) => {
  try {
    const { data } = await api.applyToJob(FormData);
    dispatch({ type: APPLYTOJOB, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default ActionApplyToJob;
