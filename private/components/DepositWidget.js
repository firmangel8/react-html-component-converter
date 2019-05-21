import React from "react";

class DepositWidget extends React.Component {
  render() {
    return (
      <div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card dipro-menu-card-blue">
              <div className="card-body">
                <div className="d-flex">
                  <div className="col-lg-2 col-12 d-none d-lg-block">
                    <div className="mt-3">
                      <span className="badge badge-primary f-white">
                        <i className="fa fa-money fa-2x" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-10 col-12 ml-1">
                    <div className="d-flex flex-column mt-3">
                      <div className="f8-vw op-85">Deposit Balance</div>
                      <div className="f12-vw f-bold">IDR 10 Billions</div>
                    </div>
                    <div className="row mb-3 px-1">
                      <div className="col-lg-5 col-12 p-1">
                        <button
                          className="btn btn-primary btn-sm f8-vw w-100"
                          onclick="window.location.href = '../deposit/';"
                        >
                          Deposit
                        </button>
                      </div>
                      <div className="col-lg-5 col-12 p-1">
                        <button
                          className="btn bg-green-smooth f-white btn-sm f8-vw w-100"
                          onclick="window.location.href = '../withdraw/'"
                        >
                          Withdraw
                        </button>
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

export default DepositWidget;
