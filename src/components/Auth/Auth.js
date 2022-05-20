import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup, signin } from "../../actions/auth";

const Auth = ({ isSignup, setisSignup }) => {
  const initialStateSignup = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    joinAs: "",
  };
  const initialStateSignin = {
    email: "",
    password: "",
  };
  const [formSignup, setformSignup] = useState(initialStateSignup);
  const [formSignin, setformSignin] = useState(initialStateSignin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeSignup = (e) => {
    setformSignup({ ...formSignup, [e.target.name]: e.target.value });
  };
  const handleChangeSignin = (e) => {
    setformSignin({ ...formSignin, [e.target.name]: e.target.value });
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    dispatch(signup(formSignup, navigate));
    setformSignin({ formSignup: "" });
    setisSignup(true);
  };

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    dispatch(signin(formSignin, navigate));
    setformSignin({ formSignin: "" });
  };

  if (isSignup == false) {
    return (
      <form>
        <h3 className="mb-3">Sign up,</h3>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="InputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="InputFirstName"
              name="firstName"
              onChange={handleChangeSignup}
            />
          </div>
          <div className="col">
            <label htmlFor="InputLastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="InputLastName"
              name="lastName"
              onChange={handleChangeSignup}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="InputEmail"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleChangeSignup}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="row mb-3">
          <div className="col align-self-end">
            <div className="mb-3">
              <label htmlFor="InputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-sm"
                id="InputPassword"
                name="password"
                onChange={handleChangeSignup}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="InputConfirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control form-control-sm"
                id="InputConfirmPassword"
                name="confirmPassword"
                onChange={handleChangeSignup}
              />
            </div>
          </div>
        </div>
        <div className="mb-3 text-center">
          <p>Join as a client or a freelancer,</p>
          <input
            type="radio"
            className="btn-check"
            name="joinAs"
            id="option4"
            autoComplete="off"
            value="Freelancer"
            onChange={handleChangeSignup}
          />
          <label className="btn btn-outline-success btn-sm" htmlFor="option4">
            Looking for Work
          </label>
          <input
            type="radio"
            className="btn-check"
            name="joinAs"
            id="option2"
            autoComplete="off"
            value="Client"
            onChange={handleChangeSignup}
          />
          <label className="btn btn-outline-success btn-sm" htmlFor="option2">
            Hiring for a Project
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-success btn-sm"
            name="signup"
            onClick={handleSubmitSignup}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
  if (isSignup == true) {
    return (
      <form>
        <h3 className="mb-3">Sign in,</h3>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="InputEmail"
            name="email"
            placeholder="Enter Email"
            onChange={handleChangeSignin}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control form-control-sm"
            id="InputPassword"
            name="password"
            placeholder="Enter Password"
            onChange={handleChangeSignin}
          />
        </div>
        <div className="my-4">
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success btn-sm"
              name="signup"
              onClick={handleSubmitSignin}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
};
export default Auth;
