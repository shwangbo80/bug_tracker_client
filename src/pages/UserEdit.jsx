import React from "react";
import {useEffect, useState} from "react";
import {useParams, Link, useHistory} from "react-router-dom";
import axios from "axios";

export default function UserEdit(fetchProjects) {
  let history = useHistory();

  const {id} = useParams();
  const [fetchedUser, setFetchedUser] = useState();
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchOneUser();
  }, []);

  const fetchOneUser = async () => {
    const response = await axios.get(`${apiUrl}/api/users/?userId=${id}`);
    setFirstName(response.data.firstname);
    setLastName(response.data.lastname);
    setRole(response.data.role);
    setUsername(response.data.username);
    setPassword(response.data.password);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setStreet(response.data.street);
    setCity(response.data.city);
    setState(response.data.state);
    setZip(response.data.zip);
    setLoading(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${apiUrl}/api/users/${id}`, {
      firstname: firstName,
      lastname: lastName,
      role: role,
      username: username,
      password: password,
      email: email,
      phone: phone,
      street: street,
      city: city,
      state: state,
      zip: zip,
    });
    console.log(response);
    history.push(`/dashboard/userinfo/${id}`);
    fetchProjects();
  };

  const renderUserEditForm = () => {
    if (!loading) {
      return (
        <>
          <h1>Loading</h1>
        </>
      );
    } else {
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
                        <li className="breadcrumb-item active">
                          Projects List
                        </li>
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
                      onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustom01">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="First name"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustom02">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          placeholder="Last name"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
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
                          defaultValue={role}
                          onChange={(e) => setRole(e.target.value)}>
                          <option value="Admin">Admin</option>
                          <option value="Senior Developer">
                            Senior Developer
                          </option>
                          <option value="Front-End Developer">
                            Front-End Developer
                          </option>
                          <option value="Back-End Developer">
                            Back-End Developer
                          </option>
                          <option value="Dev-Ops Engineer">
                            Dev-Ops Engineer
                          </option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustomUsername">
                          Username
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustomUsername"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustomUsername">
                          Email
                        </label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="validationCustomUsername"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustomUsername">
                          Phone
                        </label>
                        <div className="input-group">
                          <input
                            type="tel"
                            className="form-control"
                            id="validationCustomUsername"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustom03">
                          Street
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom03"
                          placeholder="City"
                          required
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustom03">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom03"
                          placeholder="City"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustom04">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom04"
                          placeholder="State"
                          required
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="validationCustom05">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom05"
                          placeholder="Zip"
                          required
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid zip.
                        </div>
                      </div>
                      <button
                        className="btn btn-primary rounded-pill mb-5"
                        type="submit">
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
  };

  return <>{renderUserEditForm()}</>;
}
