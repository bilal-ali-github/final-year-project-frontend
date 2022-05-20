import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionInfoPersonal } from "../../actions/profileCreation";
import { ActionUpdateProfile } from "../../actions/auth";

const InfoPersonal = ({ userId }) => {
  const updation = { status: 1 };
  const initialPersonalInfo = {
    profilePicture: "",
    province: "",
    city: "",
    phone: "",
    address: "",
  };
  const dispatch = useDispatch();

  const [PersonalInfoData, setPersonalInfoData] = useState(initialPersonalInfo);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const loadFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPersonalInfoData({ ...PersonalInfoData, profilePicture: base64 });
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(file);
  };
  const handleChange = (e) => {
    setPersonalInfoData({
      ...PersonalInfoData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch(ActionInfoPersonal({ ...PersonalInfoData, userId: userId }));
    dispatch(ActionUpdateProfile({ ...updation, userId: userId }));
    setPersonalInfoData(initialPersonalInfo);
  };
  return (
    <form className="px-1">
      <h3 className="mb-3">Personal Information</h3>
      <div className="text-center pt-3">
        <img
          id="output"
          src={require("../../images/placeholder_user.png")}
          alt="user_img"
          className="img-fluid rounded-circle border border-5 border-success mb-3"
          style={{ maxWidth: "175px" }}
        ></img>
        <div className="col-4 mx-auto py-2">
          <label htmlFor="file" className="form-label">
            Upload Profile Picture
          </label>
          <input
            type="file"
            label="Profile Picture Upload"
            className="form-control form-control-sm mb-3"
            accept="jpeg,.jpg,.png,"
            id="file"
            onChange={(e) => loadFile(e)}
            name="profilePicture"
            placeholder="Enter Your Province"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="InputProvince" className="form-label">
              Province
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="InputProvince"
              name="province"
              placeholder="Enter Your Province"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="InputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="InputCity"
              name="city"
              placeholder="Enter Your City"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col align-self-end">
          <div className="mb-3">
            <label htmlFor="InputPhone" className="form-label">
              Contact Number
            </label>
            <input
              type="tel"
              pattern="[0-9]{4}-[0-9]{7}"
              className="form-control form-control-sm"
              id="InputPhone"
              name="phone"
              placeholder="Enter Your Contact Number"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="InputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="InputAddress"
              name="address"
              placeholder="Enter Your Address"
              onChange={handleChange}
            />
          </div>
        </div>
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

export default InfoPersonal;
