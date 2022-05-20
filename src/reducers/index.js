import { combineReducers } from "redux";

import auth from "./auth";
import checkProfile from "./checkProfile";
import profileCreation from "./profileCreation";
import freelancerProfile from "./freelancerProfile";
import clientProfile from "./clientProfile";
import clientJobs from "./clientJobs";
import allJobs from "./allJobs";
import applyJob from "./applyJob";
import checkApply from "./checkApply";
import jobApplicants from "./jobApplicants";
import contractClient from "./contractClient";
import contractFreelancer from "./contractFreelancer";

export const reducers = combineReducers({
  auth,
  checkProfile,
  profileCreation,
  freelancerProfile,
  clientProfile,
  clientJobs,
  allJobs,
  applyJob,
  checkApply,
  jobApplicants,
  contractClient,
  contractFreelancer,
});
