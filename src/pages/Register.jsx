import React from "react";

export default function Register() {
  return (
    <>
      <div className="auth-fluid">
        <div className="auth-fluid-form-box">
          <div className="align-items-center d-flex h-100">
            <div className="card-body">
              <div className="auth-brand text-center text-lg-start">
                <a href="index.html" className="logo-dark">
                  <span>
                    <img
                      src="assets/images/logo-dark.png"
                      alt="dark logo"
                      height={22}
                    />
                  </span>
                </a>
                <a href="index.html" className="logo-light">
                  <span>
                    <img src="assets/images/logo.png" alt="logo" height={22} />
                  </span>
                </a>
              </div>
              <h4 className="mt-3">Free Sign Up</h4>
              <p className="text-muted mb-4">
                Don't have an account? Create your account, it takes less than a
                minute
              </p>
              <form action="#">
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="fullname"
                    placeholder="Enter your name"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="emailaddress"
                    required=""
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    required=""
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkbox-signup"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-signup"
                    >
                      I accept{" "}
                      <a href="#" className="text-muted">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div className="mb-0 d-grid text-center">
                  <button className="btn btn-primary" type="submit">
                    <i className="mdi mdi-account-circle" /> Sign Up{" "}
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p className="text-muted font-16">Sign up using</p>
                  <ul className="social-list list-inline mt-3">
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="social-list-item border-primary text-primary"
                      >
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="social-list-item border-danger text-danger"
                      >
                        <i className="mdi mdi-google" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="social-list-item border-info text-info"
                      >
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="social-list-item border-secondary text-secondary"
                      >
                        <i className="mdi mdi-github" />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
              <footer className="footer footer-alt">
                <p className="text-muted">
                  Already have account?{" "}
                  <a href="/login" className="text-muted ms-1">
                    <b>Log In</b>
                    <b> or try Demo mode</b>
                  </a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
