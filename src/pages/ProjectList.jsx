import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function ProjectList({
  user,
  projects,
  fetchProjects,
  projectLoading,
  setSelectedProject,
}) {
  const history = useHistory();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleDelete = async (item) => {
    const confirmMessage = window.confirm(
      "Are you sure you want to delete the project?"
    );
    if (confirmMessage) {
      await axios.delete(`${apiUrl}/api/projects/delete/${item}`);
      await axios.delete(`${apiUrl}/api/tasks/delete/project/${item}`);
      fetchProjects();
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

  const renderProjects = () => {
    if (!projectLoading) {
      return <h4>Loading</h4>;
    } else {
      const mapData = projects.map((item, key) => {
        return (
          <div className="col-md-6 col-xxl-3" key={key}>
            <div className="card d-block">
              <div className="card-body">
                {/* project title*/}
                <h4 className="mt-0">
                  <Link
                    to={`/dashboard/projectdetails/${item._id}`}
                    onClick={() => setSelectedProject(item._id)}
                  >
                    <span className="text-title">{item.projectname}</span>
                  </Link>
                </h4>
                <div className={renderStatus(item.status)}>{item.status}</div>
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
                {/* project detail*/}
              </div>
              {/* end card-body*/}
            </div>
          </div>
        );
      });
      return mapData;
    }
  };

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
                      <a href="/dashboard">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/dashboard">Projects</a>
                    </li>
                  </ol>
                </div>
                <h4 className="page-title">Projects List</h4>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row mb-2">
            <div className="col-sm-4">
              {user.role === "Admin" ? (
                <Link
                  to={"/dashboard/createproject"}
                  className="btn btn-primary rounded-pill mb-3"
                >
                  <i className="mdi mdi-plus" /> Create Project
                </Link>
              ) : (
                <div></div>
              )}
            </div>
            {/* end col*/}
          </div>
          <div className="row">
            {renderProjects()}
            {/* end col */}
          </div>
          {/* end row*/}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </>
  );
}
