import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../components/Auth/Auth";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [isSignup, setisSignup] = useState(false);
  const ifSignup = () => {
    setisSignup(!isSignup);
  };
  return (
    <>
      <div className="green_background" style={{ backgroundColor: "#198754" }}>
        <div className="row py-5 mx-0">
          <div className="col-sm-8 p-5 m-auto" style={{ minHeight: "100vh" }}>
            <h1 className="display-1 text-white">Paklancers</h1>
            <h3 className="text-white mt-5">
              Connects businesses with independent professionals and agencies
              around Pakistan
            </h3>
            <h3 className="text-white mt-5">
              Looking for quality freelance work from high-value clients? Look
              no further. Paklancers is the largest online talent solution
              connecting businesses and skilled individuals
            </h3>
          </div>
          <div className="col-sm-4 ">
            <section className="pt-5 pb-2 px-4 bg-white border border-white border-5 rounded">
              <Auth isSignup={isSignup} setisSignup={setisSignup} />
              <div className="text-center">
                <button
                  className="btn btn-link text-success mt-3"
                  onClick={ifSignup}
                >
                  {isSignup == false
                    ? "Already Signed up? Click here to Sign in"
                    : "Not Signed up? Click here to Sign up"}
                </button>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
