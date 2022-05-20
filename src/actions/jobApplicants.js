import { JOBWITHAPPLICANTS } from "../constants/actionTypes";
import * as api from "../api/index";

const ActionGetJobWithApplicants = (id) => async (dispatch) => {
  try {
    const { data } = await api.getJobwithApplicants(id);
    dispatch({ type: JOBWITHAPPLICANTS, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default ActionGetJobWithApplicants;
