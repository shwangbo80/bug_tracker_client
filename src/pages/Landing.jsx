import React from "react";

export default function Landing() {
  return (
    <>
      <>
        {/* START HERO */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="mt-md-4">
                  <h2 className="text-white fw-normal hero-title">
                    Simplify project management
                  </h2>
                  <p className="mb-4 font-16 text-white">
                    Simplifiy project management by providing a centralized
                    platform for project managers and team members to
                    collaborate and share project-related information.
                  </p>
                  <a href="/login" className="btn btn-success">
                    Preview <i className="mdi mdi-arrow-right ms-1" />
                  </a>
                </div>
              </div>
              <div className="col-md-5 offset-md-2">
                <div className="text-md-end mt-3 mt-md-0">
                  <img
                    src="assets/images/svg/startup.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END HERO */}
        {/* START SERVICES */}
        <section className="py-5">
          <div className="container">
            <div className="row py-4">
              <div className="col-lg-12">
                <div className="text-center">
                  <h1 className="mt-0">
                    <i className="mdi mdi-infinity" />
                  </h1>
                  <h3>
                    Easy to use, with an intuitive user interface and simple
                    navigation.
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="text-center p-2 p-sm-3">
                  <div className="avatar-sm m-auto">
                    <span className="avatar-title bg-primary-lighten rounded-circle">
                      <i className="uil uil-desktop text-primary font-24" />
                    </span>
                  </div>
                  <h4 className="mt-3">Project creation and management</h4>
                  <p className="text-muted mt-2 mb-0">
                    Users can create new projects, assign team members, and set
                    deadlines for each task.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-center p-2 p-sm-3">
                  <div className="avatar-sm m-auto">
                    <span className="avatar-title bg-primary-lighten rounded-circle">
                      <i className="uil uil-vector-square text-primary font-24" />
                    </span>
                  </div>
                  <h4 className="mt-3">Task management</h4>
                  <p className="text-muted mt-2 mb-0">
                    Users can create tasks within each project, set priorities,
                    and assign them to team members.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-center p-2 p-sm-3">
                  <div className="avatar-sm m-auto">
                    <span className="avatar-title bg-primary-lighten rounded-circle">
                      <i className="uil uil-presentation text-primary font-24" />
                    </span>
                  </div>
                  <h4 className="mt-3">Task progress tracking</h4>
                  <p className="text-muted mt-2 mb-0">
                    Users can track the progress of tasks and update the status
                    of tasks in real-time.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-center p-2 p-sm-3">
                  <div className="avatar-sm m-auto">
                    <span className="avatar-title bg-primary-lighten rounded-circle">
                      <i className="uil uil-apps text-primary font-24" />
                    </span>
                  </div>
                  <h4 className="mt-3">Team collaboration</h4>
                  <p className="text-muted mt-2 mb-0">
                    The application supports team collaboration through a
                    centralized dashboard where team members can communicate,
                    share files, and receive notifications.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-center p-2 p-sm-3">
                  <div className="avatar-sm m-auto">
                    <span className="avatar-title bg-primary-lighten rounded-circle">
                      <i className="uil uil-shopping-cart-alt text-primary font-24" />
                    </span>
                  </div>
                  <h4 className="mt-3">Reporting</h4>
                  <p className="text-muted mt-2 mb-0">
                    The application provides a detailed report of project
                    progress and performance, including task status, deadlines,
                    and resource allocation.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-center p-2 p-sm-3">
                  <div className="avatar-sm m-auto">
                    <span className="avatar-title bg-primary-lighten rounded-circle">
                      <i className="uil uil-grids text-primary font-24" />
                    </span>
                  </div>
                  <h4 className="mt-3">User authentication</h4>
                  <p className="text-muted mt-2 mb-0">
                    The application supports user authentication and
                    authorization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END SERVICES */}
        {/* START FEATURES 2 */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h1 className="mt-0">
                    <i className="mdi mdi-heart-multiple-outline" />
                  </h1>
                  <h3>
                    Features you'll <span className="text-danger">love</span>
                  </h3>
                  <p className="text-muted mt-2">
                    Application comes with next generation ui design and have
                    multiple benefits
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-2 py-5 align-items-center">
              <div className="col-lg-5 col-md-6">
                <img
                  src="assets/images/svg/features-1.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 offset-md-1 col-md-5">
                <h3 className="fw-normal">Technical details:</h3>
                <div>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-primary" /> The
                    backend of the application is built using Node.js and
                    Express, with a MongoDB database for data storage
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-primary" /> The
                    frontend is built using React.js, with Redux for state
                    management and Material-UI for UI design.
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-primary" /> The
                    application is deployed on a cloud-based platform Netlify
                    and Heroku.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row pb-3 pt-5 align-items-center">
              <div className="col-lg-6 col-md-5">
                <h3 className="fw-normal">Simply beautiful design</h3>
                <p className="text-muted mt-3">
                  The simplest and fastest way to build dashboard or admin
                  panel. Hyper is built using the latest tech and tools and
                  provide an easy way to customize anything, including an
                  overall color schemes, layout, etc.
                </p>
                <div className="mt-4">
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-success" /> Built
                    with latest Bootstrap
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-success" />{" "}
                    Extensive use of SCSS variables
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-success" /> Well
                    documented and structured code
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-success" />{" "}
                    Detailed Documentation
                  </p>
                </div>
                <a href="" className="btn btn-success rounded-pill mt-3">
                  Read More <i className="mdi mdi-arrow-right ms-1" />
                </a>
              </div>
              <div className="col-lg-5 col-md-6 offset-md-1">
                <img
                  src="assets/images/svg/features-2.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </section>
        {/* END FEATURES 2 */}
        {/* START FOOTER */}
      </>
    </>
  );
}
