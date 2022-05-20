import { CREATEINFO } from "../constants/actionTypes";
import * as api from "../api/index";
import { useLocation } from "react-router-dom";

export const ActionInfoPersonal = (FormData) => async (dispatch) => {
  try {
    const { data } = await api.createInfoPersonal(FormData);
    dispatch({ type: CREATEINFO, data });
  } catch (error) {
    console.log(error);
  }
};

export const ActionInfoEducation = (FormData) => async (dispatch) => {
  try {
    const { data } = await api.createInfoEducation(FormData);
    dispatch({ type: CREATEINFO, data });
  } catch (error) {
    console.log(error);
  }
};

export const ActionInfoSkill = (FormData) => async (dispatch) => {
  try {
    const { data } = await api.createInfoSkill(FormData);
    dispatch({ type: CREATEINFO, data });
  } catch (error) {
    console.log(error);
  }
};

export const ActionInfoTitle = (FormData, router) => async (dispatch) => {
  try {
    const { data } = await api.createInfoTitle(FormData);
    dispatch({ type: CREATEINFO, data });
  } catch (error) {
    console.log(error);
  }
};

export const ActionInfoBank =
  (FormData, router, location) => async (dispatch) => {
    const { userId } = FormData;
    try {
      const { data } = await api.createInfoBank(FormData);
      dispatch({ type: CREATEINFO, data });
      if (location.pathname === "/profilecreationClient") {
        router(`/client/${userId}`);
      } else if (location.pathname === "/profilecreationFreelancer") {
        router(`/freelancer/${userId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
