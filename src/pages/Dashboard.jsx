import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import Users from "./Users";
import Faq from "./Faq";
import Error from "./Error";
import ProjectCreate from "./ProjectCreate";
import ProjectEdit from "./ProjectEdit";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import TaskCreate from "./TaskCreate";
import TaskEdit from "./TaskEdit";
import TaskDetails from "./TaskDetails";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserInfo from "./UserInfo";
import UserTask from "./UserTask";
const apiUrl = process.env.REACT_APP_API_URL;

export default function Dashboard({ user, setUser }) {
  const [selectedProject, setSelectedProject] = useState();
  const [projects, setProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userListLoading, setUserListLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetchProjects();
    fetchUsers();
    fetchTasks();
  }, []);

  const fetchProjects = async () => {
    const response = await axios.get(`${apiUrl}/api/projects/all`);
    setProjects(
      response.data
        .reverse()
        .sort((a, b) =>
          new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1
        )
    );
    setProjectLoading(true);
  };

  const fetchTasks = async () => {
    const response = await axios.get(`${apiUrl}/api/tasks`);
    setTasks(
      response.data
        .reverse()
        .sort((a, b) =>
          new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1
        )
    );
    setTaskLoading(true);
  };

  const fetchUsers = async () => {
    const response = await axios.get(`${apiUrl}/api/users/all`);
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
    setUserList(arrResult);
    setUserListLoading(true);
  };

  const handleLogout = () => {
    setUser();
    localStorage.clear();
  };

  let { path } = useRouteMatch();

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="/">
                Bug Tracker
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/dashboard"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard/tasks">
                    My Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard/users">
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Begin page */}
        <div className="wrapper">
          <div className="container mt-5">
            <div className="content">
              {/* Start Content*/}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-flex justify-content-between">
                      <h2>{`Welcome ${user.firstname}, ${user.lastname}`}</h2>
                      <Link to={"/login"}>
                        <button
                          type="button"
                          className="btn btn-danger rounded-pill "
                          onClick={handleLogout}
                        >
                          Log out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* container */}
            </div>
            {/* content */}
            <Switch>
              <Route path={`${path}/taskdetails/taskedit/:id`}>
                <TaskEdit
                  fetchProjects={fetchProjects}
                  projects={projects}
                  userList={userList}
                  user={user}
                />
              </Route>
              <Route path={`${path}/taskdetails/:id`}>
                <TaskDetails user={user} projects={projects} />
              </Route>
              <Route path={`${path}/createtask`}>
                <TaskCreate
                  fetchProjects={fetchProjects}
                  userList={userList}
                  projects={projects}
                  selectedProject={selectedProject}
                />
              </Route>
              <Route path={`${path}/projectdetails/:id`}>
                <ProjectDetails
                  fetchProjects={fetchProjects}
                  user={user}
                  projectLoading={projectLoading}
                />
              </Route>
              <Route path={`${path}/projects/:id`}>
                <ProjectEdit
                  projects={projects}
                  projectLoading={projectLoading}
                  fetchProjects={fetchProjects}
                  selectedProject={selectedProject}
                  userList={userList}
                  fetchUsers={fetchUsers}
                  setProjectLoading={setProjectLoading}
                />
              </Route>
              <Route path={`${path}/createproject`}>
                <ProjectCreate
                  fetchProjects={fetchProjects}
                  fetchUsers={fetchUsers}
                  userList={userList}
                />
              </Route>
              <Route path={`${path}/createuser`}>
                <UserCreate fetchProjects={fetchProjects} userList={userList} />
              </Route>
              <Route path={`${path}/users`}>
                <Users userList={userList} user={user} />
              </Route>
              <Route path={`${path}/faq`}>
                <Faq />
              </Route>
              <Route path={`${path}/useredit/:id`}>
                <UserEdit fetchProjects={fetchProjects} />
              </Route>
              <Route path={`${path}/userinfo/:id`}>
                <UserInfo user={user} />
              </Route>
              <Route path={`${path}/tasks`}>
                <UserTask
                  projects={projects}
                  user={user}
                  tasks={tasks}
                  projectLoading={projectLoading}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                  fetchProjects={fetchProjects}
                />
              </Route>
              <Route exact path={`/dashboard`}>
                <ProjectList
                  user={user}
                  projects={projects}
                  projectLoading={projectLoading}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                  fetchProjects={fetchProjects}
                />
              </Route>
              <Route exact path={"/dashboard/" + "*"}>
                <Error />
              </Route>
            </Switch>
          </div>

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
        </div>
      </div>
    </>
  );
}
