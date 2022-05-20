import { GETCLIENTPROFILEINFO } from "../constants/actionTypes";
import * as api from "../api/index";

export const ActionClientProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.getClientInfo(id);
    console.log(data);
    dispatch({
      type: GETCLIENTPROFILEINFO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
