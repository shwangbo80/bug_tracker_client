import React from "react";

export default function Landing() {
  return (
    <>
      <>
        {/* NAVBAR START */}
        <nav className="navbar navbar-expand-lg py-lg-3 navbar-dark">
          <div className="container">
            {/* logo */}
            <a href="/" className="navbar-brand me-lg-5">
              <img
                src="assets/images/logo.png"
                alt="logo"
                className="logo-dark"
                height={22}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu" />
            </button>
            {/* menus */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              {/* left menu */}
              <ul className="navbar-nav me-auto align-items-center">
                <li className="nav-item mx-lg-1">
                  <a className="nav-link active" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="">
                    Features
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="">
                    Clients
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="">
                    Contact
                  </a>
                </li>
              </ul>
              {/* right menu */}
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item me-0">
                  <a
                    href="/login"
                    className="btn btn-sm btn-light rounded-pill d-none d-lg-inline-flex"
                  >
                    <i className="mdi mdi-lock me-2" /> Login
                  </a>
                </li>
              </ul>
              <li className="nav-item me-0">
                <a
                  href="/register"
                  className="btn btn-sm btn-light rounded-pill d-none d-lg-inline-flex"
                >
                  <i className="mdi mdi-pen me-2" /> Register
                </a>
              </li>
            </div>
          </div>
        </nav>
        {/* NAVBAR END */}
        {/* START HERO */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="mt-md-4">
                  <div>
                    <span className="badge bg-danger rounded-pill">New</span>
                    <span className="text-white-50 ms-1">
                      Welcome to new landing page
                    </span>
                  </div>
                  <h2 className="text-white fw-normal mb-4 mt-3 hero-title">
                    Responsive Web UI Kit &amp; Dashboard Template
                  </h2>
                  <p className="mb-4 font-16 text-white-50">
                    Hyper is a fully featured dashboard and admin template comes
                    with tones of well designed UI elements, components, widgets
                    and pages.
                  </p>
                  <a href="" target="_blank" className="btn btn-success">
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
                    The admin is fully{" "}
                    <span className="text-primary">responsive</span> and easy to{" "}
                    <span className="text-primary">customize</span>
                  </h3>
                  <p className="text-muted mt-2">
                    The clean and well commented code allows easy customization
                    of the theme.It's designed for
                    <br />
                    describing your app, agency or business.
                  </p>
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
                  <h4 className="mt-3">Responsive Layouts</h4>
                  <p className="text-muted mt-2 mb-0">
                    Et harum quidem rerum as expedita distinctio nam libero
                    tempore cum soluta nobis est cumque quo.
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
                  <h4 className="mt-3">Based on Bootstrap UI</h4>
                  <p className="text-muted mt-2 mb-0">
                    Temporibus autem quibusdam et aut officiis necessitatibus
                    saepe eveniet ut sit et recusandae.
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
                  <h4 className="mt-3">Creative Design</h4>
                  <p className="text-muted mt-2 mb-0">
                    Nam libero tempore, cum soluta a est eligendi minus id quod
                    maxime placeate facere assumenda est.
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
                  <h4 className="mt-3">Multiple Applications</h4>
                  <p className="text-muted mt-2 mb-0">
                    Et harum quidem rerum as expedita distinctio nam libero
                    tempore cum soluta nobis est cumque quo.
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
                  <h4 className="mt-3">Ecommerce Pages</h4>
                  <p className="text-muted mt-2 mb-0">
                    Temporibus autem quibusdam et aut officiis necessitatibus
                    saepe eveniet ut sit et recusandae.
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
                  <h4 className="mt-3">Multiple Layouts</h4>
                  <p className="text-muted mt-2 mb-0">
                    Nam libero tempore, cum soluta a est eligendi minus id quod
                    maxime placeate facere assumenda est.
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
                    Hyper comes with next generation ui design and have multiple
                    benefits
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
                <h3 className="fw-normal">Inbuilt applications and pages</h3>
                <p className="text-muted mt-3">
                  Hyper comes with a variety of ready-to-use applications and
                  pages that help to speed up the development
                </p>
                <div className="mt-4">
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-primary" />{" "}
                    Projects &amp; Tasks
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-primary" />{" "}
                    Ecommerce Application Pages
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-primary" />{" "}
                    Profile, pricing, invoice
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-circle-medium text-primary" /> Login,
                    signup, forget password
                  </p>
                </div>
                <a href="" className="btn btn-primary rounded-pill mt-3">
                  Read More <i className="mdi mdi-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div className="row pb-3 pt-5 align-items-center">
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
            </div>
          </div>
        </section>
        {/* END FEATURES 2 */}
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
                  <button type="button" className="btn btn-success btn-sm mt-2">
                    <i className="mdi mdi-email-outline me-1" /> Email us your
                    question
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-sm mt-2 ms-1"
                  >
                    <i className="mdi mdi-twitter me-1" /> Send us a tweet
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-5 offset-lg-1">
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question text-body">
                    Can I use this template for my client?
                  </h4>
                  <p className="faq-answer mb-4 pb-1 text-muted">
                    Yup, the marketplace license allows you to use this theme in
                    any end products. For more information on licenses, please
                    refere{" "}
                    <a
                      href="https://themes.getbootstrap.com/licenses/"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question text-body">
                    How do I get help with the theme?
                  </h4>
                  <p className="faq-answer mb-4 pb-1 text-muted">
                    Use our dedicated support email (support@coderthemes.com) to
                    send your issues or feedback. We are here to help anytime.
                  </p>
                </div>
              </div>
              {/*/col-lg-5 */}
              <div className="col-lg-5">
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question text-body">
                    Can this theme work with Wordpress?
                  </h4>
                  <p className="faq-answer mb-4 pb-1 text-muted">
                    No. This is a HTML template. It won't directly with
                    wordpress, though you can convert this into wordpress
                    compatible theme.
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question text-body">
                    Will you regularly give updates of Hyper?
                  </h4>
                  <p className="faq-answer mb-4 pb-1 text-muted">
                    Yes, We will update the Hyper regularly. All the future
                    updates would be available without any cost.
                  </p>
                </div>
              </div>
              {/*/col-lg-5*/}
            </div>
            {/* end row */}
          </div>{" "}
          {/* end container*/}
        </section>
        {/* END FAQ */}
        {/* START CONTACT */}
        <section className="py-5 bg-light-lighten border-top border-bottom border-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h3>
                    Get In <span className="text-primary">Touch</span>
                  </h3>
                  <p className="text-muted mt-2">
                    Please fill out the following form and we will get back to
                    you shortly. For more
                    <br />
                    information please contact us.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-3">
              <div className="col-md-4">
                <p className="text-muted">
                  <span className="fw-bold">Customer Support:</span>
                  <br /> <span className="d-block mt-1">+1 234 56 7894</span>
                </p>
                <p className="text-muted mt-4">
                  <span className="fw-bold">Email Address:</span>
                  <br /> <span className="d-block mt-1">info@gmail.com</span>
                </p>
                <p className="text-muted mt-4">
                  <span className="fw-bold">Office Address:</span>
                  <br />{" "}
                  <span className="d-block mt-1">
                    4461 Cedar Street Moro, AR 72368
                  </span>
                </p>
                <p className="text-muted mt-4">
                  <span className="fw-bold">Office Time:</span>
                  <br /> <span className="d-block mt-1">9:00AM To 6:00PM</span>
                </p>
              </div>
              <div className="col-md-8">
                <form>
                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="fullname" className="form-label">
                          Your Name
                        </label>
                        <input
                          className="form-control form-control-light"
                          type="text"
                          id="fullname"
                          placeholder="Name..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="emailaddress" className="form-label">
                          Your Email
                        </label>
                        <input
                          className="form-control form-control-light"
                          type="email"
                          required=""
                          id="emailaddress"
                          placeholder="Enter you email..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-12">
                      <div className="mb-2">
                        <label htmlFor="subject" className="form-label">
                          Your Subject
                        </label>
                        <input
                          className="form-control form-control-light"
                          type="text"
                          id="subject"
                          placeholder="Enter subject..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-lg-12">
                      <div className="mb-2">
                        <label htmlFor="comments" className="form-label">
                          Message
                        </label>
                        <textarea
                          id="comments"
                          rows={4}
                          className="form-control form-control-light"
                          placeholder="Type your message here..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 text-end">
                      <button className="btn btn-primary">
                        Send a Message <i className="mdi mdi-telegram ms-1" />{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* END CONTACT */}
        {/* START FOOTER */}
        <footer className="bg-dark py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="assets/images/logo.png"
                  alt="logo"
                  className="logo-dark"
                  height={22}
                />
                <p className="text-muted mt-4">
                  Hyper makes it easier to build better websites with
                  <br /> great speed. Save hundreds of hours of design
                  <br /> and development by using it.
                </p>
                <ul className="social-list list-inline mt-3">
                  <li className="list-inline-item text-center">
                    <a
                      href="#"
                      className="social-list-item border-primary text-primary"
                    >
                      <i className="mdi mdi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item text-center">
                    <a
                      href="#"
                      className="social-list-item border-danger text-danger"
                    >
                      <i className="mdi mdi-google" />
                    </a>
                  </li>
                  <li className="list-inline-item text-center">
                    <a
                      href="#"
                      className="social-list-item border-info text-info"
                    >
                      <i className="mdi mdi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item text-center">
                    <a
                      href="#"
                      className="social-list-item border-secondary text-secondary"
                    >
                      <i className="mdi mdi-github" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
                <h5 className="text-light">Company</h5>
                <ul className="list-unstyled ps-0 mb-0 mt-3">
                  <li className="mt-2">
                    <a href="#;" className="text-muted">
                      About Us
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Documentation
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Blog
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Affiliate Program
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
                <h5 className="text-light">Apps</h5>
                <ul className="list-unstyled ps-0 mb-0 mt-3">
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Ecommerce Pages
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Email
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Social Feed
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Projects
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Tasks Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
                <h5 className="text-light">Discover</h5>
                <ul className="list-unstyled ps-0 mb-0 mt-3">
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Help Center
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Our Products
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="text-muted">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="mt-5">
                  <p className="text-muted mt-4 text-center mb-0">
                    © 2018 - Hyper. Design and coded by Coderthemes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}
