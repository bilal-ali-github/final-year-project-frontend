import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionUpdateProfile } from "../../actions/auth";
import { ActionInfoTitle } from "../../actions/profileCreation";

const InfoTitlte = ({ userId }) => {
  const updation = { status: 4 };
  const initialInfoTitle = {
    availability: "",
    hourlyRate: "",
    title: "",
    profileDescription: "",
  };
  const [InfoTitle, setInfoTitle] = useState(initialInfoTitle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfoTitle({ ...InfoTitle, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(ActionInfoTitle({ ...InfoTitle, userId: userId }, navigate));
    dispatch(ActionUpdateProfile({ ...updation, userId: userId }));
    setInfoTitle(initialInfoTitle);
  };
  return (
    <form className="px-1">
      <h3 className="mb-5">Profile Description</h3>
      <div className="row">
        <div className="col-sm-6 mb-3">
          <div className="row">
            <div className="col-9">
              <label htmlFor="InputAvailablity" className="form-label">
                Availablity Hours
              </label>
              <input
                type="number"
                className="form-control form-control-sm"
                id="InputAvailablity"
                name="availability"
                placeholder="Enter Availablity Hours / Week"
                onChange={handleChange}
              />
            </div>
            <div className="col-3 align-self-end">
              <p className="fs-6">&nbsp; / Week</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="row">
            <div className="col-9">
              <label htmlFor="InputHourlyRate" className="form-label">
                Hourly Rate
              </label>
              <input
                type="number"
                className="form-control form-control-sm"
                id="InputHourlyRate"
                name="hourlyRate"
                placeholder="Enter Hourly Rate Hours"
                onChange={handleChange}
              />
            </div>
            <div className="col-3 align-self-end">
              <p className="fs-6 text-success fw-bold">&nbsp; Rs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3 px-2">
        <label htmlFor="InputTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="InputTitle"
          name="title"
          placeholder="Enter Profile Title"
          onChange={handleChange}
        />
      </div>
      <div className="row mb-5">
        <label htmlFor="InputDescription" className="form-label">
          Profile Description
        </label>
        <textarea
          type="text"
          className="form-control form-control"
          id="InputDescription"
          name="profileDescription"
          placeholder="Enter Profile Description"
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-success btn-sm"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default InfoTitlte;
