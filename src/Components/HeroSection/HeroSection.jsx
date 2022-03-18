import React from "react";
import "../HeroSection/hero-section.css";
const HeroSection = (props) => {
  return (
    <>
      <div className="container mt-5 pt-5 ">
        <div className="row border pt-5">
         
          <div className="col-lg-5 border">
            <div className="h1">Your business deservers this.</div>
            <div className="h4 text-muted pt-5">
              See plans, check progress, and discuss work in one place. With
              Asana as your work manager, you’ll stay on top of everything the
              team’s doing.
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
                <button type="button" class="btn btn-danger mt-3">
                  Contact Sales
                </button>
                <button type="button" class="btn btn-primary ms-sm-3 mt-3">
                  Go to Dashboard
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