import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

export default function UserCreate({ fetchProjects, userList }) {
  const [usernameErrMessage, setUsernameErrMessage] = useState("");
  const [passwordErrMessage, setPasswordErrMessage] = useState("");
  const [emailErrMessage, setEmailErrMessage] = useState("");

  let history = useHistory();
  const firstName = useRef();
  const lastName = useRef();
  const role = useRef();
  const userName = useRef();
  const password = useRef();
  const email = useRef();
  const phone = useRef();
  const street = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName.current.value === "") {
      setUsernameErrMessage("Please enter a valid username");
    } else {
      setUsernameErrMessage("");
    }
    if (password.current.value === "") {
      setPasswordErrMessage("Please enter a valid password");
    } else {
      setPasswordErrMessage("");
    }
    if (email.current.value === "") {
      setEmailErrMessage("Please enter a valid email address");
    } else {
      setEmailErrMessage("");
    }
    try {
      const response = await axios.post(`${apiUrl}/api/auth/register`, {
        firstname: firstName.current.value,
        lastname: lastName.current.value,
        role: role.current.value,
        username: userName.current.value,
        password: password.current.value,
        email: email.current.value,
        phone: phone.current.value,
        street: street.current.value,
        city: city.current.value,
        state: state.current.value,
        zip: zip.current.value,
      });
      console.log(response);
      fetchProjects();
      history.push("/dashboard/users");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Hyper</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Projects</a>
                    </li>
                    <li className="breadcrumb-item active">Projects List</li>
                  </ol>
                </div>
                <h4 className="page-title">Create new user</h4>
              </div>
            </div>
          </div>
          <div className="row mt-5 px-3">
            <div className="col-md-12 col-xxl-6">
              <div className="mb-3">
                {/* Form start */}
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* Username form start */}
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="validationCustomUsername"
                    >
                      Username
                      <span className="opacity-50 ms-2">*Required</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        ref={userName}
                      />
                    </div>
                    <p className="text-danger">{usernameErrMessage}</p>
                  </div>
                  {/* Password form start */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom02">
                      password
                      <span className="opacity-50 ms-2">*Required</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      defaultValue=""
                      ref={password}
                    />
                  </div>
                  <p className="text-danger">{passwordErrMessage}</p>
                  {/* Email form start */}
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="validationCustomUsername"
                    >
                      Email
                      <span className="opacity-50 ms-2">*Required</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        required
                        ref={email}
                      />
                    </div>
                    <p className="text-danger">{emailErrMessage}</p>
                  </div>
                  {/* First name form start */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom01">
                      First name
                      <span className="opacity-50 ms-2">*Optional</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      placeholder="First name"
                      defaultValue=""
                      required
                      ref={firstName}
                    />
                  </div>
                  {/* Last name form start */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom02">
                      Last name
                      <span className="opacity-50 ms-2">*Optional</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      defaultValue=""
                      required
                      ref={lastName}
                    />
                  </div>
                  {/* Phone number form start */}
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="validationCustomUsername"
                    >
                      Phone
                      <span className="opacity-50 ms-2">*Optional</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone"
                        aria-describedby="inputGroupPrepend"
                        required
                        ref={phone}
                      />
                    </div>
                  </div>
                  {/* Role form start */}
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                      Role
                      <span className="opacity-50 ms-2">
                        *If none selected, Guest will be default
                      </span>
                    </label>
                    <select
                      className="form-select"
                      id="example-select"
                      defaultValue={""}
                      ref={role}
                    >
                      <option value="">-- Select Role --</option>
                      <option value="Admin">Admin</option>
                      <option value="Senior Developer">Senior Developer</option>
                      <option value="Front-End Developer">
                        Front-End Developer
                      </option>
                      <option value="Back-End Developer">
                        Back-End Developer
                      </option>
                      <option value="Dev-Ops Engineer">Dev-Ops Engineer</option>
                    </select>
                  </div>
                  {/* Street address form start */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom03">
                      Street
                      <span className="opacity-50 ms-2">*Optional</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street"
                      required
                      ref={street}
                    />
                  </div>
                  {/* City address form start */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom03">
                      City
                      <span className="opacity-50 ms-2">*Optional</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      required
                      ref={city}
                    />
                  </div>
                  {/* State address form start */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom04">
                      State
                      <span className="opacity-50 ms-2">*Optional</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      placeholder="State"
                      required
                      ref={state}
                    />
                  </div>
                  {/* Zip code address start */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom05">
                      Zip
                      <span className="opacity-50 ms-2">*Optional</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      placeholder="Zip"
                      required
                      ref={zip}
                    />
                  </div>
                  {/* Submit from button */}
                  <button
                    className="btn btn-primary mb-5 rounded-pill"
                    type="submit"
                  >
                    Submit form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
