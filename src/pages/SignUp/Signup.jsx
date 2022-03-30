import React from "react";
// import { Link } from "react-router-dom";
import "../SignUp/SignUp.css"
const Signup = () => {
  return (
    <>
      <section class="vh-100 ">
        <div class="container py-5 h-100">
        <div className="logo h2"> Logo</div>
          <div class="row justify-content-center align-items-center h-100 mt-5">
            <div class="col-12 col-lg-9 col-xl-7">
              <div
                class="card shadow-2-strong card-registration"
                style={{borderRadius : "15px"}}
              >
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="firstName">
                            First Name*
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="lastName">
                            Last Name*
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="emailAddress">
                            Email*
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="phoneNumber">
                            Phone Number*
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <div class="form-outline datepicker w-100">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="birthdayDate"
                          />
                          <label for="birthdayDate" class="form-label">
                            DOB:*
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <div class="form-outline datepicker w-100">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="birthdayDate"
                          />
                          <label for="birthdayDate" class="form-label">
                            Address*
                          </label>
                        </div>
                      </div>
                      
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <div class="form-outline datepicker w-100">
                          <input
                            type="text"
                            class="form-control form-control-lg "
                            id="birthdayDate"
                          />
                          <label for="birthdayDate" class="form-label">
                            Business Category* 
                          </label>
                        </div>
                      </div>
                      
                      
                    </div>
                    <div class="mt-4 pt-2">
                      <input
                        class="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
