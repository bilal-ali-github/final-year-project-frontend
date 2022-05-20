import { GETCONTRACTCLIENT } from "../constants/actionTypes";
import * as api from "../api/index";

export const ActionGetContractClient = (id) => async (dispatch) => {
  try {
    const { data } = await api.getContractClient(id);
    console.log(data);
    dispatch({
      type: GETCONTRACTCLIENT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
