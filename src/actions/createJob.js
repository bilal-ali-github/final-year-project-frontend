import * as api from "../api/index";

const ActionCreateJob = (FormData) => async (dispatch) => {
  try {
    const { data } = await api.createJob(FormData);
  } catch (error) {
    console.log(error);
  }
};

export default ActionCreateJob;
