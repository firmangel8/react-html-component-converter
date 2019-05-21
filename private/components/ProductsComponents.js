import React from "react";

class ProductsComponents extends React.Component {
  render() {
    return (
      <div>
        <div id="group-products-1">
          <div className="row">
            <div className="col-12">
              <div id="products-1" className="row dipro-deck dual-side pb-2">
                <div className="col-md-4 col-12 up">
                  <div className="d-flex flex-column dipro-deck-container-left">
                    <div className="py-1">
                      <img
                        src="../img/sample/sample-apartment-1.jpeg"
                        alt="image"
                        className="w-100 img-responsive rounded"
                      />
                    </div>
                    <div className="d-none d-md-block mb-auto">
                      <div className="d-flex flex-column">
                        <div className="pt-1 ml-2 d-md-block d-lg-none">
                          <div className="d-flex flex-row">
                            <div className="mr-auto">
                              <i className="fa fa-map-marker f10-vw" />
                              <span className="f-grey f10-vw nowrap">
                                Jakarta
                              </span>
                            </div>
                            <div>
                              <span className="badge badge-warning f10-vw nowrap ft-kaushan">
                                <i className="fa fa-star" /> AAA+
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-1 ml-2 d-md-block d-lg-none">
                          <i className="material-icons f-grey f12">group</i>
                          <span className="f-grey f10-vw nowrap">
                            120 Investor
                          </span>
                        </div>
                        <div className="pt-1 ml-2 d-md-block d-lg-none">
                          <i className="fa fa-line-chart f-grey f10-vw" />
                          <span className="f-grey f10-vw nowrap">
                            Approx. Profit 30%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-none d-lg-block">
                      <div className="row">
                        <div className="col-lg-4 col-12">
                          <span className="badge badge-warning f8-vw nowrap ft-kaushan">
                            <i className="fa fa-star" /> AAA+
                          </span>
                        </div>
                        <div className="col-lg-8 col-12 text-right">
                          <span className="badge badge-success f-white f8-vw nowrap">
                            <i className="fa fa-line-chart f10-vw" /> Approx.
                            Profit 30%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="py-1 d-none d-md-block">
                      <button
                        className="align-self-end btn btn-sm btn-block btn-primary t-detail"
                        data-toggle="collapse"
                        href="#info-detail-1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="info-detail-1"
                        onclick="return expandDetail(this);"
                      >
                        <div className="my-auto">
                          <span className="f12-vw">Detail</span>
                          <span className="fa fa-arrow-circle-down f8-vw" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-12 up">
                  <div className="card h-100 dipro-card">
                    <div className="d-flex flex-column card-body dipro-container-body">
                      <div className="d-flex justify-content-between">
                        <div className="col-6 p-0">
                          <div className="pt-1 mr-4 nowrap">
                            <a href="#">
                              <span className="f16-vw cls-blue ft-kaushan">
                                Basura City
                              </span>
                            </a>
                            <span className="badge f-white bg-green-smooth ft-exo f10-vw">
                              New
                            </span>
                          </div>
                        </div>
                        <div className="px-1 my-auto d-md-block d-lg-none">
                          <i className="material-icons f-blue f10-vw">
                            access_time
                          </i>
                          <span className="f-blue f12-vw">10 Days Left</span>
                        </div>
                        <div className="col-6 p-0 d-none d-lg-block">
                          <div className="d-flex justify-content-end mt-1">
                            <span className="px-3 badge bg-green-smooth f-white ft-kaushan dipro-shadow f10-vw">
                              <i className="fa fa-clock-o" /> 10 Days Left
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="mr-3 d-none d-md-block">
                          <span className="f-grey f10-vw nowrap">
                            <i className="fa fa-map-marker" /> Jakarta
                          </span>
                        </div>
                        <div className="d-none d-md-block">
                          <span className="f-grey f10-vw nowrap">
                            <i className="fa fa-users" /> 120 Investor
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-column mt-2">
                        <div className="col-8 px-0 pt-1">
                          <div className="progress progress-grey dipro-progress-medium">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{
                                width: "80%"
                              }}
                            >
                              Funds Collected 80%
                            </div>
                          </div>
                        </div>
                      </div>
                      {}
                      <div className="d-flex flex-row mb-auto d-sm-block d-md-none">
                        <div className="pt-1 text-center d-xs-block d-sm-none">
                          <i className="fa fa-map-marker f-grey f10-vw" />
                          <span className="f-grey f10-vw nowrap">Jakarta</span>
                        </div>
                        <div className="pt-1 text-center ml-2 d-xs-block d-sm-none">
                          <i className="fa fa-users f-grey f10-vw" />
                          <span className="f-grey f10-vw nowrap">
                            120 Investor
                          </span>
                        </div>
                        <div className="pt-1 text-center ml-2 d-xs-block d-sm-none">
                          <i className="fa fa-star f-grey f10-vw" />
                          <span className="badge badge-warning f-white f10-vw nowrap ft-kaushan">
                            {" "}
                            AAA+
                          </span>
                        </div>
                        <div className="pt-1 text-center ml-2 d-xs-block d-sm-none">
                          <i className="fa fa-suitcase f-grey f10-vw" />
                          <span className="badge badge-success f-white f10-vw nowrap">
                            Approx. Profit 30%
                          </span>
                        </div>
                      </div>
                      {}
                      <div className="d-flex row">
                        <div className="col-12">
                          <div className="d-flex justify-content-between pt-2">
                            <div className="bg-purple op-85 flex-fill text-center col-6 dipro-top-left-radius dipro-bottom-left-radius dipro-fluid">
                              <span className="f-white f8-vw">
                                Total On Sale
                              </span>
                              <div className="dipro-flex-content">
                                <div className="d-flex justify-content-between">
                                  <div className="mx-auto col-7 dipro-clear-lr dipro-separator-dotted">
                                    <span className="f-grey f10-vw">
                                      2600 Lot
                                    </span>
                                  </div>
                                  <div className="mx-auto col-5 dipro-clear-lr">
                                    <span className="f-grey f10-vw">
                                      18 unit
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                              <span className="f-white f8-vw">
                                Available Lot
                              </span>
                              <div className="dipro-flex-content">
                                <span className="f-grey f10-vw">1200</span>
                              </div>
                            </div>
                            <div className="bg-pink op-85 flex-fill text-center col-3 dipro-top-right-radius dipro-fluid">
                              <span className="f-white f8-vw">Lot Price</span>
                              <div className="dipro-flex-content dipro-border-close">
                                <div className="dipro-price">
                                  <span className="f-grey f10-vw">
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
                                    <span className="f-grey f10-vw">
                                      9000 Lot
                                    </span>
                                  </div>
                                  <div className="mx-auto col-5 dipro-clear-lr">
                                    <span className="f-grey f10-vw">
                                      90 unit
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span className="f-white f8-vw">
                                Total Operated
                              </span>
                            </div>
                            <div className="bg-green-smooth op-85 flex-fill text-center col-3 dipro-fluid">
                              <div className="dipro-flex-content-sec">
                                <span className="f-grey f10-vw">15%</span>
                              </div>
                              <span className="f-white f8-vw">Rental</span>
                            </div>
                            <div className="bg-pink op-85 flex-fill text-center col-3 dipro-bottom-right-radius dipro-fluid">
                              <div className="dipro-flex-content-sec dipro-border-close">
                                <div className="dipro-price">
                                  <span className="f-grey f10-vw">
                                    550
                                    <em>.000</em>
                                  </span>
                                </div>
                              </div>
                              <span className="f-white f8-vw">
                                Initial Price
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mt-1 d-sm-block d-md-none mb-2">
                          <button
                            className="btn btn-sm btn-block btn-primary t-detail"
                            data-toggle="collapse"
                            href="#info-detail-1"
                            role="button"
                            aria-expanded="false"
                            aria-controls="info-detail-1"
                            onclick="return expandDetail(this);"
                          >
                            <div className="my-auto">
                              <span className="f12-vw">Detail</span>
                              <span className="fa fa-arrow-circle-down f8-vw" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="dipro-deck-detail collapse"
                  id="info-detail-1"
                  data-parent="#group-products-1"
                >
                  <div className="row container-fluid">
                    <div className="col-12">
                      <ul
                        className="nav nav-tabs dipro-tabs-size"
                        role="tablist"
                      >
                        <li className="nav-item f12-vw">
                          <a
                            className="nav-link active"
                            href="#overview-1"
                            role="tab"
                            data-toggle="tab"
                          >
                            Overview
                          </a>
                        </li>
                        <li className="nav-item f12-vw">
                          <a
                            className="nav-link"
                            href="#unitinfo-1"
                            role="tab"
                            data-toggle="tab"
                          >
                            Unit
                          </a>
                        </li>
                        <li className="nav-item f12-vw">
                          <a
                            className="nav-link"
                            href="#legality-1"
                            role="tab"
                            data-toggle="tab"
                          >
                            Legality
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="overview-1"
                        >
                          <div className="row">
                            <div className="col-lg-6 col-12 pl-0">
                              <div className="row dipro-card-auto px-2">
                                <div className="card dipro-card-detail w-100">
                                  <div className="card-body dirpro-card-side-info">
                                    <div className="dipro-home-container mt-3">
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Total Lot
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              150.000 Lot
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12 bg-strip">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Total Circulate Lot
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              95.000 Lot
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Guanrantor Unit
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              344 Unit
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <hr className="dipro-home-border" />
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Holder
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw badge bg-green-smooth f-white">
                                              PT. Property Keluarga Bersama
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Minimum Investment
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              1 Lot
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12 bg-strip">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Profit Share Period
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              Quarterly
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Next Profit Share Date
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              23/12/2020
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <hr className="dipro-home-border" />
                                    <div className="dipro-home-container">
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12">
                                          <div className="float-left">
                                            <span className="f8-vw f-blue">
                                              <strong>
                                                Transcation Charge
                                              </strong>
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              <strong>Prospectus</strong>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12 bg-strip">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Purchase
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              Free
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-12">
                                          <div className="float-left">
                                            <span className="f8-vw f-grey">
                                              Sell
                                            </span>
                                          </div>
                                          <div className="float-right">
                                            <span className="f8-vw f-grey">
                                              Max 1%
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <hr className="dipro-home-border" />
                                    <div className="dipro-home-container">
                                      <span className="cls-blue f10-vw">
                                        <strong>Rev. Projection</strong>
                                      </span>
                                      <div className="mt-2 d-flex flex-row d-none d-lg-flex">
                                        <div className="mr-auto my-auto">
                                          <ul
                                            className="timeline m-0"
                                            id="timeline"
                                          >
                                            <li className="li first-qt">
                                              <div className="timestamp text-center">
                                                <span className="date f8-vw my-auto">
                                                  3 month
                                                  <span />
                                                </span>
                                              </div>
                                              <div className="status">
                                                <span className="f12-vw">
                                                  4.50%
                                                </span>
                                              </div>
                                            </li>
                                            <li className="li second-qt">
                                              <div className="timestamp text-center">
                                                <span className="date f8-vw my-auto">
                                                  6 month
                                                  <span />
                                                </span>
                                              </div>
                                              <div className="status">
                                                <span className="f12-vw">
                                                  4.85%
                                                </span>
                                              </div>
                                            </li>
                                            <li className="li third-qt">
                                              <div className="timestamp text-center">
                                                <span className="date f8-vw my-auto">
                                                  9 Month
                                                </span>
                                              </div>
                                              <div className="status">
                                                <span className="f12-vw">
                                                  5.02%
                                                </span>
                                              </div>
                                            </li>
                                            <li className="li third-qt">
                                              <div className="timestamp text-center">
                                                <span className="date f8-vw my-auto">
                                                  1 year
                                                  <span />
                                                </span>
                                              </div>
                                              <div className="status">
                                                <span className="f12-vw">
                                                  5.02%
                                                </span>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-12">
                              <div id="spline-single-bo-1" />
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane"
                          id="unitinfo-1"
                        >
                          <div className="row dipro-card-auto pt-2">
                            <div className="col-lg-5 col-12 px-0 mb-3">
                              {}
                              <div className="d-flex justify-content-between pt-2">
                                <div className="bg-primary op-85 flex-fill text-center col-1 dipro-top-left-radius dipro-fluid p-1">
                                  <span className="f-white f8-vw">#</span>
                                </div>
                                <div className="bg-primary op-85 flex-fill text-center col-4 dipro-fluid p-1">
                                  <span className="f-white f8-vw">
                                    No. Unit
                                  </span>
                                </div>
                                <div className="bg-primary op-85 flex-fill text-center col-5 dipro-fluid p-1">
                                  <span className="f-white f8-vw">Tower</span>
                                </div>
                                <div className="bg-primary op-85 flex-fill text-center col-2 dipro-fluid dipro-top-right-radius dipro-fluid p-1">
                                  <span className="f-white f8-vw">Floor</span>
                                </div>
                              </div>
                              {}
                              {}
                              <div
                                style={{
                                  height: "100%"
                                }}
                                className="h-100"
                              >
                                <div className="dipro-unit-content">
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between border-bottom p-1">
                                    <div className="op-85 flex-fill text-center col-1 dipro-fluid">
                                      <span className="f8-vw">1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-4 dipro-fluid">
                                      <span className="f8-vw">10C No. 1</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-5 dipro-fluid">
                                      <span className="f8-vw">Tower 3</span>
                                    </div>
                                    <div className="op-85 flex-fill text-center col-2 dipro-fluid">
                                      <span className="f8-vw">10</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {}
                            </div>
                            <div className="col-lg-7 col-12">
                              <div className="dipro-home-container d-none d-lg-block">
                                <div className="d-flex row dipro-border-bottom-unit py-1">
                                  <div className="col-3">
                                    <strong>
                                      <span className="f8-vw f-blue">
                                        Facility
                                      </span>
                                    </strong>
                                  </div>
                                  <div className="col-9">
                                    <p className="my-1 f8-vw">
                                      Cinema XXI, Carefour Modern Market, Day
                                      Care Center, Indomaret, Alfamrt
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex row dipro-border-bottom-unit py-1">
                                  <div className="col-3">
                                    <strong>
                                      <span className="f8-vw f-blue">
                                        Access
                                      </span>
                                    </strong>
                                  </div>
                                  <div className="col-9">
                                    <p className="my-1 f8-vw">
                                      5 Minutes from Gandul Tol Gate
                                    </p>
                                    <p className="my-1 f8-vw">
                                      10 Minutes from stasiun Gandul
                                    </p>
                                    <p className="my-1 f8-vw">
                                      24 Hours Public Transportatio
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex row dipro-border-bottom-unit py-1">
                                  <div className="col-3">
                                    <strong>
                                      <span className="f8-vw f-blue">
                                        Recreation
                                      </span>
                                    </strong>
                                  </div>
                                  <div className="col-9">
                                    <p className="my-1 f8-vw">
                                      Function Hall, Children Playground,
                                      Thematic Garden
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex row dipro-border-bottom-unit py-1">
                                  <div className="col-3">
                                    <strong>
                                      <span className="f8-vw f-blue">
                                        Public Amenities
                                      </span>
                                    </strong>
                                  </div>
                                  <div className="col-9">
                                    <p className="my-1 f8-vw">
                                      ATM Center, Mushola, Laundry
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex row dipro-border-bottom-unit py-1">
                                  <div className="col-3">
                                    <strong>
                                      <span className="f8-vw f-blue">
                                        Neighborhood
                                      </span>
                                    </strong>
                                  </div>
                                  <div className="col-9">
                                    <p className="my-1 f8-vw">
                                      School (BPK Penabur, UI, Atmajaya)
                                    </p>
                                    <p className="my-1 f8-vw">
                                      Hospital (RS. Fatmawati, RS. Darmais)
                                    </p>
                                    <p className="my-1 f8-vw">
                                      Location (Central Business on Jakarta
                                      Selatan)
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane fade"
                          id="legality-1"
                        >
                          <div className="row dipro-card-auto px-2 py-1">
                            <div className="col-lg-7 col-12 px-0">
                              <div className="py-7 mt-3">
                                <div className="d-flex border-bottom bg-strip">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      Izin Prinsip
                                    </span>
                                  </div>
                                  <div className>
                                    <span className="f8-vw f-grey">
                                      222/I/711.534
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">KRK</span>
                                  </div>
                                  <div className>
                                    <span className="f8-vw f-grey">
                                      0523/GSB/JS/CL/V/2013
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom bg-strip">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      Persetujuan TKPB Bawah
                                    </span>
                                  </div>
                                  <div>
                                    <span className="f8-vw f-grey">
                                      S8/TABG-SG/IV/2015
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      Persetujuan TKPB Atas
                                    </span>
                                  </div>
                                  <div>
                                    <span className="f8-vw f-grey">
                                      24/TABG-SG/II/2015
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom bg-strip">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      ANDAL Kepolisian
                                    </span>
                                  </div>
                                  <div>
                                    <span className="f8-vw f-grey">
                                      B/1923/VI/2015 Datro
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      Rekomendasi Lalin
                                    </span>
                                  </div>
                                  <div>
                                    <span className="f8-vw f-grey">
                                      308 I/-I.811.22
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom bg-strip">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      Izin Pendahuluan Pondasi
                                    </span>
                                  </div>
                                  <div>
                                    <span className="f8-vw f-grey">
                                      10/8/2.3I/I.785.51/2015
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      Izin Pendahuluan Struktur
                                    </span>
                                  </div>
                                  <div>
                                    <span className="f8-vw f-grey">
                                      4/8.3/3I/-I.785.51/2016
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex border-bottom bg-strip">
                                  <div className="mr-auto">
                                    <span className="f8-vw f-grey">
                                      Izin Mendirikan Bangunan
                                    </span>
                                  </div>
                                  <div>
                                    <span className="f8-vw f-grey">
                                      4/8.3/3I/-I.785.51/2016
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5 col-12">
                              <div className="py-7 mt-3">
                                <div id="googleMap" className="dipro-map" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dipro-home-container">
                          <div className="float-right mb-3 mt-3">
                            <button
                              className="btn-sm btn-primary dipro-button-buy"
                              onclick="window.location.href = '../purchase';"
                            >
                              BUY
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
        </div>
      </div>
    );
  }
}

export default ProductsComponents;
