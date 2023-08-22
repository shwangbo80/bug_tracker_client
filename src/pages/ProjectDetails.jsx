import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function ProjectDetails({
  fetchProjects,
  user,
  projects,
  projectLoading,
  setSelectedProject,
}) {
  let { id } = useParams();
  const history = useHistory();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchOneProject();
    fetchProjectTasks();
  }, []);

  const [projectDetail, setProjectDetail] = useState();
  const [projectTasks, setProjectTasks] = useState();
  const [loading, setLoading] = useState(false);
  const [taskLoading, setTaskLoading] = useState(false);

  const handleDelete = async (item) => {
    const confirmMessage = window.confirm(
      "Are you sure you want to delete the project?"
    );
    if (confirmMessage) {
      await axios.delete(`${apiUrl}/api/projects/delete/${item}`);
      await axios.delete(`${apiUrl}/api/tasks/delete/project/${item}`);
      fetchProjects();
      history.push("/dashboard");
    } else {
      return;
    }
  };

  const renderStatus = (item) => {
    if (item.priority === "Low") {
      return "bg-danger";
    } else if (item.status === "Medium") {
      return "bg-success";
    } else if (item.status === "High") {
      return "bg-primary";
    }
  };

  const fetchOneProject = async () => {
    const response = await axios.get(`${apiUrl}/api/projects/${id}`);
    setProjectDetail(response.data);
    setLoading(true);
  };

  const fetchProjectTasks = async () => {
    const response = await axios.get(`${apiUrl}/api/tasks/all/${id}`);
    setProjectTasks(response.data);
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

  const renderOneProject = () => {
    if (!loading) {
      return (
        <div className="content">
          <h4>Loading</h4>;
        </div>
      );
    } else {
      return (
        <div>
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
                          <a href="/dashboard">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/dashboard">Projects</a>
                        </li>
                        <li className="breadcrumb-item active">
                          Project Details
                        </li>
                      </ol>
                    </div>
                    <h4 className="page-title">Project Details</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-12">
                  {/* project card */}
                  <div className="card d-block">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="">{projectDetail.projectname}</h3>

                        {user.role === "Admin" ? (
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle arrow-none card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ri-more-fill" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              {/* item*/}
                              <Link
                                to={`/dashboard/projects/${projectDetail._id}`}
                                className="dropdown-item"
                              >
                                <i className="mdi mdi-pencil me-1" />
                                Edit
                              </Link>
                              {/* item*/}
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => {
                                  handleDelete(projectDetail._id);
                                  fetchProjects();
                                }}
                              >
                                <i className="mdi mdi-delete me-1" />
                                Delete
                              </a>
                              {/* item*/}
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}

                        {/* project title*/}
                      </div>
                      <div className="badge bg-secondary text-light mb-3 px-3">
                        <h6>{projectDetail.status}</h6>
                      </div>
                      <h5>Project Overview:</h5>
                      <p className="text-muted mb-2">
                        {projectDetail.overview}
                      </p>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-4">
                            <h5>Start Date</h5>
                            <p>{projectDetail.startdate}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-4">
                            <h5>End Date</h5>
                            <p>{projectDetail.duedate}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-4">
                            <h5>Budget</h5>
                            <p>{projectDetail.budget}</p>
                          </div>
                        </div>
                      </div>
                      <div id="tooltip-container">
                        <h5>Team Members:</h5>
                        <div className="d-flex">
                          {projectDetail.members.map((members, key) => {
                            return (
                              <p className="me-2" key={key}>
                                {members}
                              </p>
                            );
                          })}
                        </div>
                        <a
                          href="#"
                          data-bs-container="#tooltip-container"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Michael Zenaty"
                          className="d-inline-block"
                        ></a>
                      </div>
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card*/}
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>{" "}
            {/* container */}
          </div>
        </div>
      );
    }
  };

  const renderProjectTasks = () => {
    if (!taskLoading) {
      return (
        <div className="content">
          <h4>Loading</h4>;
        </div>
      );
    } else {
      return (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* start page title */}
                <div className="page-title-box">
                  <div className="page-title-right">
                    <div className="app-search"></div>
                  </div>
                  <h4 className="page-title">
                    Tasks
                    <Link
                      to={"/dashboard/createtask"}
                      className="btn btn-success btn-sm ms-3 rounded-pill"
                    >
                      Add New
                    </Link>
                  </h4>
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
                      {/* <i className="uil uil-angle-down font-18" />
                      Ongoing <span className="text-muted">(10)</span> */}
                      <i className="uil uil-angle-down font-18" />
                      Ongoing <span className="text-muted">(
                        {projectTasks.filter((a) => a.status === "Ongoing").length}
                      )
                          </span>
                    </a>
                  </h5>
                  <div className="collapse show" id="ongoingTasks">
                    <div className="card mb-0">
                      <div className="card-body">
                        {projectTasks
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
                      Paused <span className="text-muted">(
                      {projectTasks.filter((a) => a.status === "Paused").length}
                      )
                      </span>
                    </a>
                  </h5>
                  <div className="collapse show" id="pausedTasks">
                    <div className="card mb-0">
                      <div className="card-body">
                        {projectTasks
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
                      Under Review <span className="text-muted">
                      (
                        {projectTasks.filter((a) => a.status === "Under Review").length}
                      )
                      </span>
                    </a>
                  </h5>
                  <div className="collapse show" id="underReviewTasks">
                    <div className="card mb-0">
                      <div className="card-body">
                        {projectTasks
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
                <div className="mt-2 mb-5">
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
                      Completed <span className="text-muted">
                      (
                        {projectTasks.filter((a) => a.status === "Completed").length}
                      )
                      </span>
                    </a>
                  </h5>
                  <div className="collapse show" id="completedTasks">
                    <div className="card mb-0">
                      <div className="card-body">
                        {projectTasks
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
      );
    }
  };

  return (
    <>
      {renderOneProject()}
      {renderProjectTasks()}
      {/* Footer Start */}
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">© Hyper - Coderthemes.com</div>
            <div className="col-md-6">
              <div className="text-md-end footer-links d-none d-md-block">
                <a href="#">About</a>
                <a href="#">Support</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end Footer */}
    </>
  );
}
