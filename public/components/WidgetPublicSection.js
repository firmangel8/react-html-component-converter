import React from "react";

class WidgetPublicSection extends React.Component {
  render() {
    return (
      <section className="part-second py-4">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="row dipro-info-box my-2">
                <div className="col-4 p-1 m-0 bg-aqua">
                  <div className="text-center">
                    <img
                      src="img/icons/crowdfunding.svg"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-8 my-auto py-1">
                  <div className="d-flex justify-content-center">
                    <div className="dipro-lable-vertical f-blue">
                      <strong>IDR</strong>
                    </div>
                    <span className="f18 f-blue">
                      <strong>1700</strong>
                    </span>
                    <span className="f8 f-blue dipro-subscript">Bill</span>
                  </div>
                  <div className="text-center">
                    <span className="f10 nowrap">Manage Fund</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="row dipro-info-box my-2">
                <div className="col-4 p-1 m-0 bg-yellow">
                  <div className="text-center">
                    <img src="img/icons/investor.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="col-8 my-auto py-1">
                  <div className="text-center">
                    <span className="f18 f-blue">
                      <strong>1222</strong>
                    </span>
                    <br />
                    <span className="f10 nowrap">Investor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="row dipro-info-box my-2">
                <div className="col-4 p-1 m-0 bg-pink">
                  <div className="text-center">
                    <img src="img/icons/location.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="col-8 my-auto py-1">
                  <div className="text-center">
                    <span className="f18 f-blue">
                      <strong>5</strong>
                    </span>
                    <br />
                    <span className="f10 nowrap">Location</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="row dipro-info-box my-2">
                <div className="col-4 p-1 m-0 bg-red">
                  <div className="text-center">
                    <img src="img/icons/aar.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="col-8 my-auto py-1">
                  <div className="d-flex justify-content-center">
                    <div className="dipro-lable-vertical f-blue">
                      <strong>IDR</strong>
                    </div>
                    <span className="f18 f-blue">
                      <strong>500</strong>
                    </span>
                    <span className="f8 f-blue dipro-subscript">Mill</span>
                  </div>
                  <div className="text-center">
                    <span className="f10 nowrap">Profit Shared</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="row dipro-info-box my-2">
                <div className="col-4 p-1 m-0 bg-purple">
                  <div className="text-center">
                    <img src="img/icons/property.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="col-8 my-auto py-1">
                  <div className="text-center">
                    <span className="f18 f-blue">
                      <strong>5</strong>
                    </span>
                    <br />
                    <span className="f10 nowrap">Property</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6">
              <div className="row dipro-info-box my-2">
                <div className="col-4 p-1 m-0 bg-magenta">
                  <div className="text-center">
                    <img src="img/icons/tbd.svg" className="img-fluid" />
                  </div>
                </div>
                <div className="col-8 my-auto py-1">
                  <div className="text-center">
                    <span className="f18 f-blue">
                      <strong>5.00%</strong>
                    </span>
                    <br />
                    <span className="f10 nowrap">Annual Profit</span>
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

export default WidgetPublicSection;
