import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";

const Navbar = () => {
  const userId = JSON.parse(localStorage.getItem("profile"))?.userId;
  const joinAs = JSON.parse(localStorage.getItem("profile"))?.joinAs;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className=" ps-sm-5 py-sm-4" href="#">
            <img
              src={require("../../images/logo-green.png")}
              style={{ maxWidth: "10rem" }}
            />
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {location.pathname === "/profilecreationClient" ? (
              <>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              ""
            )}
            {location.pathname === `/client/${userId}` ||
            `/freelancer/${userId}` ? (
              <>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light text-success fw-bold"
                    aria-current="page"
                  >
                    Search
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                  >
                    Messages
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                    onClick={() => {
                      joinAs === "Client"
                        ? navigate(`/jobApplications/${userId}`)
                        : navigate(`/jobApplication/${userId}`);
                    }}
                  >
                    Job Applications
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                    onClick={() => {
                      joinAs === "Client"
                        ? navigate(`/client/${userId}`)
                        : navigate(`/freelancer/${userId}`);
                    }}
                  >
                    Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              ""
            )}
            {location.pathname === "/" ? (
              <>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light text-success fw-bold"
                    aria-current="page"
                  >
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                  >
                    Contact
                  </button>
                </li>
              </>
            ) : (
              ""
            )}
            {location.pathname === "/profilecreationFreelancer" ? (
              <>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light active text-success fw-bold"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
