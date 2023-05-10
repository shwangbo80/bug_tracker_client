import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function Login({ user, setUser }) {
  const email = useRef();
  const password = useRef();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        email: email.current.value,
        password: password.current.value,
      });
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (err) {
      console.log("error logging in");
    }
  };

  return (
    <>
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                {/* Logo */}
                <div className="card-header pt-4 pb-4 text-center bg-primary">
                  <a href="/">
                    <span>
                      <img
                        src="assets/images/logo.png"
                        alt="logo"
                        height={22}
                      />
                    </span>
                  </a>
                </div>
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center pb-0 fw-bold">
                      Sign In
                    </h4>
                    <p className="text-muted mb-4">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                  </div>
                  <form>
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
                        ref={email}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                          ref={password}
                        />
                      </div>
                    </div>

                    <div className="mb-3 mb-0 text-center">
                      <button className="btn btn-primary" onClick={handleLogin}>
                        Log In
                      </button>
                      <Link to={"/dashboard"}></Link>
                      <h4 className="mt-3 mb-0">For guest users</h4>
                      <p className="mb-0">Email: guest@email.com</p>
                      <p>Password: password123</p>
                    </div>
                  </form>
                </div>{" "}
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p className="text-muted">
                    Don't have an account?
                    <a href="/register" className="text-muted ms-1">
                      <b>Sign Up</b>
                    </a>
                  </p>
                </div>{" "}
                {/* end col */}
              </div>
              <footer className="footer footer-alt">
                2018 - © Hyper - Coderthemes.com
              </footer>
              {/* end row */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end page */}
    </>
  );
}
