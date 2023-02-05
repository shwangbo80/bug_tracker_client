import React from "react";
import {useRef, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function TaskCreate({fetchProjects, userList, projects}) {
  let history = useHistory();
  const taskName = useRef();
  const [projectName, setProjectName] = useState();
  const [status, setStatus] = useState("Ongoing");
  const [priority, setPriority] = useState("Low");
  const [projectId, setProjectId] = useState();
  const overview = useRef();
  const startDate = useRef();
  const dueDate = useRef();
  const [membersArr, setMembersArr] = useState([]);
  const [memberAdd, setMemberAdd] = useState();
  const [projectArr, setProjectArr] = useState([]);
  const [projectAdd, setProjectAdd] = useState();
  const [members, setMembers] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(membersArr);

  const handleAddMember = () => {
    if (memberAdd === undefined) {
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
    if (!projectId) {
      alert("You must assign a project to a task");
      return;
    }
    if (membersArr.length === 0) {
      alert("Please assign at least one member");
      return;
    }
    const newPost = {
      taskname: taskName.current.value,
      projectid: projectId,
      status: status,
      priority: priority,
      overview: overview.current.value,
      startdate: startDate.current.value,
      duedate: dueDate.current.value,
      members: membersArr,
    };

    const response = await axios.post(`${apiUrl}/api/tasks/add`, newPost);
    console.log(response);
    fetchProjects();
    history.push("/dashboard");
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
                      <a href="/dashboard">Hyper</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/dashboard/projects">Projects</a>
                    </li>
                    <li className="breadcrumb-item active">Create Task</li>
                  </ol>
                </div>
                <h4 className="page-title">Create new task</h4>
              </div>
            </div>
          </div>
          {/* end page title */}

          {/* end row*/}
          <div className="row ms-5 mt-5">
            <div className="col-md-12 col-xxl-6">
              {/* project form */}

              <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  id="simpleinput"
                  className="form-control"
                  ref={taskName}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="example-select" className="form-label">
                  Project
                </label>
                <select
                  className="form-select"
                  id="example-select"
                  defaultValue={""}
                  onChange={(e) => setProjectId(e.target.value)}>
                  <option value="">Select project</option>;
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
                  defaultValue={(e) => e.target.value}>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Paused">Paused</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Completed">Completed</option>\
                </select>
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
                  defaultValue={(e) => e.target.value}>
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
                  defaultValue={"DEFAULT"}>
                  <option value="DEFAULT" disabled>
                    -- select members --
                  </option>
                  {userList.map((item, key) => {
                    return (
                      <option value={item.username} key={key}>
                        {item.username} -- {item.firstname}, {item.lastname}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="btn btn-primary mt-2 rounded-pill"
                  onClick={() => {
                    handleAddMember();
                    console.log("clicked");
                  }}>
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
                            setMembers(item);
                            handleDeleteMember(item);
                          }}>
                          X
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">
                  Overview
                </label>
                <textarea
                  style={{resize: "none"}}
                  rows="10"
                  type="text"
                  id="simpleinput"
                  className="form-control"
                  ref={overview}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="example-date" className="form-label">
                  Start Date
                </label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  ref={startDate}
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
                  ref={dueDate}
                />
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <button
                    className="btn btn-danger rounded-pill mb-5"
                    onClick={handleSubmit}>
                    <i className="mdi mdi-plus" />
                    Create Task
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
