import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Users({ userList, user }) {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchAllUsers();
    console.log(userList);
  }, []);

  const fetchAllUsers = async () => {
    const response = await axios.get(`${apiUrl}/api/users/all/`);
    function userArrSort(a, b) {
      if (a.firstname < b.firstname) {
        return -1;
      }
      if (a.firstname > b.firstname) {
        return 1;
      }
      return 0;
    }
    const arrResult = response.data.sort(userArrSort);
    setUsers(arrResult);
    setLoading(true);
  };

  const loopUsers = () => {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].firstname);
    }
  };

  const renderAllUsers = () => {
    if (!loading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <div className="wrapper">
            <div className="content">
              <div className="container-fluid">
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
                        </ol>
                      </div>
                      <h4 className="page-title">Users List</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  {user.role === "Admin" ? (
                    <Link
                      to={"/dashboard/createuser"}
                      className="btn btn-primary rounded-pill mb-3"
                    >
                      <i className="mdi mdi-plus" /> Create User
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="row">
                  {users.map((item, key) => {
                    return (
                      <div className="col-md-6 col-xxl-3" key={key}>
                        <div className="card">
                          <div className="card-body">
                            <div className="text-center">
                              <Link to={`/dashboard/userinfo/${item._id}`}>
                                <h4 className="mt-3 my-1">{item.username}</h4>
                              </Link>
                              <h4 className="mt-3 my-1">
                                {!item.firstname ? "N/A" : item.firstname}
                                {", "}
                                {!item.lastname ? "N/A" : item.lastname}
                              </h4>
                              <p className="mb-0 text-muted mb-2">
                                {item.role}
                              </p>
                              <p className="mb-0 text-muted">
                                <i className="mdi mdi-email-outline me-1" />
                                {item.email}
                              </p>
                              <p className="mb-0 text-muted">
                                <i className="mdi mdi-phone-outline me-1" />
                                {item.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <>{renderAllUsers()}</>;
}
