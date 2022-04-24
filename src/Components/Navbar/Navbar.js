import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Lead Management
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav m-auto">
            {props.isUserL ? <li className="nav-item ">
                <Link to="/dashboard" className={`nav-link  	d-xxl-none`}>
                  Go to dashboard 
                </Link>
              </li> : " "}
              <li class="nav-item">
                <Link class={`nav-link ${props.homeActive}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className={`nav-link ${props.featuresActive}`} to="/features">
                  Features
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${props.whyActive}`} to="/Whyus">
                  Why Us?
                </Link>
              </li>
              
            </ul>
            {!props.isUserL ? (
                <div className=""><Link to = "/sign-up"><button type="button" class="btn border-0 border-right btn-outline-light ms-lg-3">Get Started </button></Link> <Link to="/log-in"><button type="button" class="btn btn-primary ms-sm-3">Log In</button></Link> </div>
            ) : (
                
                <div className="d-none  d-sm-block"><button type="button" class="btn border-0 border-right btn-outline-light ms-lg-3">Contact Sales</button><button type="button" class="btn btn-primary ms-sm-3">Go to Dashboard</button></div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
