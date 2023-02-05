import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function UserTask({
  projects,
  user,
  tasks,
  fetchProjects,
  setSelectedProject,
}) {
  const [userProjects, setUserProjects] = useState();
  const [projectLoading, setProjectLoading] = useState(false);
  const [userTasks, setUserTasks] = useState();
  const [taskLoading, setTaskLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(tasks);

  useEffect(() => {
    filterUserProjects();
    filterUserTasks();
  }, []);

  const filterUserProjects = async () => {
    const response = await axios.get(`${apiUrl}/api/projects/all`);
    const filteredUserProjects = response.data.filter((item) => {
      return item.members == user.username;
    });
    setUserProjects(filteredUserProjects);
    setProjectLoading(true);
  };
  const filterUserTasks = async () => {
    const response = await axios.get(`${apiUrl}/api/tasks`);
    const filteredUserTasks = response.data.filter((item) => {
      return item.members == user.username;
    });
    setUserTasks(filteredUserTasks);
    setTaskLoading(true);
  };

  const renderPriority = (item) => {
    if (item === "Low") {
      return "badge bg-success";
    } else if (item === "Medium") {
      return "badge bg-primary";
    } else if (item === "High") {
      return "badge bg-danger";
    }
  };

  console.log(userProjects);
  console.log(userTasks);

  const renderStatus = (item) => {
    if (item.priority === "Low") {
      return "bg-danger";
    } else if (item.status === "Medium") {
      return "bg-success";
    } else if (item.status === "High") {
      return "bg-primary";
    }
  };

  const renderUserProjects = () => {
    if (!projectLoading) {
      return <h1>Project Loading</h1>;
    } else {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="page-title-box">
              <div className="page-title-right">
                <div className="app-search"></div>
              </div>
              <h4 className="page-title">My Projects</h4>
            </div>
            {userProjects.map((item, key) => {
              return (
                <div className="col-md-6 col-xxl-3" key={key}>
                  <div className="card d-block">
                    <div className="card-body">
                      {/* project title*/}
                      <Link
                        to={`/dashboard/projectdetails/${item._id}`}
                        onClick={() => setSelectedProject(item._id)}
                      >
                        <h4 className="mt-0">
                          <div className="text-title">{item.projectname}</div>
                        </h4>
                      </Link>
                      <div className={renderStatus(item.status)}>
                        {item.status}
                      </div>
                      <p className="text-muted font-13 my-3">{item.overview}</p>
                      <h5>Project Members</h5>
                      <div className="d-flex">
                        {item.members.map((item, key) => {
                          return (
                            <h6 className="me-2" key={key}>
                              {item}
                            </h6>
                          );
                        })}
                      </div>
                      <div className="mt-3 d-flex justify-content-between">
                        <p>Start: {item.startdate}</p>
                        <p>Due: {item.duedate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };
  const renderUserTasks = () => {
    if (!taskLoading) {
      return <h1>TaskLoading</h1>;
    } else {
      return (
        <>
          <div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  {/* start page title */}
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <div className="app-search"></div>
                    </div>
                    <h4 className="page-title">My Tasks</h4>
                  </div>
                  {/* end page title */}

                  {/* Ongoing task */}
                  <div className="mt-2">
                    <h5>
                      <a
                        className="text-dark"
                        data-bs-toggle="collapse"
                        href="#ongoingTasks"
                        role="button"
                        aria-expanded="false"
                        aria-controls="ongoingTasks"
                      >
                        <i className="uil uil-angle-down font-18" />
                        Ongoing <span className="text-muted">(10)</span>
                      </a>
                    </h5>
                    <div className="collapse show" id="ongoingTasks">
                      <div className="card mb-0">
                        <div className="card-body">
                          {userTasks
                            .filter((a) => a.status === "Ongoing")
                            .map((item, key) => {
                              return (
                                <div
                                  className="row justify-content-between"
                                  key={key}
                                >
                                  <div className="col-sm-6 mb-sm-0">
                                    <div className="form-check">
                                      <Link
                                        to={`/dashboard/taskdetails/${item._id}`}
                                      >
                                        <label
                                          role="button"
                                          className="form-check-label"
                                          htmlFor="task1"
                                        >
                                          <h4 className="text-dark">
                                            {item.taskname}
                                          </h4>
                                        </label>
                                      </Link>
                                    </div>{" "}
                                    {/* end checkbox */}
                                  </div>{" "}
                                  {/* end col */}
                                  <div className="col-sm-6">
                                    <div className="d-flex justify-content-between">
                                      <p className="mt-1">{item.status}</p>
                                      <div>
                                        <ul className="list-inline font-13 text-end">
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Start Date: {item.startdate}
                                          </li>
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Due Date: {item.duedate}
                                          </li>
                                          <li className="list-inline-item ms-1">
                                            <i className="uil uil-comment-message font-16 me-1" />{" "}
                                            21
                                          </li>
                                          <li className="list-inline-item ms-2">
                                            <span
                                              className={`${renderPriority(
                                                item.priority
                                              )} px-3`}
                                            >
                                              <h6>{item.priority}</h6>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>{" "}
                                    {/* end .d-flex*/}
                                  </div>{" "}
                                  {/* end col */}
                                  <hr></hr>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End ongoing task */}

                  {/* paused task */}
                  <div className="mt-2">
                    <h5>
                      <a
                        className="text-dark"
                        data-bs-toggle="collapse"
                        href="#pausedTasks"
                        role="button"
                        aria-expanded="false"
                        aria-controls="pausedTasks"
                      >
                        <i className="uil uil-angle-down font-18" />
                        Paused <span className="text-muted">(10)</span>
                      </a>
                    </h5>
                    <div className="collapse show" id="pausedTasks">
                      <div className="card mb-0">
                        <div className="card-body">
                          {userTasks
                            .filter((a) => a.status === "Paused")
                            .map((item, key) => {
                              return (
                                <div
                                  className="row justify-content-between"
                                  key={key}
                                >
                                  <div className="col-sm-6 mb-sm-0">
                                    <div className="form-check">
                                      <Link
                                        to={`/dashboard/taskdetails/${item._id}`}
                                      >
                                        <label
                                          role="button"
                                          className="form-check-label"
                                          htmlFor="task1"
                                        >
                                          <h4 className="text-dark">
                                            {item.taskname}
                                          </h4>
                                        </label>
                                      </Link>
                                    </div>{" "}
                                    {/* end checkbox */}
                                  </div>{" "}
                                  {/* end col */}
                                  <div className="col-sm-6">
                                    <div className="d-flex justify-content-between">
                                      <p className="mt-1">{item.status}</p>
                                      <div>
                                        <ul className="list-inline font-13 text-end">
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Start Date: {item.startdate}
                                          </li>
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Due Date: {item.duedate}
                                          </li>
                                          <li className="list-inline-item ms-1">
                                            <i className="uil uil-comment-message font-16 me-1" />{" "}
                                            21
                                          </li>
                                          <li className="list-inline-item ms-2">
                                            <span
                                              className={`${renderPriority(
                                                item.priority
                                              )} px-3`}
                                            >
                                              <h6>{item.priority}</h6>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>{" "}
                                    {/* end .d-flex*/}
                                  </div>{" "}
                                  {/* end col */}
                                  <hr></hr>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End paused task */}

                  {/* Under review task */}
                  <div className="mt-2">
                    <h5>
                      <a
                        className="text-dark"
                        data-bs-toggle="collapse"
                        href="#underReviewTasks"
                        role="button"
                        aria-expanded="false"
                        aria-controls="underReviewTasks"
                      >
                        <i className="uil uil-angle-down font-18" />
                        Under Review <span className="text-muted">(10)</span>
                      </a>
                    </h5>
                    <div className="collapse show" id="underReviewTasks">
                      <div className="card mb-0">
                        <div className="card-body">
                          {userTasks
                            .filter((a) => a.status === "Under Review")
                            .map((item, key) => {
                              return (
                                <div
                                  className="row justify-content-between"
                                  key={key}
                                >
                                  <div className="col-sm-6 mb-sm-0">
                                    <div className="form-check">
                                      <Link
                                        to={`/dashboard/taskdetails/${item._id}`}
                                      >
                                        <label
                                          role="button"
                                          className="form-check-label"
                                          htmlFor="task1"
                                        >
                                          <h4 className="text-dark">
                                            {item.taskname}
                                          </h4>
                                        </label>
                                      </Link>
                                    </div>{" "}
                                    {/* end checkbox */}
                                  </div>{" "}
                                  {/* end col */}
                                  <div className="col-sm-6">
                                    <div className="d-flex justify-content-between">
                                      <p className="mt-1">{item.status}</p>
                                      <div>
                                        <ul className="list-inline font-13 text-end">
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Start Date: {item.startdate}
                                          </li>
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Due Date: {item.duedate}
                                          </li>
                                          <li className="list-inline-item ms-1">
                                            <i className="uil uil-comment-message font-16 me-1" />{" "}
                                            21
                                          </li>
                                          <li className="list-inline-item ms-2">
                                            <span
                                              className={`${renderPriority(
                                                item.priority
                                              )} px-3`}
                                            >
                                              <h6>{item.priority}</h6>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>{" "}
                                    {/* end .d-flex*/}
                                  </div>{" "}
                                  {/* end col */}
                                  <hr></hr>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End under review task */}

                  {/* Completed task */}
                  <div className="mt-2">
                    <h5>
                      <a
                        className="text-dark"
                        data-bs-toggle="collapse"
                        href="#completedTasks"
                        role="button"
                        aria-expanded="false"
                        aria-controls="completedTasks"
                      >
                        <i className="uil uil-angle-down font-18" />
                        Completed <span className="text-muted">(10)</span>
                      </a>
                    </h5>
                    <div className="collapse show" id="completedTasks">
                      <div className="card mb-0">
                        <div className="card-body">
                          {userTasks
                            .filter((a) => a.status === "Completed")
                            .map((item, key) => {
                              return (
                                <div
                                  className="row justify-content-between"
                                  key={key}
                                >
                                  <div className="col-sm-6 mb-sm-0">
                                    <div className="form-check">
                                      <Link
                                        to={`/dashboard/taskdetails/${item._id}`}
                                      >
                                        <label
                                          role="button"
                                          className="form-check-label"
                                          htmlFor="task1"
                                        >
                                          <h4 className="text-dark">
                                            {item.taskname}
                                          </h4>
                                        </label>
                                      </Link>
                                    </div>{" "}
                                    {/* end checkbox */}
                                  </div>{" "}
                                  {/* end col */}
                                  <div className="col-sm-6">
                                    <div className="d-flex justify-content-between">
                                      <p className="mt-1">{item.status}</p>
                                      <div>
                                        <ul className="list-inline font-13 text-end">
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Start Date: {item.startdate}
                                          </li>
                                          <li className="list-inline-item">
                                            <i className="uil uil-schedule font-16 me-1" />{" "}
                                            Due Date: {item.duedate}
                                          </li>
                                          <li className="list-inline-item ms-1">
                                            <i className="uil uil-comment-message font-16 me-1" />{" "}
                                            21
                                          </li>
                                          <li className="list-inline-item ms-2">
                                            <span
                                              className={`${renderPriority(
                                                item.priority
                                              )} px-3`}
                                            >
                                              <h6>{item.priority}</h6>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>{" "}
                                    {/* end .d-flex*/}
                                  </div>{" "}
                                  {/* end col */}
                                  <hr></hr>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End completed task */}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {renderUserProjects()}
      {renderUserTasks()}
    </>
  );
}
