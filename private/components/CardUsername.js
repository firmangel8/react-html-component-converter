import React from "react";

class CardUsername extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card p-2 dipro-card-user-minimalist">
              <div className="card-body">
                <div className="d-flex">
                  <div className="col-xl-6 col-12 my-auto d-none d-xl-block">
                    <img
                      src="../img/sample/avatar/john-doe.jpg"
                      className="w-100 rounded-circle img-responsive dipro-card-user-thumbnails mt-3"
                      alt="..."
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <div className="d-flex flex-column dipro-user-header">
                      <div className="pt-2 f12">
                        <span className="f10-vw ft-smooth">John Doe</span>
                      </div>
                      <div className="pt-0">
                        <small>
                          <span className="ft-smooth badge badge-warning f6-vw">
                            Not verified
                          </span>
                        </small>
                      </div>
                      <div className="pt-2">
                        <div className="d-flex">
                          <div className="mr-auto">
                            <span className="f8 op-85">Join date</span>
                          </div>
                          <div>
                            <span className="f8 op-85">24/12/2018</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3">
                        <div className="d-flex">
                          <div className="mr-auto">
                            <span className="f-grey f8">Profile</span>
                          </div>
                          <div className="f-grey">
                            <span className="f-grey f8">50%</span>
                          </div>
                        </div>
                        <div className="progress dipro-profile-progress">
                          <div
                            className="progress-bar bg-green-btn"
                            role="progressbar"
                            style={{
                              width: "75%"
                            }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
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

export default CardUsername;
