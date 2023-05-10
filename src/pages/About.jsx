import React from "react";

function About() {
  return (
    <>
      {/* START HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="mt-md-4">
                <h2 className="text-white fw-normal hero-title">
                  About this appication
                </h2>
                <p className="mb-4 font-16 text-white">
                  This Project Management Application is a web-based tool that
                  simplifies project management and improves team collaboration.
                </p>
                <a href="/login" className="btn btn-success">
                  Preview <i className="mdi mdi-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div className="col-md-5 offset-md-2">
              <div className="text-md-end mt-3 mt-md-0">
                <img
                  src="assets/images/svg/report.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END HERO */}
      {/* START FAQ */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h1 className="mt-0">
                  <i className="mdi mdi-frequently-asked-questions" />
                </h1>
                <h3>
                  Frequently Asked{" "}
                  <span className="text-primary">Questions</span>
                </h3>
                <p className="text-muted mt-2">
                  Here are some of the basic types of questions for our
                  customers. For more
                  <br />
                  information please contact us.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 offset-lg-1">
              <div>
                <div className="faq-question-q-box">Q.</div>
                <h4 className="faq-question text-body">
                  Why did you build this application?
                </h4>
                <p className="faq-answer mb-4 pb-1 text-muted">
                  <ul>
                    <li>Simplify project management</li>
                    <li>Improve productivity</li>
                    <li>Easy to use</li>
                  </ul>
                </p>
              </div>
              <div>
                <div className="faq-question-q-box">Q.</div>
                <h4 className="faq-question text-body">
                  What language is this application build on?
                </h4>
                <p className="faq-answer mb-4 pb-1 text-muted">
                  Pure Javascript. <br />
                  The frontend of the application is built React js, and Tthe
                  backend of the application is built using Node.js and Express,
                  with a MongoDB database for data storage.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div>
                <div className="faq-question-q-box">Q.</div>
                <h4 className="faq-question text-body">
                  Where is this application deployed on?
                </h4>
                <p className="faq-answer mb-4 pb-1 text-muted">
                  The application is deployed on a Netlify for frontend, and
                  Heroku for backend. This is possible due to server getting
                  requests via REST API
                </p>
              </div>
              <div>
                <div className="faq-question-q-box">Q.</div>
                <h4 className="faq-question text-body">
                  Who developed this application?
                </h4>
                <p className="faq-answer mb-4 pb-1 text-muted">
                  This full stack application is developed by Soo Hwangbbob
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
      {/* END FAQ */}
      {/* START PROFILE */}
      <section className="py-5 bg-light-lighten border-top border-bottom border-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="text-center">
                <img className="profileImg" src="/assets/images/soo.jpg"></img>
                <h3>
                  Hello from <span className="text-primary">Soo</span>
                </h3>
                <p className="profileText">
                  Welcome to my project management application! My name is Soo
                  Hwangbo and I am the developer behind this platform.
                </p>
                <p className="profileText">
                  I am passionate about creating tools that help people work
                  more efficiently and effectively, and I believe this
                  application will do just that. As a full stack developer
                  myself, I know first-hand how challenging it can be to keep
                  track of multiple tasks, deadlines, and team members all at
                  once. That's why I wanted to create a tool that simplifies the
                  process and makes it easy for project managers to stay
                  organized and on top of their projects.
                </p>
                <p className="profileText">
                  This project management application has been designed with the
                  needs of project managers in mind. From tracking tasks and
                  deadlines to assigning team members and monitoring progress,
                  this application is your all-in-one solution for project
                  management.
                </p>
                <p className="profileText">
                  Thank you for choosing our platform, and I hope it helps you
                  achieve your project goals with ease.
                </p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      {/* END PROFILE */}
      {/* START CONTACT */}
      <section className="py-5 bg-light-lighten border-top border-bottom border-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h1 className="mt-0">
                  <i className="mdi mdi-email-fast-outline" />
                </h1>
                <h3>
                  Get In <span className="text-primary">Touch</span>
                </h3>
                <p className="text-muted mt-2">
                  Have any questions?
                  <br />
                  Feel free to contact me
                </p>
                <address>
                  <h4>
                    <a href="mailto:shwangbo80@gmail.com">Email</a>
                  </h4>
                </address>
                <p className="text-muted mt-2">
                  See more of my work at
                  <br />
                  <h4>
                    <a href="https://soohwangbo.com">soohwangbo.com</a>
                  </h4>
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-3">
            <div className="col"></div>
          </div>
        </div>
      </section>
      {/* END CONTACT */}
    </>
  );
}

export default About;
