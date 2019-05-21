import React from "react";

class WarningModal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="warningPopup"
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
            <div className="modal-header bg-warning dipro-modal-header">
              <div className="float-left">
                <span className="modal-title f14">
                  <strong>
                    <i className="material-icons">security</i>  DiPro Customer
                    Services
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
                  <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <img
                      alt="image"
                      className="img-fluid"
                      src="img/sample/login.svg"
                    />
                  </div>
                  <div className="col-12 col-md-8 ml-md-auto text-left">
                    <h4>Opps...</h4>
                    <p>
                      To view product details, please ensure you have login to
                      DiPro platform. If you want to login, please click
                      <a href="#" onclick="loginByWarn()">
                        here
                      </a>
                    </p>
                    <hr />
                    <p>
                      <small className="text-grey">
                        If you dont have account, please click
                        <a href="#" onclick="registerByWarn()">
                          here
                        </a>{" "}
                        to register
                      </small>
                    </p>
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

export default WarningModal;
