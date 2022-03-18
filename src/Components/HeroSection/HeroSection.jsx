import React from "react";
import "../HeroSection/hero-section.css";
const HeroSection = (props) => {
  return (
    <>
      <div className="container mt-5 pt-5 " style={{backgroundColor: "#47CBD8"}}>
        <div className="row  pt-5">
         
          <div className="col-lg-5 ">
            <div className="h1">Your business deservers this.</div>
            <div className="h4 text-muted pt-5">
              See and check leads in one place. With
              LMS as your work manager, you’ll stay on top of everything, your competitors are doing.
            </div>

            {!props.isUserL ? (
              <div className="d-flex align-content-end">
                <button
                  type="button"
                  class="btn border-0 border-right btn-danger"
                >
                  Get Started{" "}
                </button>
                <button type="button" class="">
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="d-flex align-content-end pt-5 ">
                
                <button type="button" class="btn btn-primary ms-sm-3 mt-3">
                  {"Go to the Dashboard ->"}
                </button>
              </div>
            )}
          </div>
          <div className="col-lg">
            <img className="img-fluid" src="/Images/1.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
