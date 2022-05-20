import { GETCLIENTJOBS } from "../constants/actionTypes";
import * as api from "../api/index";

const ActionGetClientJobs = (id) => async (dispatch) => {
  try {
    const { data } = await api.getClientJobs(id);
    dispatch({ type: GETCLIENTJOBS, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default ActionGetClientJobs;
