import React from "react";

class MenuShortcuts extends React.Component {
  render() {
    return (
      <div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card dipro-menu-card-warning">
              <div className="card-body">
                <div className="d-flex">
                  <div className="col-lg-2 col-12 d-none d-lg-block">
                    <div className="mt-3">
                      <span className="badge badge-warning f-white">
                        <i className="fa fa-hand-o-up fa-2x" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-10 col-12">
                    <div className="mt-3">
                      <ol className="numbered">
                        <li className="border-bottom">
                          <a href="../" className="no-decoration">
                            <span className="f8-vw">Home</span>
                          </a>
                        </li>
                        <li className="border-bottom">
                          <a href="../home/" className="no-decoration">
                            <span className="f8-vw">Market Place</span>
                          </a>
                        </li>
                        <li className="border-bottom">
                          <a href="../dashboard/">
                            <span className="f8-vw">Dashoard</span>
                          </a>
                        </li>
                        <li className="border-bottom">
                          <span className="f8-vw">My Assets</span>
                        </li>
                        <li className="border-bottom">
                          <span className="f8-vw">
                            <a
                              href="../invoice-list/"
                              className="no-decoration"
                            >
                              Invoice
                            </a>
                          </span>
                        </li>
                        <li>
                          <span className="f8-vw">Wishlist</span>
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

export default MenuShortcuts;
