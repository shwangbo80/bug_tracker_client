import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import UserTask from "./UserTask";

export default function UserInfo({ user }) {
  const history = useHistory();
  const { id } = useParams();
  const [fetchedUser, setFetchedUser] = useState();
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchOneUser();
  }, []);

  const fetchOneUser = async () => {
    const response = await axios.get(`${apiUrl}/api/users/?userId=${id}`);
    setFetchedUser(response.data);
    setLoading(true);
  };

  const handleDelete = async (item) => {
    const confirmMessage = window.confirm(
      "Are you sure you want to delete the user?"
    );
    if (confirmMessage) {
      await axios.delete(`${apiUrl}/api/users/delete/${id}`);
      history.push("/dashboard/users");
    } else {
      console.log("confirm cancelled");
    }
  };

  console.log(fetchedUser);

  const renderFetchedUser = () => {
    if (!loading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <div className="content">
            {/* Start Content*/}
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="/dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/dashboard/users">Users</a>
                        </li>
                        <li className="breadcrumb-item active">Users List</li>
                      </ol>
                    </div>
                    <h4 className="page-title">Profile</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-sm-12">
                  {/* Profile */}
                  <div className="card bg-primary">
                    <div className="card-body profile-user-box">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <div className="avatar-lg">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  alt=""
                                  className="rounded-circle img-thumbnail"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h4 className="mt-1 mb-1 text-white">
                                  {fetchedUser.username}
                                </h4>
                                <p className="font-13 text-white-50">
                                  {" "}
                                  {fetchedUser.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col*/}
                        <div className="col-sm-4">
                          {user.role == "Admin" ? (
                            <div className="text-center mt-sm-0 mt-3 text-sm-end">
                              <Link
                                to={`/dashboard/useredit/${fetchedUser._id}`}
                              >
                                <button type="button" className="btn btn-light">
                                  <i className="mdi mdi-account-edit me-1" />{" "}
                                  Edit Profile
                                </button>
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger ms-3"
                                onClick={() => handleDelete()}
                              >
                                <i className="mdi mdi-delete-forever ms-1" />{" "}
                                Delete User
                              </button>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                        {/* end col*/}
                      </div>{" "}
                      {/* end row */}
                    </div>{" "}
                    {/* end card-body/ profile-user-box*/}
                  </div>
                  {/*end profile/ card */}
                </div>{" "}
                {/* end col*/}
              </div>
              {/* end row */}
              <div className="row">
                <div className="col-xl-4">
                  {/* Personal-Information */}
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title mt-0 mb-3">
                        Employee Information
                      </h4>
                      <hr />
                      <div className="text-start">
                        <p className="text-muted">
                          <strong>Username :</strong>
                          <span className="ms-2">{fetchedUser.username}</span>
                        </p>
                        <p className="text-muted">
                          <strong>First Name :</strong>
                          <span className="ms-2">
                            {!fetchedUser.firstname
                              ? "N/A"
                              : fetchedUser.firstname}
                          </span>
                        </p>
                        <p className="text-muted">
                          <strong>Last Name :</strong>
                          <span className="ms-2">
                            {!fetchedUser.lastname
                              ? "N/A"
                              : fetchedUser.lastname}
                          </span>
                        </p>
                        <p className="text-muted">
                          <strong>Mobile :</strong>
                          <span className="ms-2"> {fetchedUser.phone}</span>
                        </p>
                        <p className="text-muted">
                          <strong>Email :</strong>
                          <span className="ms-2">{fetchedUser.email}</span>
                        </p>
                        <p className="text-muted">
                          <strong>Street :</strong>{" "}
                          <span className="ms-2"> {fetchedUser.street}</span>
                        </p>
                        <p className="text-muted">
                          <strong>City :</strong>{" "}
                          <span className="ms-2"> {fetchedUser.city}</span>
                        </p>
                        <p className="text-muted">
                          <strong>state :</strong>{" "}
                          <span className="ms-2"> {fetchedUser.state}</span>
                        </p>
                        <p className="text-muted">
                          <strong>Zip :</strong>{" "}
                          <span className="ms-2"> {fetchedUser.zip}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-xl-8">
                  {/* Chart*/}
                  <div className="card">
                    <div className="card-body pt-0">
                      <UserTask user={fetchedUser} />
                      <div dir="ltr">
                        <div style={{ height: 260 }} className="chartjs-chart">
                          <canvas id="high-performing-product" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row*/}
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>{" "}
            {/* container */}
          </div>{" "}
          {/* content */}
        </>
      );
    }
  };

  return <>{renderFetchedUser()}</>;
}
