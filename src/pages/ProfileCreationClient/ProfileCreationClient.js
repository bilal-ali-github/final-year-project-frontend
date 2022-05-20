import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ActionCheckProfile } from "../../actions/auth";
import InfoBank from "../../components/InfoBank/InfoBank";
import InfoPersonal from "../../components/InfoPersonal/InfoPersonal";

const ProfileCreation = () => {
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
                <InfoBank userId={userId} />
              ) : (
                ""
              )}
              {profileStatus?.profileCreated === 5
                ? navigate(`/client/${userId}`)
                : ""}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCreation;
