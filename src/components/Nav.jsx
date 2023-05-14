import React from "react";

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-lg-3 navbar-dark">
        <div className="container">
          {/* logo */}
          <a href="/" className="navbar-brand mt-2 me-lg-5">
            <p className="text-light fw-bold">Project Manager</p>
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
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-lg-1">
                <a className="nav-link" href="/about">
                  About
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
                  <i className="mdi mdi-lock me-2" />{" "}
                  {props.user ? "Dashboard" : "Login"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
