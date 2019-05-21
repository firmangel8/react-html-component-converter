import React from "react";

class PropertySaleSection extends React.Component {
  render() {
    return (
      <section className="part-third py-4" id="property-on-sale">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <strong className="dipro-shadow ft-exo f24-vw op-85">
                  Property on Sale
                </strong>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="card mt-2">
                <a
                  href="#property-on-sale"
                  style={{
                    textDecoration: "none"
                  }}
                  onclick="detailProducts(1)"
                >
                  <div className="dipro-compare-card">
                    <img
                      src="img/sample/operated/3-1.jpg"
                      alt="Placeholder image"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="dipro-compare-container">
                        <div className="row px-1">
                          <div className="col-6">
                            <h4 className="card-title dipro-compare-title ft-kaushan dipro-shadow-smooth nowrap">
                              Padina
                            </h4>
                          </div>
                          <div className="col-6">
                            <div className="float-right my-2">
                              <span
                                className=" badge badge-info ml-2 ft-kaushan f10-vw"
                                data-toggle="tooltip"
                                title="Investment Grade"
                                data-placement="bottom"
                              >
                                AAA+
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-beetween align-content-center">
                          <div className="px-1 col-8 my-auto">
                            <div className="dipro-progress progress position-relative">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "60%"
                                }}
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                              <small className="justify-content-center d-flex position-absolute w-100 f-white dipro-progress-label f8-vw">
                                60% complete
                              </small>
                            </div>
                          </div>
                          <div className="px-1 col-4 my-auto">
                            <div className="float-right op-85">
                              <i className="material-icons f-blue f8-vw">
                                access_time
                              </i>
                              <span className="f-blue f8-vw">10 Days Left</span>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                          <div className="px-1 col-6">
                            <div className="float-left">
                              <i className="material-icons f-grey f10">place</i>
                              <span className="f-grey f10">Jakarta</span>
                            </div>
                          </div>
                          <div className="px-1 col-6">
                            <div className="float-right">
                              <span className="f-blue f10">
                                Approx. Profit 30%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between pt-2">
                          <div className="bg-purple op-85 flex-fill text-center col-6 dipro-top-left-radius dipro-bottom-left-radius dipro-fluid">
                            <span className="f-white f8-vw">Total On Sale</span>
                            <div className="dipro-flex-content">
                              <div className="d-flex justify-content-between">
                                <div className="mx-auto col-7 dipro-clear-lr dipro-separator-dotted">
                                  <span className="f-grey f12-vw">
                                    2600 Lot
                                  </span>
                                </div>
                                <div className="mx-auto col-5 dipro-clear-lr">
                                  <span className="f-grey f12-vw">18 unit</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                            <span className="f-white f8-vw">Available Lot</span>
                            <div className="dipro-flex-content">
                              <span className="f-grey f12-vw">1200</span>
                            </div>
                          </div>
                          <div className="bg-pink op-85 flex-fill text-center col-3 dipro-top-right-radius dipro-fluid">
                            <span className="f-white f8-vw">Lot Price</span>
                            <div className="dipro-flex-content dipro-border-close">
                              <div className="dipro-price">
                                <span className="f-grey f12-vw">
                                  510
                                  <em>.000</em>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between pb-2 mt-1 dipro-top-close">
                          <div className="bg-purple op-85 flex-fill text-center col-6 dipro-top-left-radius dipro-bottom-left-radius dipro-fluid">
                            <div className="dipro-flex-content-sec">
                              <div className="d-flex justify-content-between">
                                <div className="mx-auto col-7 dipro-clear-lr dipro-separator-dotted">
                                  <span className="f-grey f12-vw">
                                    9000 Lot
                                  </span>
                                </div>
                                <div className="mx-auto col-5 dipro-clear-lr">
                                  <span className="f-grey f12-vw">90 unit</span>
                                </div>
                              </div>
                            </div>
                            <span className="f-white f8-vw">
                              Total Operated
                            </span>
                          </div>
                          <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                            <div className="dipro-flex-content-sec">
                              <span className="f-grey f12-vw">10%</span>
                            </div>
                            <span className="f-white f8-vw">Rental</span>
                          </div>
                          <div className="bg-pink op-85 flex-fill text-center col-3 dipro-bottom-right-radius dipro-fluid">
                            <div className="dipro-flex-content-sec dipro-border-close">
                              <div className="dipro-price">
                                <span className="f-grey f12-vw">
                                  500
                                  <em>.000</em>
                                </span>
                              </div>
                            </div>
                            <span className="f-white f8-vw">Initial Price</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="card mt-2">
                <div className="dipro-compare-card">
                  <img
                    src="img/sample/operated/1-1.jpg"
                    alt="Placeholder image"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="dipro-compare-container">
                      <div className="row px-1">
                        <div className="col-6">
                          <h4 className="card-title dipro-compare-title ft-kaushan dipro-shadow-smooth nowrap">
                            Basura City III
                          </h4>
                        </div>
                        <div className="col-6">
                          <div className="float-right my-2">
                            <span className=" badge badge-info ml-2 ft-kaushan f10-vw">
                              AAA+
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-beetween align-content-center">
                        <div className="px-1 col-8 my-auto">
                          <div className="dipro-progress progress position-relative">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: "80%"
                              }}
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <small className="justify-content-center d-flex position-absolute w-100 f-white dipro-progress-label f8-vw">
                              80% complete
                            </small>
                          </div>
                        </div>
                        <div className="px-1 col-4 my-auto">
                          <div className="float-right op-85">
                            <i className="material-icons f-blue f8-vw">
                              access_time
                            </i>
                            <span className="f-blue f8-vw">20 Days Left</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <div className="px-1 col-6">
                          <div className="float-left">
                            <i className="material-icons f-grey f10">place</i>
                            <span className="f-grey f10">Jakarta</span>
                          </div>
                        </div>
                        <div className="px-1 col-6">
                          <div className="float-right">
                            <span className="f-blue f10">
                              Approx. Profit 25%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pt-2">
                        <div className="bg-purple op-85 flex-fill text-center col-6 dipro-top-left-radius dipro-bottom-left-radius dipro-fluid">
                          <span className="f-white f8-vw">Total On Sale</span>
                          <div className="dipro-flex-content">
                            <div className="d-flex justify-content-between">
                              <div className="mx-auto col-7 dipro-clear-lr dipro-separator-dotted">
                                <span className="f-grey f12-vw">3000 Lot</span>
                              </div>
                              <div className="mx-auto col-5 dipro-clear-lr">
                                <span className="f-grey f12-vw">30 unit</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                          <span className="f-white f8-vw">Available Lot</span>
                          <div className="dipro-flex-content">
                            <span className="f-grey f12-vw">2200</span>
                          </div>
                        </div>
                        <div className="bg-pink op-85 flex-fill text-center col-3 dipro-top-right-radius dipro-fluid">
                          <span className="f-white f8-vw">Lot Price</span>
                          <div className="dipro-flex-content dipro-border-close">
                            <div className="dipro-price">
                              <span className="f-grey f12-vw">
                                600
                                <em>.000</em>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pb-2 mt-1 dipro-top-close">
                        <div className="bg-purple op-85 flex-fill text-center col-6 dipro-top-left-radius dipro-bottom-left-radius dipro-fluid">
                          <div className="dipro-flex-content-sec">
                            <div className="d-flex justify-content-between">
                              <div className="mx-auto col-7 dipro-clear-lr dipro-separator-dotted">
                                <span className="f-grey f12-vw">9000 Lot</span>
                              </div>
                              <div className="mx-auto col-5 dipro-clear-lr">
                                <span className="f-grey f12-vw">90 unit</span>
                              </div>
                            </div>
                          </div>
                          <span className="f-white f8-vw">Total Operated</span>
                        </div>
                        <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                          <div className="dipro-flex-content-sec">
                            <span className="f-grey f12-vw">15%</span>
                          </div>
                          <span className="f-white f8-vw">Rental</span>
                        </div>
                        <div className="bg-pink op-85 flex-fill text-center col-3 dipro-bottom-right-radius dipro-fluid">
                          <div className="dipro-flex-content-sec dipro-border-close">
                            <div className="dipro-price">
                              <span className="f-grey f12-vw">
                                550
                                <em>.000</em>
                              </span>
                            </div>
                          </div>
                          <span className="f-white f8-vw">Initial Price</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="card mt-2">
                <div className="dipro-compare-card">
                  <img
                    src="img/sample/operated/11.jpg"
                    alt="Placeholder image"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="dipro-compare-container">
                      <div className="row px-1">
                        <div className="col-6">
                          <h4 className="card-title dipro-compare-title ft-kaushan dipro-shadow-smooth nowrap">
                            Kaffi  
                            <span className="badge badge-primary ft-exo f10-vw">
                              New
                            </span>
                          </h4>
                        </div>
                        <div className="col-6">
                          <div className="float-right my-2">
                            <span className=" badge badge-info ml-2 ft-kaushan f10-vw">
                              AAA+
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-beetween align-content-center">
                        <div className="px-1 col-8 my-auto">
                          <div className="dipro-progress progress position-relative">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: "75%"
                              }}
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <small className="justify-content-center d-flex position-absolute w-100 f-white dipro-progress-label f8-vw">
                              75% complete
                            </small>
                          </div>
                        </div>
                        <div className="px-1 col-4 my-auto">
                          <div className="float-right op-85">
                            <i className="material-icons f-blue f8-vw">
                              access_time
                            </i>
                            <span className="f-blue f8-vw">30 Days Left</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <div className="px-1 col-6">
                          <div className="float-left">
                            <i className="material-icons f-grey f10">place</i>
                            <span className="f-grey f10">Jakarta</span>
                          </div>
                        </div>
                        <div className="px-1 col-6">
                          <div className="float-right">
                            <span className="f-blue f10">
                              Approx. Profit 15%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pt-2">
                        <div className="bg-purple op-85 flex-fill text-center col-6 dipro-top-left-radius dipro-bottom-left-radius dipro-fluid">
                          <span className="f-white f8-vw">Total On Sale</span>
                          <div className="dipro-flex-content">
                            <div className="d-flex justify-content-between">
                              <div className="mx-auto col-7 dipro-clear-lr dipro-separator-dotted">
                                <span className="f-grey f12-vw">4000 Lot</span>
                              </div>
                              <div className="mx-auto col-5 dipro-clear-lr">
                                <span className="f-grey f12-vw">40 unit</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                          <span className="f-white f8-vw">Available Lot</span>
                          <div className="dipro-flex-content">
                            <span className="f-grey f12-vw">859</span>
                          </div>
                        </div>
                        <div className="bg-pink op-85 flex-fill text-center col-3 dipro-top-right-radius dipro-fluid">
                          <span className="f-white f8-vw">Lot Price</span>
                          <div className="dipro-flex-content dipro-border-close">
                            <div className="dipro-price">
                              <span className="f-grey f12-vw">
                                500
                                <em>.000</em>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pb-2 mt-1 dipro-top-close">
                        <div className="bg-purple op-85 flex-fill text-center col-6 dipro-top-left-radius dipro-bottom-left-radius dipro-fluid">
                          <div className="dipro-flex-content-sec">
                            <div className="d-flex justify-content-between">
                              <div className="mx-auto col-7 dipro-clear-lr dipro-separator-dotted">
                                <span className="f-grey f12-vw">-</span>
                              </div>
                              <div className="mx-auto col-5 dipro-clear-lr">
                                <span className="f-grey f12-vw">-</span>
                              </div>
                            </div>
                          </div>
                          <span className="f-white f8-vw">Total Operated</span>
                        </div>
                        <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                          <div className="dipro-flex-content-sec">
                            <span className="f-grey f12-vw">-</span>
                          </div>
                          <span className="f-white f8-vw">Rental</span>
                        </div>
                        <div className="bg-pink op-85 flex-fill text-center col-3 dipro-bottom-right-radius dipro-fluid">
                          <div className="dipro-flex-content-sec dipro-border-close">
                            <div className="dipro-price">
                              <span className="f-grey f12-vw"> - </span>
                            </div>
                          </div>
                          <span className="f-white f8-vw">Initial Price</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PropertySaleSection;
