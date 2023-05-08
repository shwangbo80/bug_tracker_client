import React from "react";
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function UserCreate({ fetchProjects, userList }) {
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
  };

  return (
    <>
      <div className="content">
        <div className="container-fluid">
          {/* start page title */}
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
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom01">
                      First name
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
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom02">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      defaultValue=""
                      required
                      ref={lastName}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                      Role
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
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="validationCustomUsername"
                    >
                      Username
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
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom02">
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      defaultValue=""
                      ref={password}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="validationCustomUsername"
                    >
                      Email
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
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      htmlFor="validationCustomUsername"
                    >
                      Phone
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
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom03">
                      Street
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street"
                      required
                      ref={street}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid street.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom03">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      required
                      ref={city}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom04">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      placeholder="State"
                      required
                      ref={state}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="validationCustom05">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      placeholder="Zip"
                      required
                      ref={zip}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
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
