import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionInfoEducation } from "../../actions/profileCreation";
import { ActionUpdateProfile } from "../../actions/auth";
const InfoEducation = ({ userId }) => {
  const updation = { status: 2 };
  const initialInfoEducation = {
    institution: "",
    institutionType: "",
    degree: "",
    majors: "",
    startDate: "",
    endDate: "",
    description: "",
  };
  const [InfoEducation, setInfoEducation] = useState(initialInfoEducation);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInfoEducation({ ...InfoEducation, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(ActionInfoEducation({ ...InfoEducation, userId: userId }));
    dispatch(ActionUpdateProfile({ ...updation, userId: userId }));
    setInfoEducation(initialInfoEducation);
  };
  return (
    <form className="px-1">
      <h3 className="mb-5">Education Information</h3>
      <div className="row mb-3">
        <div className="col align-self-end">
          <div className="mb-3">
            <label htmlFor="InputInstitution" className="form-label">
              Institution
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="InputInstitution"
              name="institution"
              placeholder="Enter Institution Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col align-self-end text-center">
          <div className="mb-3">
            <input
              type="radio"
              className="btn-check"
              name="institutionType"
              id="option1"
              autoComplete="off"
              value="Univeristy"
              onChange={handleChange}
            />
            <label className="btn btn-outline-success btn-sm" htmlFor="option1">
              University
            </label>
            <input
              type="radio"
              className="btn-check"
              name="institutionType"
              id="option2"
              autoComplete="off"
              value="College"
              onChange={handleChange}
            />
            <label className="btn btn-outline-success btn-sm" htmlFor="option2">
              College
            </label>
            <input
              type="radio"
              className="btn-check"
              name="institutionType"
              id="option3"
              autoComplete="off"
              value="School"
              onChange={handleChange}
            />
            <label className="btn btn-outline-success btn-sm" htmlFor="option3">
              School
            </label>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="InputDegree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="InputDegree"
            name="degree"
            placeholder="Enter Degree e.g: BS, FSc, Matric"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="InputMajor" className="form-label">
            Major
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="InputMajor"
            name="majors"
            placeholder="Enter Majors e.g: Information Technology, Pre-Engineering, Computer Science"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="InputStartDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control form-control-sm"
            id="InputStartDate"
            name="startDate"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="InputEndDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control form-control-sm"
            id="InputEndDate"
            name="endDate"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row mb-5">
        <label htmlFor="InputDescription" className="form-label">
          Degree Description
        </label>
        <textarea
          type="text"
          className="form-control form-control"
          id="InputDescription"
          name="description"
          placeholder="Enter your Educational Interests or Educational Details"
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

export default InfoEducation;
