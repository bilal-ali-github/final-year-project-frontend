import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActionGetClientJobs from "../../actions/clientJobs";
import { ActionClientProfile } from "../../actions/clientProfile";
import ActionCreateJob from "../../actions/createJob";

const ClientProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionClientProfile(id));
    dispatch(ActionGetClientJobs(id));
  }, [id, dispatch]);
  const [profileData] = useSelector((state) => state.clientProfile.data);
  const jobsData = useSelector((state) => state.clientJobs.data);
  console.log(jobsData);
  const initialJobData = {
    jobDescription: "",
    jobCategory: "",
    jobSkills: "",
    jobBudget: "",
  };
  const [JobData, setJobData] = useState(initialJobData);
  const handleChange = (e) => {
    setJobData({ ...JobData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(ActionCreateJob({ ...JobData, userId: id }));
  };
  return (
    <>
      <div className="green_background" style={{ backgroundColor: "#198754" }}>
        <main className="container py-5">
          {profileData === undefined ? (
            <>
              <section
                className="row mx-2 py-5 px-4 bg-white border border-white border-5 rounded mb-5"
                style={{ width: "100%", height: "100vh" }}
              ></section>
            </>
          ) : (
            <>
              <section className="row mx-2 py-5 px-4 bg-white border border-white border-5 rounded mb-5">
                <div className="col-sm-3">
                  <div className="text-center">
                    <img
                      src={
                        profileData.profilePicture ||
                        require("../../images/placeholder_user.png")
                      }
                      alt="user_img"
                      className="img-fluid rounded-circle border border-5 border-success"
                      style={{ maxWidth: "200px", minWidth: "200px" }}
                    ></img>
                  </div>
                </div>
                <div className="col-sm-9  align-self-center pt-3">
                  <div className="row">
                    <div className="col-sm">
                      <h1>
                        {profileData.user.firstName} {profileData.user.lastName}
                      </h1>
                      <h6> {profileData.city}</h6>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row mx-2 py-5 px-2 bg-white border border-white border-5 rounded">
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#newJobModal"
                  >
                    Post New Job
                  </button>
                  <div
                    className="modal fade"
                    id="newJobModal"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="newJobModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="newJobModalLabel">
                            Post New Job
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body py-5">
                          <form className="px-sm-4">
                            <div className="row mb-5 text-start">
                              <label
                                htmlFor="InputDescription"
                                className="form-label"
                              >
                                Job Description
                              </label>
                              <textarea
                                type="text"
                                className="form-control form-control"
                                id="InputDescription"
                                name="jobDescription"
                                placeholder="Enter Job Description"
                                rows={3}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="row mb-5 text-start">
                              <label
                                htmlFor="SelectCategory"
                                className="form-label"
                              >
                                Category
                              </label>
                              <select
                                className="form-select"
                                aria-label="Select Category"
                                id="SelectCategory"
                                name="jobCategory"
                                onChange={handleChange}
                              >
                                <option>Select Category</option>
                                <option value="Education">Education</option>
                                <option value="Research">Research</option>
                                <option value="Software">Software</option>
                                <option value="Education">Education</option>
                                <option value="Research">Research</option>
                                <option value="Software">Software</option>
                              </select>
                            </div>
                            <div className="row mb-5 text-start">
                              <label
                                htmlFor="InputSkills"
                                className="form-label"
                              >
                                Skills
                              </label>
                              <div className="text-end mb-1 fw-lighter fs-6">
                                <small>
                                  Enter a maximum of 15 skill, separated by
                                  comma(,)
                                </small>
                              </div>
                              <textarea
                                type="text"
                                className="form-control form-control"
                                id="InputSkills"
                                name="skills"
                                placeholder="Enter your Skills e.g: Javascript, React, Node"
                                onChange={(e) =>
                                  setJobData({
                                    ...JobData,
                                    jobSkills: e.target.value.split(","),
                                  })
                                }
                              />
                            </div>
                            <div className="row mb-5 text-start">
                              <label
                                htmlFor="InputBudget"
                                className="form-label"
                              >
                                Project Budget
                              </label>
                              <input
                                type="number"
                                className="form-control form-control-sm"
                                id="InputBudget"
                                name="jobBudget"
                                placeholder="Enter Project Budget"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-success btn-sm"
                                onClick={handleSubmit}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mx-sm-5 mt-5 mb-5">Jobs Posted</h2>
                {jobsData === undefined
                  ? ""
                  : jobsData?.map((job) => (
                      <div
                        key={job}
                        className="jobs col-sm-8 m-auto p-3 border border-success border-3 rounded mb-3"
                      >
                        <div className="row">
                          <div className="col-sm-8">
                            <h5>Job Description</h5>
                            <p>{job.jobDescription}</p>
                          </div>
                          <div className="col-sm-4 align-self-center">
                            <p className="fw-normal">
                              Budget :{" "}
                              <span className="fw-bold">
                                {job.jobBudget} Rs
                              </span>
                            </p>
                            <p className="fw-normal">
                              Category :{" "}
                              <span className="fw-bold">{job.jobCategory}</span>
                            </p>

                            <p className="fw-normal">
                              Skills :{" "}
                              {job.jobSkills?.map((skill) => (
                                <span
                                  key={skill}
                                  className="badge rounded-pill bg-secondary mx-2 px-3"
                                >
                                  {skill}
                                </span>
                              ))}
                            </p>

                            <p className="fw-normal">
                              Applicants :{" "}
                              <span className="fw-bold">
                                {job.jobApplicants?.length || 0}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default ClientProfile;
