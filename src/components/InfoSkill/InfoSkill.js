import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionInfoSkill } from "../../actions/profileCreation";
import { ActionUpdateProfile } from "../../actions/auth";
const InfoSkill = ({ userId }) => {
  const updation = { status: 3 };
  const initialInfoSkill = { category: "", skills: "" };
  const [InfoSkill, setInfoSkill] = useState(initialInfoSkill);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInfoSkill({ ...InfoSkill, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(ActionInfoSkill({ ...InfoSkill, userId: userId }));
    dispatch(ActionUpdateProfile({ ...updation, userId: userId }));
    setInfoSkill(initialInfoSkill);
  };

  return (
    <form className="px-1">
      <h3 className="mb-5">Category and Skills</h3>
      <div className="row mb-5">
        <label htmlFor="SelectCategory" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Select Category"
          id="SelectCategory"
          name="category"
          onChange={handleChange}
        >
          <option>Select Category</option>
          <option value="Accounting">Accounting</option>
          <option value="Finance">Finance</option>
          <option value="Administrative">Administrative</option>
          <option value="IT and Development">IT and Development</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Education">Education</option>
          <option value="Engineering">Engineering</option>
          <option value="Production">Production</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>
      <div className="row mb-5">
        <label htmlFor="InputSkills" className="form-label">
          Skills
        </label>
        <div className="text-end mb-1 fw-lighter fs-6">
          <small>Enter a maximum of 15 skill, separated by comma(,)</small>
        </div>
        <textarea
          type="text"
          className="form-control form-control"
          id="InputSkills"
          name="skills"
          placeholder="Enter your Skills e.g: Javascript, React, Node"
          onChange={(e) =>
            setInfoSkill({ ...InfoSkill, skills: e.target.value.split(",") })
          }
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

export default InfoSkill;
