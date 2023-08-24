import React from "react";
import {useEffect, useState} from "react";
import {useParams, Link, useRouteMatch, useHistory} from "react-router-dom";
import axios from "axios";

export default function TaskDetails({user}) {
  let {id} = useParams();
  let history = useHistory();
  let {path} = useRouteMatch();

  const [taskDetail, setTaskDetail] = useState();
  const [projectName, setProjectName] = useState();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchProjects();
    fetchOneTask();
  }, []);

  console.log(user);

  const handleDelete = async (item) => {
    const confirmMessage = window.confirm(
      "Are you sure you want to delete the task?"
    );
    if (confirmMessage) {
      const response = await axios.delete(`${apiUrl}/api/tasks/delete/${id}`);
      console.log(response);
      history.push("/dashboard/");
    } else {
      console.log("confirm cancelled");
    }
  };

  const fetchProjects = async () => {
    const response = await axios.get(`${apiUrl}/api/projects/all`);
    setProjects(response.data);
    setProjectLoading(true);
  };

  const fetchOneTask = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/tasks/${id}`);
      setTaskDetail([response.data]);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const renderProjectName = () => {
    if (projectLoading === false) {
      return <p></p>;
    } else {
      const findProjectName = projects.filter((name) => {
        return name._id === taskDetail[0].projectid;
      });
      return (
        <span>
          <Link to={`/dashboard/projectdetails/${findProjectName[0]._id}`}>
            <span>{findProjectName[0].projectname}</span>
          </Link>
        </span>
      );
    }
  };

  const renderPriority = (task) => {
    if (task.priority === "Low") {
      return "bg-secondary";
    } else if (task.priority === "Medium") {
      return "bg-primary";
    } else if (task.priority === "High") {
      return "bg-danger";
    } else {
      return;
    }
  };

  const renderOneTask = () => {
    if (!loading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Task Detail</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="card d-block">
                  <div className="card-body">
                    {user.role === "Admin" ||
                    taskDetail[0].members.includes(user.username) ? (
                      <div className="dropdown card-widgets">
                        <a
                          href="#"
                          className="dropdown-toggle arrow-none "
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i className="uil uil-ellipsis-h " />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to={`taskedit/${id}`} className="dropdown-item">
                            <i className="uil uil-edit me-1" />
                            Edit
                          </Link>
                          {user.role === "Admin" ? (
                            <div
                              onClick={() => {
                                handleDelete();
                              }}
                              className="dropdown-item text-danger">
                              <i className="uil uil-trash-alt me-1" />
                              Delete
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className="clearfix mt-3" />
                    <div className="d-flex justify-content-between">
                      <h2>{taskDetail[0].taskname}</h2>
                      <h4>Status: {taskDetail[0].status}</h4>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        {/* assignee */}
                        <h5 className="mt-2 mb-1  fw-bold  text-uppercase">
                          Assigned To
                        </h5>
                        <div>
                          <div>
                            <h5 className="mt-1 font-14 d-flex mt-2">
                              {taskDetail[0].members.map((item, key) => {
                                return (
                                  <p className="me-1" key={key}>
                                    {item}
                                  </p>
                                );
                              })}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h5 className="mt-2 mb-1 fw-bold">Due Date</h5>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <i className="uil uil-schedule font-18 text-success me-1" />
                            <h5 className="mt-1 font-14">
                              {taskDetail[0].duedate}
                            </h5>
                          </div>
                          <div>
                            <span className="me-2">Priority:</span>
                            <span
                              className={`badge p-1 ${renderPriority(
                                taskDetail[0]
                              )}
                              )}`}>
                              {taskDetail[0].priority}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="col-md-6">
                        <h5 className="mt-3">Overview:</h5>
                        <p className="text-muted mb-4">
                          {taskDetail[0].overview}
                        </p>
                      </div>
                      <div className="col-md-6 ms-2">
                        <h5 className="mt-3">Project Name</h5>
                        {renderProjectName()}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <>{renderOneTask()}</>;
}
