import React from "react";

class CarouselDipro extends React.Component {
  render() {
    return (
      <div className="container-fluid main dipro-mt-65">
        <div className="row">
          <div
            id="carouselDipro"
            className="carousel slide"
            data-ride="carousel"
            style={{
              width: "100%"
            }}
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselDipro"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselDipro" data-slide-to={1} className />
              {}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-1 col-md-1" />
                  <div className="col-lg-5 col-md-5 col-12 my-auto mx-auto">
                    <img
                      className="img-responsive"
                      src="img/sample/info-left-1.png"
                      alt="Second slide"
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 col-12 my-auto mx-auto">
                    <div className="d-flex justify-content-center">
                      <div className="d-flex flex-column">
                        <p className="f-blue">
                          <span className="ft-exo f48-responsive d-block">
                            Invest with us
                          </span>
                          <span className="f20-responsive badge badge-primary d-inline-block text-left">
                            growth your money and be investor
                          </span>
                        </p>
                        <ul className="f14-responsive f-teal">
                          <li>Easy Property Investment</li>
                          <li>Up to 35%/year Profit </li>
                          <li>Property in many Location </li>
                        </ul>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-1" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-1 col-md-1" />
                  <div className="col-lg-5 col-md-5 col-12 my-auto mx-auto">
                    <img
                      className="img-responsive"
                      src="img/sample/info-left-2.png"
                      alt="Second slide"
                    />
                  </div>
                  <div className="col-lg-5 col-md-5 col-12 my-auto mx-auto">
                    <div className="d-flex justify-content-center">
                      <div className="d-flex flex-column">
                        <p className="f-blue">
                          <span className="ft-exo f48-responsive d-block">
                            Make your Investment
                          </span>
                          <span className="f20-responsive badge badge-primary d-inline-block text-left">
                            become a profesional investor
                          </span>
                        </p>
                        <ul className="f14-responsive f-teal">
                          <li>Start from low budget</li>
                          <li>No paper work and tax </li>
                          <li>Simple, fast and secure </li>
                        </ul>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-1" />
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselDipro"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselDipro"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselDipro;
