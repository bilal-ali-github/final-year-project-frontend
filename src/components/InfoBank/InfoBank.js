import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ActionUpdateProfile } from "../../actions/auth";
import { ActionInfoBank } from "../../actions/profileCreation";

const InfoBank = ({ userId }) => {
  const updation = { status: 5 };
  const initialInfoBank = {
    accountTitle: "",
    accountNumber: "",
    accountIBAN: "",
    creditCardNumber: "",
    creditCardCode: "",
    cardValidForm: "",
    cardValidThru: "",
  };
  const [InfoBank, setInfoBank] = useState(initialInfoBank);
  const dispatch = useDispatch();
  const location = useLocation();
  const router = useNavigate();
  const handleChange = (e) => {
    setInfoBank({ ...InfoBank, [e.target.name]: e.target.value });
  };
  console.log(InfoBank);
  const handleSubmit = () => {
    dispatch(ActionInfoBank({ ...InfoBank, userId: userId }, router, location));
    dispatch(ActionUpdateProfile({ ...updation, userId: userId }));
    setInfoBank(initialInfoBank);
  };
  return (
    <form className="px-1">
      <h3 className="mb-5">Bank Account Information</h3>
      <div className="row mb-3">
        <div className="col align-self-end">
          <div className="">
            <label htmlFor="InputAccountTitle" className="form-label">
              Account Title
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="InputAccountTitle"
              name="accountTitle"
              placeholder="Enter Account Title"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="InputAccountNumber" className="form-label">
            Account Number
          </label>
          <input
            type="text"
            minLength={10}
            maxLength={20}
            className="form-control form-control-sm"
            id="InputAccountNumber"
            name="accountNumber"
            placeholder="Enter Account Number 10-20 Digits"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div className="col">
            <label htmlFor="InputIBAN" className="form-label">
              IBAN
            </label>
            <input
              type="tel"
              pattern="[P,K]{2}[0-9]{2}[A-Z]{4}[0-9]{16}"
              className="form-control form-control-sm"
              id="InputIBAN"
              name="accountIBAN"
              placeholder="Enter IBAN 24 Digits"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <label htmlFor="InputCreditCardNumber" className="form-label">
            Credit Card Number
          </label>
          <input
            type="tel"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
            className="form-control form-control-sm"
            id="InputCreditCardNumber"
            name="creditCardNumber"
            placeholder="Enter Credit Card Number 16 Digits"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="InputCreditCardCode" className="form-label">
            Credit Card Code
          </label>
          <input
            type="tel"
            className="form-control form-control-sm"
            id="InputCreditCardCode"
            name="creditCardCode"
            placeholder="Enter Credit Card Code 3 Digits"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col mb-3">
          <label htmlFor="InputValidFrom" className="form-label">
            Card Valid From
          </label>
          <input
            type="month"
            className="form-control form-control-sm"
            id="InputValidFrom"
            name="cardValidFrom"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="InputValidFrom" className="form-label">
            Card Valid Thru
          </label>
          <input
            type="month"
            className="form-control form-control-sm"
            id="InputValidThru"
            name="cardValidThru"
            onChange={handleChange}
          />
        </div>
      </div>

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
  );
};

export default InfoBank;
