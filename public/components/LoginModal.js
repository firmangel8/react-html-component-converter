import React from "react";

class LoginModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="loginPopup"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="loginPopup"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header bg-primary dipro-modal-header">
              <div className="float-left">
                <span className="modal-title f14">
                  <strong>
                    <i className="fas fa-sign-in-alt" />  Login
                  </strong>
                </span>
              </div>
              <div className="float-right">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="f-white" aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <img
                      alt="image"
                      className="img-fluid"
                      src="img/sample/login.svg"
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-5 ml-md-auto text-left">
                    <form method="POST" id="form-dipro">
                      <div className="form-group">
                        <label className="f-grey f10">
                          <i className="fas fa-user" /> Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="login-username"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="f-grey f10">
                          <i className="fas fa-lock" /> Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="login-password"
                          className="form-control"
                        />
                      </div>
                    </form>
                    <button
                      className="btn btn-primary"
                      onclick="loginProcess()"
                    >
                      <i className="fas fa-check-alt" /> Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="container-fluid">
                <div className="float-right f8">
                  © 2018 Digital Property - DiPro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
