import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signup = (FormData) => API.post("/users/signup", FormData);
export const signin = (FormData) => API.post("/users/signin", FormData);
export const checkProfile = (userId) =>
  API.get(`/users/check-profile/${userId}`);
export const updateProfile = (updation) =>
  API.post("/users/update-profile", updation);
export const createInfoPersonal = (FormData) =>
  API.post("/users/create-info-personal", FormData);
export const createInfoEducation = (FormData) =>
  API.post("/users/create-info-education", FormData);
export const createInfoSkill = (FormData) =>
  API.post("/users/create-info-skill", FormData);
export const createInfoTitle = (FormData) =>
  API.post("/users/create-info-title", FormData);
export const createInfoBank = (FormData) =>
  API.post("/users/create-info-bank", FormData);
export const createJob = (FormData) => API.post("/users/create-job", FormData);
export const getFreelancerInfo = (id) => API.get(`/users/freelancer/${id}`);
export const getClientInfo = (id) => API.get(`/users/client/${id}`);
export const getClientJobs = (id) => API.get(`/users/get-client-jobs/${id}`);
export const getAllJobs = () => API.get("/users/get-all-jobs");
export const applyToJob = (FormData) =>
  API.post("/users/apply-to-job", FormData);
export const checkApply = (id) => API.get(`/users/check-applied/${id}`);
export const getJobwithApplicants = (id) =>
  API.get(`/users/freelancers-applied/${id}`);
export const createContract = (FormData) =>
  API.post("/users/create-contract", FormData);
export const getContractClient = (id) =>
  API.get(`/users/get-contracts-client/${id}`);
export const getContractFreelancer = (id) =>
  API.get(`/users/get-contracts-freelancer/${id}`);
