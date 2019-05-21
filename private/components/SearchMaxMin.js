import React from "react";

class SearchMaxMin extends React.Component {
  render() {
    return (
      <div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card dipro-filter-black-box">
              <div className="card-body">
                <span className="f14">Value/lot</span>
                <form method="POST" action="#" id="filter-2" className="mt-3">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        placeholder="Minimum"
                        className="form-control form-control-sm border-right-0 dipro-input-round"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text dipro-input-round">
                          <i className="fa fa-angle-down" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        placeholder="Maximum"
                        className="form-control form-control-sm border-right-0 dipro-input-round"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text dipro-input-round">
                          <i className="fa fa-angle-down" />
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchMaxMin;
