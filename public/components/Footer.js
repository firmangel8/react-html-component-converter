import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="container-fluid dipro-footer">
        <div className="row px-1 px-xl-5 py-1">
          <div className="col-6">
            <div className="float-left">
              <div className="media">
                <img
                  className="mr-3"
                  src="img/dipro64.png"
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <p className="dipro-footer-copyright">
                    <span className="dipro-footer-copyright-company-name">
                      © 2018 DiPro
                    </span>
                    <br />
                    <small className="dipro-footer-copyright-company-name-sub d-none d-md-block">
                      Digital Property
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="float-right">
              <img
                src="img/logo-ojk.png"
                className="dipro-footer-brand-right"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
