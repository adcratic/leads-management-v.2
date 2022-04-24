import React from "react";
// import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <section class=" ">
        <div class="container py-5 ">
          <div class="row justify-content-center align-items-center h-100 mt-5">
            <div class="col-12 col-lg-9 col-xl-7 mb-5">
              <div
                class="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
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
      <footer
        style={{ backgroundColor: "#080B0F" }}
        className="text-center text-lg-start  text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container"></section>

        <section className="footer">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
                Adcratic Studios
              </div>
                
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                @2022
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                Features
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Signup;
