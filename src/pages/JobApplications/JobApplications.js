import React, { createRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActionGetClientJobs from "../../actions/clientJobs";
import ActionGetJobWithApplicants from "../../actions/jobApplicants";
import ActionCreateContract from "../../actions/createContract";
import { ActionGetContractClient } from "../../actions/contractClient";

const JobApplications = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionGetClientJobs(id));
    dispatch(ActionGetJobWithApplicants(id));
    dispatch(ActionGetContractClient(id));
  }, [id, dispatch]);
  const jobsData = useSelector((state) => state.clientJobs.data);
  const applicantsData = useSelector((state) => state.jobApplicants.data);
  const contractData = useSelector((state) => state.contractClient.data);
  console.log(contractData);
  const initialContractInfo = {
    clientId: "",
    freelancerId: "",
    contractDescription: "",
    contractBudget: "",
    contractDate: "",
    jobId: "",
  };
  const [ContractInfo, setContractInfo] = useState(initialContractInfo);
  const handleChange = (e) => {
    setContractInfo({ ...ContractInfo, [e.target.name]: e.target.value });
  };
  const inputapplicantId = createRef();
  const inputjobId = createRef();
  const handleSubmit = () => {
    dispatch(
      ActionCreateContract({
        ...ContractInfo,
        clientId: id,
        freelancerId: inputapplicantId.value,
        jobId: inputjobId.value,
      })
    );
  };

  return (
    <>
      <div className="green_background" style={{ backgroundColor: "#198754" }}>
        <main className="container py-5">
          <section className="mx-2 py-5 px-4 bg-white border border-white border-5 rounded mb-5">
            <h2>Contracted Job</h2>
            {contractData.map((data) => (
              <div className="row my-4" key={data}>
                <p className="fw-bold">
                  Status : <span className="fw-normal">{data.Status} </span>
                </p>
                <p className="fw-bold">
                  Description :{" "}
                  <span className="fw-normal">{data.contractDescription} </span>
                </p>
                <p className="fw-bold">
                  Submission :{" "}
                  <span className="fw-normal">{data.contractDate} </span>
                </p>
                <p className="fw-bold">
                  Budget :{" "}
                  <span className="fw-normal">{data.contractBudget} </span>
                </p>
              </div>
            ))}

            <h2>Posted Jobs</h2>
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
                          <span className="fw-bold">{job.jobBudget} Rs</span>
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

                        <button
                          className="btn btn-success btn-sm"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          Show Applicants :{" "}
                          <span className="fw-bold">
                            {job.jobApplicants?.length || 0}
                          </span>
                        </button>
                        <div
                          className="offcanvas offcanvas-end"
                          tabIndex="-1"
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Applicants Info</h5>
                            <button
                              type="button"
                              className="btn-close text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            ></button>
                          </div>
                          {applicantsData.map((applicant) =>
                            applicant._id === job._id ? (
                              <div className="offcanvas-body px-4">
                                <div className="mb-3">
                                  <img
                                    src={require("../../images/placeholder_user.png")}
                                    alt="user-img"
                                    className="img-fluid rounded-circle border border-3 border-success "
                                    style={{ maxWidth: "3rem" }}
                                  />
                                </div>
                                <p className="fw-bold">
                                  Cover Letter :{" "}
                                  <span className="fw-normal">
                                    {applicant.jobApplicants.applicantMessage}
                                  </span>
                                </p>
                                <p className="fw-bold">
                                  Offered Budget :{" "}
                                  <span className="fw-normal">
                                    {applicant.jobApplicants.applicantBudget}
                                  </span>
                                </p>
                                <div className="text-end">
                                  <button
                                    className="btn btn-success btn-sm"
                                    data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                  >
                                    Make Contract
                                  </button>
                                  <div
                                    class="collapse text-start"
                                    id="collapseExample"
                                  >
                                    <div class="card card-body">
                                      <form>
                                        <h5>Contract Details</h5>
                                        <div className="mb-2">
                                          <label
                                            htmlFor="InputContractDescription"
                                            className="form-label"
                                          >
                                            Contract Description
                                          </label>
                                          <textarea
                                            type="email"
                                            className="form-control form-control-sm"
                                            id="InputContractDescription"
                                            name="contractDescription"
                                            placeholder="Enter Contract Description"
                                            rows={4}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="mb-2">
                                          <label
                                            htmlFor="InputContractBudget"
                                            className="form-label"
                                          >
                                            Contract Budget
                                          </label>
                                          <input
                                            type="number"
                                            className="form-control form-control-sm"
                                            id="InputContractBudget"
                                            name="contractBudget"
                                            placeholder="Enter Contract Budget"
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="mb-2">
                                          <label
                                            htmlFor="InputContractDate"
                                            className="form-label"
                                          >
                                            Contract Submission Date
                                          </label>
                                          <input
                                            type="date"
                                            className="form-control form-control-sm"
                                            id="InputContractDate"
                                            name="contractDate"
                                            placeholder="Enter Contract Date"
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <input
                                          type="hidden"
                                          name="applicantId"
                                          value={
                                            applicant.jobApplicants.applicantId
                                          }
                                          ref={inputapplicantId}
                                        />
                                        <input
                                          type="hidden"
                                          name="jobId"
                                          value={applicant._id}
                                          ref={inputjobId}
                                        />
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
                                <hr />
                              </div>
                            ) : (
                              ""
                            )
                          )}
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

export default JobApplications;
