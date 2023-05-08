import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function ProjectEdit({ fetchProjects, userList }) {
  const { id } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [singleProject, setSingleProject] = useState();
  const [projectName, setProjectname] = useState();
  const [status, setStatus] = useState();
  const [overview, setOverview] = useState();
  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [budget, setBudget] = useState();
  const [membersArr, setMembersArr] = useState([]);
  const [memberAdd, setMemberAdd] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchSingleProject();
  }, []);

  const fetchSingleProject = async () => {
    const response = await axios.get(`${apiUrl}/api/projects/${id}`);
    setProjectname(response.data.projectname);
    setStatus(response.data.status);
    setOverview(response.data.overview);
    setStartDate(response.data.startdate);
    setDueDate(response.data.duedate);
    setBudget(response.data.budget);
    setMembersArr(response.data.members);
    setLoading(true);
  };

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

  const handleDeleteMember = (member) => {
    if (membersArr.includes(member)) {
      const memberIndex = membersArr.indexOf(membersArr);
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
    try {
      const response = await axios.put(`apiUrl/api/projects/update/${id}`, {
        projectname: projectName,
        status: status,
        overview: overview,
        startdate: startDate,
        duedate: dueDate,
        budget: budget,
        members: membersArr,
      });
      console.log(response);
      fetchProjects();
      history.push("/dashboard/");
    } catch (err) {
      console.log(err);
    }
  };

  const editOneProject = () => {
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
                    <h4 className="page-title">Update project</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}

              {/* end row*/}
              <div className="row  mt-5">
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
                      value={projectName}
                      onChange={(e) => {
                        setProjectname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                      Status
                    </label>
                    <select
                      defaultValue={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                      className="form-select"
                      id="example-select"
                    >
                      <option value="Ongoing">Ongoing</option>
                      <option value="Paused">Paused</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Completed">Completed</option>\
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
                    <label htmlFor="simpleinput" className="form-label">
                      Overview
                    </label>
                    <textarea
                      type="text"
                      id="simpleinput"
                      className="form-control"
                      rows="10"
                      value={overview}
                      onChange={(e) => {
                        setOverview(e.target.value);
                      }}
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
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">
                      Budget
                    </label>
                    <input
                      type="text"
                      id="simpleinput"
                      className="form-control"
                      value={budget}
                      onChange={(e) => {
                        setBudget(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-4">
                      <button
                        className="btn btn-danger rounded-pill mb-5"
                        onClick={handleSubmit}
                      >
                        <i className="mdi mdi-plus" />
                        Update Project
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
  };

  return <>{editOneProject()}</>;
}
