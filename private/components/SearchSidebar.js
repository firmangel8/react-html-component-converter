import React from "react";

class SearchSidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <span className="f14-vw op-85">Search Property</span>
            <form method="POST" action="#" id="filter-1">
              <div className="form-group">
                <select className="form-control form-control-sm dipro-filtering">
                  <option value selected disabled>
                    Location
                  </option>
                  <option value={1}>Bali</option>
                  <option value={2}>Jakarta</option>
                  <option value={3}>Bogor</option>
                  <option value={4}>Bandung</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control form-control-sm dipro-filtering">
                  <option value selected disabled>
                    Available Lot
                  </option>
                  <option value="min-100"> Lower than 100 </option>
                  <option value="min-100-max-500">100-500</option>
                  <option value="min-500-max-1000">500-1000</option>
                  <option value="max-1000"> Upper than 1000 </option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control form-control-sm dipro-filtering">
                  <option value selected disabled>
                    Property Status
                  </option>
                  <option value="operated">Operated</option>
                  <option value="on_listing">On Listing</option>
                </select>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    placeholder="Operation date"
                    className="form-control form-control-sm border-right-0 dipro-input-round"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text dipro-input-round f8-vw">
                      <i className="fa fa-calendar" />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSidebar;
