import { GETALLJOBS } from "../constants/actionTypes";
import * as api from "../api/index";

const ActionGetAllJobs = () => async (dispatch) => {
  try {
    const { data } = await api.getAllJobs();
    dispatch({ type: GETALLJOBS, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default ActionGetAllJobs;
