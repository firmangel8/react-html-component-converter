import React from "react";

class RegisterModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="registerPopup"
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
            <div className="modal-header bg-info dipro-modal-header">
              <div className="float-left">
                <span className="modal-title f14">
                  <strong>
                    <i className="fas fa-sign-in-alt" />  Register
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
                    <form method="POST" id="form-dipro-register">
                      <div className="form-group">
                        <label className="f-grey f10">
                          <i className="fas fa-user" /> First Name
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="login-fsname"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="f-grey f10">
                          <i className="fas fa-user" /> Last Name
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="login-lsname"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="f-grey f10">
                          <i className="fas fa-user" /> Email
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="login-email"
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
                      onclick="registerProcess()"
                    >
                      <i className="fas fa-check-alt" /> Save
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

export default RegisterModal;
