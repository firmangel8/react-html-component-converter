import React from "react";

class MessagesNotifications extends React.Component {
  render() {
    return (
      <div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card dipro-menu-card-notif">
              <div className="card-header">
                <span className="f14-vw">
                  <i className="fa fa-bell f-blue mr-1" />
                  Messages
                </span>
                <div className="dipro-line-height-1 text-justify">
                  <span className="text-muted f10-vw">
                    <small>
                      You have 22 new messages and 16 waiting in draft folder
                    </small>
                  </span>
                </div>
              </div>
              <div className="card-body dipro-menu-card-notif-body">
                {}
                <div className="d-flex justify-content-between border-bottom">
                  <div className="col-12 py-1">
                    <div className="d-flex flex-row mb-2">
                      <div className="mr-auto">
                        <strong>
                          <span className="f10-vw">
                            <i className="fa fa-credit-card-alt mr-1" /> Deposit
                          </span>
                        </strong>
                        <span className="d-md-block d-lg-none f8-vw f-green op-85 dipro-line-height-1">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                      <div className="d-none d-lg-block">
                        <span className="f6-vw f-green op-85">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                    </div>
                    <p className="f8-vw op-85 text-justify mb-0">
                      Your Deposito has been received by Dipro and typesetting
                      industry.
                    </p>
                  </div>
                </div>
                {}
                {}
                <div className="d-flex justify-content-between border-bottom">
                  <div className="col-12 py-2">
                    <div className="d-flex flex-row mb-2">
                      <div className="mr-auto">
                        <strong>
                          <span className="f10-vw">
                            <i className="fa fa-check-circle mr-1" /> Buy Assets
                          </span>
                        </strong>
                        <span className="d-md-block d-lg-none f8-vw f-green op-85 dipro-line-height-1">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                      <div className="d-none d-lg-block">
                        <span className="f6-vw f-green op-85">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                    </div>
                    <p className="f8-vw op-85 text-justify mb-0">
                      Congratulation! Buy 1000 Lots in Market Places Success.
                    </p>
                  </div>
                </div>
                {}
                {}
                <div className="d-flex justify-content-between border-bottom">
                  <div className="col-12 py-2">
                    <div className="d-flex flex-row mb-2">
                      <div className="mr-auto">
                        <strong>
                          <span className="f10-vw">
                            <i className="fa fa-hand-o-right mr-1" /> New
                            Listing
                          </span>
                        </strong>
                        <span className="d-md-block d-lg-none f8-vw f-green op-85 dipro-line-height-1">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                      <div className="d-none d-lg-block">
                        <span className="f6-vw f-green op-85">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                    </div>
                    <p className="f8-vw op-85 text-justify mb-0">
                      Basura Apartment now available to buy and typesetting
                      industry.
                    </p>
                  </div>
                </div>
                {}
                {}
                <div className="d-flex justify-content-between border-bottom">
                  <div className="col-12 py-2">
                    <div className="d-flex flex-row mb-2">
                      <div className="mr-auto">
                        <strong>
                          <span className="f10-vw">
                            <i className="fa fa-calendar mr-1" /> Share Date
                          </span>
                        </strong>
                        <span className="d-md-block d-lg-none f8-vw f-green op-85 dipro-line-height-1">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                      <div className="d-none d-lg-block">
                        <span className="f6-vw f-green op-85">
                          <i>12/06/2014 05:00 PM</i>
                        </span>
                      </div>
                    </div>
                    <p className="f8-vw op-85 text-justify mb-0">
                      You got profit from your property 10% from total lots
                    </p>
                  </div>
                </div>
                {}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesNotifications;
