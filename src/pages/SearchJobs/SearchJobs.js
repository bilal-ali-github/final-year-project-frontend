import React, { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionGetAllJobs from "../../actions/allJobs";
import ActionApplyToJob from "../../actions/applyJob";
import ActionCheckApplied from "../../actions/checkApply";

const SearchJobs = () => {
  const userId = JSON.parse(localStorage.getItem("profile")).userId;
  const navigate = useNavigate();
  if (userId === undefined) navigate("/");
  const initialApplyData = {
    coverLetter: "",
    offerBudget: "",
    applicantId: "",
    jobId: "",
  };
  const [applyData, setApplyData] = useState(initialApplyData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionGetAllJobs());
    dispatch(ActionCheckApplied(userId));
  }, []);
  const jobsData = useSelector((state) => state.allJobs.data);
  const [jobApplied] = useSelector((state) => state.checkApply.data);
  const input = createRef();
  const handleChange = (e) => {
    setApplyData({ ...applyData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(
      ActionApplyToJob({
        ...applyData,
        applicantId: userId,
        jobId: input.value,
      })
    );
  };

  return (
    <>
      <div className="green_background" style={{ backgroundColor: "#198754" }}>
        <main className="container py-5">
          <section className="row mx-2 py-5 px-4 bg-white border border-white border-5 rounded mb-5">
            <h2 className="mx-sm-5 mb-5">Jobs Posted</h2>
            {jobsData === undefined
              ? " "
              : jobsData.map((job) => (
                  <div
                    key={job}
                    className="jobs col-sm-8 m-auto p-3 border border-success border-2 rounded mb-3"
                  >
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="row mb-3">
                          <div className="col d-flex">
                            <img
                              src={
                                job.personalInfo.profilePicture ||
                                require("../../images/placeholder_user.png")
                              }
                              alt="user-img"
                              className="img-fluid rounded-circle border border-3 border-success "
                              style={{ maxWidth: "3rem" }}
                            />

                            <div className="d-flex mt-2 mx-2">
                              <h6>
                                {job.user.firstName} {job.user.lastName}
                              </h6>
                              <h6 className="fw-light">
                                &nbsp; - {job.personalInfo.city}
                              </h6>
                            </div>
                          </div>
                        </div>
                        <h5>Job Description</h5>
                        <p>{job.jobDescription}</p>
                      </div>
                      <div className="col-sm-4 align-self-end">
                        <p className="fw-normal">
                          Budget :{" "}
                          <span className="fw-bold"> {job.jobBudget} Rs</span>
                        </p>
                        <p className="fw-normal">
                          Category :{" "}
                          <span className="fw-bold">{job.jobCategory}</span>
                        </p>

                        <p className="fw-normal">
                          Skills :{" "}
                          {job.jobSkills.map((skill) => (
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
                            {job.jobApplicnats?.length || 0}
                          </span>
                        </p>
                        {jobApplied._id === job._id ? (
                          <p className="text-success">Applied Already</p>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                            {...(jobApplied._id === job._id ? "disabled" : "")}
                          >
                            Apply to Job
                          </button>
                        )}

                        <div
                          className="offcanvas offcanvas-end"
                          tabIndex="-1"
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Apply to Job</h5>
                            <button
                              type="button"
                              className="btn-close text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="offcanvas-body px-4">
                            <div className="row">
                              <h5>Job Description</h5>
                              <p>{job.jobDescription}</p>
                              <p className="fw-normal">
                                Skills :{" "}
                                {job.jobSkills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="badge rounded-pill bg-secondary mx-2 px-3"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </p>
                              <div className="col">
                                <p className="fw-normal">
                                  Budget :{" "}
                                  <span className="fw-bold">
                                    {" "}
                                    {job.jobBudget} Rs
                                  </span>
                                </p>
                              </div>
                              <div className="col">
                                <p className="fw-normal">
                                  Category :{" "}
                                  <span className="fw-bold">
                                    {job.jobCategory}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="row mt-4">
                              <form>
                                <h4 className="mb-3">Application,</h4>
                                <div className="row mb-2">
                                  <label
                                    htmlFor="InputCoverLetter"
                                    className="form-label"
                                  >
                                    Write Your Cover Letter
                                  </label>
                                  <textarea
                                    type="text"
                                    className="form-control form-control"
                                    id="InputCoverLetter"
                                    name="coverLetter"
                                    placeholder="Write Cover Letter.."
                                    rows={4}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="row mb-4">
                                  <label
                                    htmlFor="InputOfferBudget"
                                    className="form-label"
                                  >
                                    Offer Budget
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control form-control-sm"
                                    id="InputOfferBudget"
                                    name="offerBudget"
                                    placeholder="Enter Hourly Rate Hours"
                                    onChange={handleChange}
                                  />
                                  <input
                                    type="hidden"
                                    name="jobId"
                                    value={job._id}
                                    ref={input}
                                  />
                                </div>

                                <div className="text-center">
                                  <button
                                    type="button"
                                    name="applyForm"
                                    className="btn btn-success btn-sm"
                                    onClick={handleSubmit}
                                  >
                                    Apply
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </section>
        </main>
      </div>
    </>
  );
};

export default SearchJobs;
