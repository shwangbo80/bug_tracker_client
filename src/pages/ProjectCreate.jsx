import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

export default function ProjectCreate({ fetchProjects, userList }) {
  let history = useHistory();
  const projectName = useRef();
  const overview = useRef();
  const startDate = useRef();
  const dueDate = useRef();
  const budget = useRef();
  const file = useRef();
  const [status, setStatus] = useState("Ongoing");
  const [membersArr, setMembersArr] = useState([]);
  const [memberAdd, setMemberAdd] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleAddMember = () => {
    console.log(memberAdd);
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

  const fetchProjectMembers = () => {
    if (membersArr.length === 0) {
      return;
    } else {
      {
        membersArr.map((item) => {
          return (
            <>
              <h4>{item}</h4>
              <button
                onClick={() => {
                  setMemberAdd(item);
                  handleDeleteMember();
                  console.log(memberAdd);
                }}
              >
                remove
              </button>
            </>
          );
        });
      }
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
      projectname: projectName.current.value,
      status: status,
      overview: overview.current.value,
      startdate: startDate.current.value,
      duedate: dueDate.current.value,
      budget: budget.current.value,
      members: membersArr,
    };

    const response = await axios.post(`${apiUrl}/api/projects/add`, newPost);
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
                      <a href="#">Hyper</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Projects</a>
                    </li>
                    <li className="breadcrumb-item active">Projects List</li>
                  </ol>
                </div>
                <h4 className="page-title">Create new project</h4>
              </div>
            </div>
          </div>
          {/* end page title */}

          {/* end row*/}
          <div className="row px=3 mt-5">
            <div className="col-md-12 col-xxl-6">
              {/* project form */}
              <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">
                  Project Name
                </label>
                <input
                  type="text"
                  id="simpleinput"
                  className="form-control"
                  ref={projectName}
                  required
                />
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
                >
                  <option value="Ongoing">Ongoing</option>
                  <option value="Paused">Paused</option>
                  <option value="Completed">Completed</option>\
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="example-select" className="form-label">
                  Task Members
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
                  }}
                >
                  <i className="mdi mdi-plus" />
                  Add
                </button>

                <div className="d-flex mt-3">
                  {membersArr.map((item) => {
                    return (
                      <div className="d-flex ms-3">
                        <h4>{item}</h4>
                        <button
                          className="btn btn-danger ms-1"
                          onClick={() => {
                            setMemberAdd(item);
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
                <label htmlFor="simpleinput" className="form-label">
                  Overview
                </label>
                <textarea
                  type="text"
                  id="simpleinput"
                  className="form-control"
                  rows="10"
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
              <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">
                  Budget
                </label>
                <input
                  type="text"
                  id="simpleinput"
                  className="form-control"
                  ref={budget}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="example-fileinput" className="form-label">
                  Default file input
                </label>
                <input
                  type="file"
                  id="example-fileinput"
                  className="form-control"
                  ref={file}
                />
              </div>
              <div className="row mb-2">
                <div className="col-sm-4">
                  <button
                    className="btn btn-danger rounded-pill mb-5"
                    onClick={handleSubmit}
                  >
                    <i className="mdi mdi-plus" />
                    Create Project
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
      </div>{" "}
    </>
  );
}
