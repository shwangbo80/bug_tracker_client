import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function TaskEdit({ fetchProjects, userList, projects, user }) {
  let { id } = useParams();
  let history = useHistory();

  const [taskDetail, setTaskDetail] = useState();
  const [taskName, setTaskName] = useState();
  const [projectId, setProjectId] = useState();
  const [status, setStatus] = useState();
  const [priority, setPriority] = useState("Low");
  const [overview, setOverview] = useState();
  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [membersArr, setMembersArr] = useState([]);
  const [memberAdd, setMemberAdd] = useState();
  const [projectArr, setProjectArr] = useState([]);
  const [projectAdd, setProjectAdd] = useState();
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchOneTask();
    fetchProjects();
  }, []);

  const fetchOneTask = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/tasks/${id}`);
      setTaskDetail(response.data);
      setTaskName(response.data.taskname);
      setProjectId(response.data.projectid);
      setStatus(response.data.status);
      setPriority(response.data.priority);
      setMembersArr(response.data.members);
      setOverview(response.data.overview);
      setStartDate(response.data.startdate);
      setDueDate(response.data.duedate);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddMember = () => {
    if (!memberAdd) {
      alert("Plese select a member");
      return;
    }

    if (membersArr.includes(memberAdd)) {
      return setMembersArr([...membersArr]);
    } else {
      setMembersArr([...membersArr, memberAdd]);
    }
  };

  const handleDeleteMember = (member) => {
    if (membersArr.includes(member)) {
      const memberIndex = membersArr.indexOf(member);
      membersArr.splice(memberIndex, 1);
      setMembersArr([...membersArr]);
    } else {
      setMembersArr([...membersArr]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (membersArr.length === 0) {
      alert("Please assign at least one member");
      return;
    }
    const newPost = {
      taskname: taskName,
      projectid: projectId,
      status: status,
      priority: priority,
      overview: overview,
      startdate: startDate,
      duedate: dueDate,
      members: membersArr,
    };

    const response = await axios.put(
      `${apiUrl}/api/tasks/update/${id}`,
      newPost
    );
    console.log(response);
    fetchProjects();
    history.push("/dashboard");
  };

  const renderEditProject = () => {
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
                          <a href="/dashboard">Hyper</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/dashboard/projects">Projects</a>
                        </li>
                        <li className="breadcrumb-item active">Edit Task</li>
                      </ol>
                    </div>
                    <h4 className="page-title">Edit task</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}

              {/* end row*/}
              <div className="row ms-5 mt-5">
                <div className="col-md-12 col-xxl-6">
                  {/* project form */}
                  {taskDetail.members.includes(user.username) ? (
                    <>
                      <select
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                        className="form-select"
                        id="example-select"
                        defaultValue={status}
                      >
                        <option value="Ongoing">Ongoing</option>
                        <option value="Paused">Paused</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Completed">Completed</option>\
                      </select>
                      <div className="mb-3">
                        <label htmlFor="simpleinput" className="form-label">
                          Overview
                        </label>
                        <textarea
                          style={{ resize: "none" }}
                          rows="10"
                          type="text"
                          id="simpleinput"
                          className="form-control"
                          value={overview}
                          onChange={(e) => {
                            setOverview(e.target.value);
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <div></div>
                  )}

                  {user.role === "Admin" ? (
                    <>
                      <div className="mb-3">
                        <label htmlFor="simpleinput" className="form-label">
                          Task Name
                        </label>
                        <input
                          type="text"
                          id="simpleinput"
                          className="form-control"
                          value={taskName}
                          onChange={(e) => setTaskName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="example-select" className="form-label">
                          Project
                        </label>
                        <select
                          onChange={(e) => {
                            setProjectId(e.target.value);
                          }}
                          className="form-select"
                          id="example-select"
                          defaultValue={projectId}
                        >
                          {projects.map((item, key) => {
                            return (
                              <option value={item._id} key={key}>
                                {item.projectname}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="example-select" className="form-label">
                          Status
                        </label>
                        <select
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                          className="form-select"
                          id="example-select"
                          defaultValue={status}
                        >
                          <option value="Ongoing">Ongoing</option>
                          <option value="Paused">Paused</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Completed">Completed</option>\
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="simpleinput" className="form-label">
                          Overview
                        </label>
                        <textarea
                          style={{ resize: "none" }}
                          rows="10"
                          type="text"
                          id="simpleinput"
                          className="form-control"
                          value={overview}
                          onChange={(e) => {
                            setOverview(e.target.value);
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="example-select" className="form-label">
                          Priority
                        </label>
                        <select
                          onChange={(e) => {
                            setPriority(e.target.value);
                          }}
                          className="form-select"
                          id="example-select"
                          defaultValue={priority}
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>\
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="example-select" className="form-label">
                          Project Members
                        </label>
                        <select
                          onChange={(e) => {
                            setMemberAdd(e.target.value);
                          }}
                          className="form-select"
                          id="example-select"
                          defaultValue={"DEFAULT"}
                        >
                          <option value="DEFAULT" disabled>
                            -- select members --
                          </option>
                          {userList.map((item, key) => {
                            return (
                              <option value={item.username} key={key}>
                                {item.username} -- {item.firstname},{" "}
                                {item.lastname}
                              </option>
                            );
                          })}
                        </select>
                        <button
                          className="btn btn-primary mt-2 rounded-pill"
                          onClick={() => {
                            handleAddMember();
                            console.log("clicked");
                          }}
                        >
                          Add
                        </button>
                        <div className="d-flex mt-3">
                          {membersArr.map((item, key) => {
                            return (
                              <div className="d-flex ms-3" key={key}>
                                <h4>{item}</h4>
                                <button
                                  className="btn btn-danger ms-1"
                                  onClick={() => {
                                    setMembersArr(item);
                                    handleDeleteMember(item);
                                  }}
                                >
                                  X
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="example-date" className="form-label">
                          Start Date
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                          value={startDate}
                          onChange={(e) => {
                            setStartDate(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="example-date" className="form-label">
                          Due Date
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                          value={dueDate}
                          onChange={(e) => {
                            setDueDate(e.target.value);
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="row mb-2">
                    <div className="col-sm-4">
                      <button
                        className="btn btn-danger rounded-pill mb-5"
                        onClick={handleSubmit}
                      >
                        <i className="mdi mdi-plus" />
                        Update Task
                      </button>
                    </div>
                  </div>
                  {/* end form*/}
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row*/}
            </div>{" "}
            {/* container */}
          </div>
        </>
      );
    }
  };

  return <>{renderEditProject()}</>;
}
