import React from "react";

class MenuBio extends React.Component {
  render() {
    return (
      <div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card dipro-menu-card-info">
              <div className="card-body">
                <div className="d-flex">
                  <div className="col-lg-2 col-12 d-none d-lg-block">
                    <div className="mt-2">
                      <span className="badge badge-info f-white">
                        <i className="fa fa-address-book fa-2x" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-10 col-12">
                    <div className="mt-2">
                      <ol className="numbered-info">
                        <li className="border-bottom">
                          <div className="d-flex flex-row">
                            <div className="mr-auto">
                              <span className="f8-vw">My Profile</span>
                            </div>
                            <div>
                              <span className="f10-vw f-green">
                                <i className="fa fa-check-circle" />
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="border-bottom">
                          <div className="d-flex flex-row">
                            <div className="mr-auto">
                              <span className="f8-vw">Business</span>
                            </div>
                            <div>
                              <span className="f10-vw f-red">
                                <i className="fa fa-exclamation-circle" />
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="border-bottom">
                          <div className="d-flex flex-row">
                            <div className="mr-auto">
                              <span className="f8-vw">Personal</span>
                            </div>
                            <div>
                              <span className="f10-vw f-red">
                                <i className="fa fa-exclamation-circle" />
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex flex-row">
                            <div className="mr-auto">
                              <span className="f8-vw">Account</span>
                            </div>
                            <div>
                              <span className="f10-vw f-green">
                                <i className="fa fa-check-circle" />
                              </span>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBio;
