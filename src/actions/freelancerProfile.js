import { GETFREELANCERPROFILEINFO } from "../constants/actionTypes";
import * as api from "../api/index";

export const ActionFreelancerProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.getFreelancerInfo(id);
    dispatch({
      type: GETFREELANCERPROFILEINFO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
