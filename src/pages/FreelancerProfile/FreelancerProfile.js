import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionFreelancerProfile } from "../../actions/freelancerProfile";
import Navbar from "../../components/Navbar/Navbar";

const FreelancerProfile = () => {
  const { id } = useParams();
  const [profileData] = useSelector((state) => state.freelancerProfile.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionFreelancerProfile(id));
  }, [id, dispatch]);
  console.log(profileData);

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
                      <h5> {profileData.titleInfo.title}</h5>
                      <h6> {profileData.city}</h6>
                    </div>
                    <div className="col-sm align-self-center">
                      <div className="text-end pt-3">
                        <h5 className="fw-normal">
                          Hourly Rate -
                          <span className="text-success fw-bold">
                            {" "}
                            {profileData.titleInfo.hourlyRate} Rs
                          </span>
                        </h5>
                        <h5 className="fw-normal">
                          Availablility - {profileData.titleInfo.availability}{" "}
                          hr/week
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row">
                <div className="col-sm-8">
                  <section className="row mx-2 py-5 px-2 bg-white border border-white border-5 rounded">
                    <div className="mb-3">
                      <h3>Description</h3>
                      <p>{profileData.titleInfo.profileDescription}</p>
                    </div>
                    <div className="mb-3">
                      <h3>Portfolio</h3>
                      <div className="row py-2">
                        <div className="col-sm-6">
                          <div className="card">
                            <img className="card-img-top" alt="..."></img>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#" className="btn btn-primary">
                                Go somewhere
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <img className="card-img-top" alt="..."></img>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#" className="btn btn-primary">
                                Go somewhere
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-sm-4">
                  <section className="row mx-2 py-5 px-2 bg-white border border-white border-5 rounded">
                    <div className="mb-3">
                      <h3>Category</h3>
                      <p className="fs-5">Software Development</p>
                    </div>
                    <div className="mb-3">
                      <h3>Skills</h3>
                      <div className="inline-block fs-5">
                        {profileData.skillInfo.skills.map((skill) => (
                          <p
                            className="badge rounded-pill bg-secondary mx-2 px-3"
                            key={skill}
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h3>Education</h3>
                      <h5 className="mt-4">Air University, Islamabad</h5>
                      <div className="d-flex ms-auto fs-5 fw-normal">
                        <p>BSIT</p>
                        <p>&nbsp; 2016 - 2018</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <h3>Language</h3>
                      <h6 className="mt-4">English</h6>
                      <p>Fluent</p>
                    </div>
                  </section>
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default FreelancerProfile;
