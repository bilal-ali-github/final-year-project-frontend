import React from "react";
import { useState, useEffect } from "react";
import InfoPersonal from "../../components/InfoPersonal/InfoPersonal";
import InfoEducation from "../../components/InfoEducation/InfoEducation";
import InfoSkill from "../../components/InfoSkill/InfoSkill";
import InfoTitlte from "../../components/InfoTitle/InfoTitlte";
import InfoBank from "../../components/InfoBank/InfoBank";
import { useDispatch, useSelector } from "react-redux";
import { ActionCheckProfile } from "../../actions/auth";
import { useNavigate } from "react-router-dom";

const ProfileCreationFreelancer = () => {
  const userId = JSON.parse(localStorage.getItem("profile")).userId;
  const navigate = useNavigate();
  if (userId === undefined) navigate("/");
  const [profileStatus] = useSelector((state) => state.checkProfile.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionCheckProfile(userId, navigate));
  }, []);
  return (
    <>
      <div className="green_background" style={{ backgroundColor: "#198754" }}>
        <div className="row mx-0">
          <div className="col-sm-6 mx-auto py-5">
            <section className="bg-white py-4 px-sm-5 border border-white border-5 rounded">
              {profileStatus?.profileCreated === 0 ? (
                <InfoPersonal userId={userId} />
              ) : (
                ""
              )}
              {profileStatus?.profileCreated === 1 ? (
                <InfoEducation userId={userId} />
              ) : (
                ""
              )}
              {profileStatus?.profileCreated === 2 ? (
                <InfoSkill userId={userId} />
              ) : (
                ""
              )}
              {profileStatus?.profileCreated === 3 ? (
                <InfoTitlte userId={userId} />
              ) : (
                ""
              )}
              {profileStatus?.profileCreated === 4 ? (
                <InfoBank userId={userId} />
              ) : (
                ""
              )}
              {profileStatus?.profileCreated === 5
                ? navigate(`/freelancer/${userId}`)
                : ""}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCreationFreelancer;
