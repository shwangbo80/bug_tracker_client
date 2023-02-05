import React from "react";

export default function TaskList() {
  return (
    <div className="wrapper">
      {/* ============================================================== */}
      {/* Start Page Content here */}
      {/* ============================================================== */}
      <div className="content">
        {/* Start Content*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* start page title */}
              <div className="page-title-box">
                <div className="page-title-right">
                  <div className="app-search">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <span className="mdi mdi-magnify search-icon" />
                        <button
                          className="input-group-text btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="uil uil-sort-amount-down" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
                            Due Date
                          </a>
                          <a className="dropdown-item" href="#">
                            Added Date
                          </a>
                          <a className="dropdown-item" href="#">
                            Assignee
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <h4 className="page-title">
                  Tasks
                  <a href="#" className="btn btn-success btn-sm ms-3">
                    Add New
                  </a>
                </h4>
              </div>
              {/* end page title */}
              {/* tasks panel */}
              <div className="mt-2">
                <h5 className="m-0 pb-2">
                  <a
                    className="text-dark"
                    data-bs-toggle="collapse"
                    href="#todayTasks"
                    role="button"
                    aria-expanded="false"
                    aria-controls="todayTasks"
                  >
                    <i className="uil uil-angle-down font-18" />
                    Ongoing <span className="text-muted">(10)</span>
                  </a>
                </h5>
                <div className="collapse show" id="todayTasks">
                  <div className="card mb-0">
                    <div className="card-body">
                      {/* task */}
                      <div className="row justify-content-sm-between">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <div className="form-check">
                            <label className="form-check-label" htmlFor="task1">
                              Draft the new contract document for sales team
                            </label>
                          </div>{" "}
                          {/* end checkbox */}
                        </div>{" "}
                        {/* end col */}
                        <div className="col-sm-6">
                          <div className="d-flex justify-content-between">
                            <div id="tooltip-container">
                              <h4>Assigned to: </h4>
                            </div>
                            <div>
                              <ul className="list-inline font-13 text-end">
                                <li className="list-inline-item">
                                  <i className="uil uil-schedule font-16 me-1" />{" "}
                                  Today 10am
                                </li>
                                <li className="list-inline-item ms-1">
                                  <i className="uil uil-align-alt font-16 me-1" />{" "}
                                  3/7
                                </li>
                                <li className="list-inline-item ms-1">
                                  <i className="uil uil-comment-message font-16 me-1" />{" "}
                                  21
                                </li>
                                <li className="list-inline-item ms-2">
                                  <span className="badge badge-danger-lighten p-1">
                                    High
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>{" "}
                          {/* end .d-flex*/}
                        </div>{" "}
                        {/* end col */}
                      </div>
                      {/* end task */}
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card */}
                </div>{" "}
                {/* end .collapse*/}
              </div>{" "}
              {/* end .mt-2*/}
              {/* upcoming tasks */}
              <div className="mt-4">
                <h5 className="m-0 pb-2">
                  <a
                    className="text-dark"
                    data-bs-toggle="collapse"
                    href="#upcomingTasks"
                    role="button"
                    aria-expanded="false"
                    aria-controls="upcomingTasks"
                  >
                    <i className="uil uil-angle-down font-18" />
                    Completed <span className="text-muted">(5)</span>
                  </a>
                </h5>
                <div className="collapse show" id="upcomingTasks">
                  <div className="card mb-0">
                    <div className="card-body">
                      {/* task */}
                      <div className="row justify-content-sm-between">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <div className="form-check">
                            <label className="form-check-label" htmlFor="task4">
                              Invite user to a project
                            </label>
                          </div>{" "}
                          {/* end checkbox */}
                        </div>{" "}
                        {/* end col */}
                        <div className="col-sm-6">
                          <div className="d-flex justify-content-between">
                            <div id="tooltip-container3">
                              <h4>Assigned to: </h4>
                            </div>
                            <div>
                              <ul className="list-inline font-13 text-end">
                                <li className="list-inline-item">
                                  <i className="uil uil-schedule font-16 me-1" />{" "}
                                  Tomorrow 7am
                                </li>
                                <li className="list-inline-item ms-1">
                                  <i className="uil uil-align-alt font-16 me-1" />{" "}
                                  1/12
                                </li>
                                <li className="list-inline-item ms-1">
                                  <i className="uil uil-comment-message font-16 me-1" />{" "}
                                  36
                                </li>
                                <li className="list-inline-item ms-2">
                                  <span className="badge badge-danger-lighten p-1">
                                    High
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>{" "}
                          {/* end .d-flex*/}
                        </div>{" "}
                        {/* end col */}
                      </div>
                      {/* end task */}
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card */}
                </div>{" "}
                {/* end collapse*/}
              </div>
              {/* end upcoming tasks */}
            </div>{" "}
            {/* end col */}
            {/* task details */}
            {/* end col */}
          </div>
          {/* end row*/}
        </div>
        {/* container */}
      </div>{" "}
      {/* content */}
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
      {/* ============================================================== */}
      {/* End Page content */}
      {/* ============================================================== */}
    </div>
  );
}
