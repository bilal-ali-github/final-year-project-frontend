import { GETCONTRACTFREELANCER } from "../constants/actionTypes";
import * as api from "../api/index";

export const ActionGetContractFreelancer = (id) => async (dispatch) => {
  try {
    const { data } = await api.getContractFreelancer(id);
    console.log(data);
    dispatch({
      type: GETCONTRACTFREELANCER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
