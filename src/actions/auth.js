import {
  AUTH,
  LOGOUT,
  CHECKPROFILE,
  UPDATEPROFILE,
} from "../constants/actionTypes";
import * as api from "../api/index";

export const signup = (FormData, router) => async (dispatch) => {
  try {
    console.log(FormData);
    const { data } = await api.signup(FormData);
  } catch (error) {
    console.log(error);
  }
};

export const signin = (FormData, router) => async (dispatch) => {
  try {
    const { data } = await api.signin(FormData);
    dispatch({ type: AUTH, payload: data });
    if (data?.joinAs === "Freelancer") {
      router("/profilecreationFreelancer");
    } else if (data?.joinAs === "Client") {
      router("/profilecreationClient");
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = (router) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT, payload: [] });
    localStorage.clear();
    router("/");
  } catch (error) {
    console.log(error);
  }
};

export const ActionCheckProfile = (userId, router) => async (dispatch) => {
  try {
    const { data } = await api.checkProfile(userId);
    console.log(data);
    dispatch({ type: CHECKPROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const ActionUpdateProfile = (updation) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(updation);
    console.log(data);
    dispatch({ type: UPDATEPROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
