import React from "react";

class NavBarPublic extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="img/dipro64.png" className="img-round logo-dipro" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul id="public-menu-web" className="navbar-nav ml-auto">
              <li className="nav-item mx-2">
                <a
                  className="nav-link btn btn-primary dipro-btn-login f-white"
                  data-toggle="modal"
                  data-target="#loginPopup"
                >
                  <span className="f-white">
                    <i className="material-icons f10">lock_open</i> Login
                  </span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link btn bg-green-smooth dipro-btn-login f-white"
                  href="#"
                >
                  <span className="f-white">Register</span>
                </a>
              </li>
            </ul>
            {}
            <div id="public-menu-mobile" className="navbar-nav ml-auto">
              <div className="container">
                <div className="row">
                  <div className="col-6 p-1">
                    <div className="d-flex justify-content-center">
                      <a
                        className="nav-link btn btn-primary dipro-button-public-menu f-white mr-3"
                        data-toggle="modal"
                        data-target="#loginPopup"
                      >
                        <span className="f-white">
                          <i className="material-icons f10">lock_open</i> Login
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-6 p-1">
                    <div className="d-flex justify-content-center">
                      <a
                        className="nav-link btn bg-green-smooth dipro-button-public-menu f-white"
                        href="#"
                      >
                        <span className="f-white">
                          <i className="material-icons f10">person_add</i>{" "}
                          Register
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBarPublic;
