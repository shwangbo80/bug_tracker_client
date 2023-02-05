import React from "react";

export default function TaskInfo() {
  return (
    <>
      {/* ============================================================== */}
      {/* Start Page Content here */}
      {/* ============================================================== */}
      <div className="content">
        {/* Start Content*/}
        <div className="container-fluid">
          <div className="row">
            {/* end col */}
            {/* task details */}
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown card-widgets">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="uil uil-ellipsis-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="uil uil-file-upload me-1" />
                        Attachment
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="uil uil-edit me-1" />
                        Edit
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="uil uil-file-copy-alt me-1" />
                        Mark as Duplicate
                      </a>
                      <div className="dropdown-divider" />
                      {/* item*/}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item text-danger"
                      >
                        <i className="uil uil-trash-alt me-1" />
                        Delete
                      </a>
                    </div>{" "}
                    {/* end dropdown menu*/}
                  </div>{" "}
                  {/* end dropdown*/}
                  <div className="form-check float-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="completedCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="completedCheck"
                    >
                      Mark as completed
                    </label>
                  </div>{" "}
                  {/* end form-check*/}
                  <hr className="mt-4 mb-2" />
                  <div className="row">
                    <div className="col">
                      <h4>Draft the new contract document for sales team</h4>
                      <div className="row">
                        <div className="col-6">
                          {/* assignee */}
                          <p className="mt-2 mb-1 text-muted">Assigned To</p>
                          <div className="d-flex">
                            <div>
                              <h5 className="mt-1 font-14">Arya Stark</h5>
                            </div>
                          </div>
                          {/* end assignee */}
                        </div>{" "}
                        {/* end col */}
                        <div className="col-6">
                          {/* start due date */}
                          <p className="mt-2 mb-1 text-muted">Due Date</p>
                          <div className="d-flex">
                            <i className="uil uil-schedule font-18 text-success me-1" />
                            <div>
                              <h5 className="mt-1 font-14">Today 10am</h5>
                            </div>
                          </div>
                          {/* end due date */}
                        </div>{" "}
                        {/* end col */}
                      </div>{" "}
                      {/* end row */}
                      {/* task description */}
                      <div className="row mt-3">
                        <div className="col">
                          <div className="border rounded">
                            <div id="bubble-editor" style={{ height: 130 }}>
                              <h3>This is an simple editable area.</h3>
                              <p>
                                <br />
                              </p>
                              <ul>
                                <li>Select a text to reveal the toolbar.</li>
                                <li>
                                  Edit rich document on-the-fly, so elastic!
                                </li>
                              </ul>
                              <p>
                                <br />
                              </p>
                            </div>{" "}
                            {/* end Snow-editor*/}
                          </div>
                        </div>{" "}
                        {/* end col */}
                      </div>
                      {/* end task description */}
                    </div>{" "}
                    {/* end col */}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body */}
              </div>{" "}
              {/* end card*/}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row*/}
        </div>{" "}
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
    </>
  );
}
