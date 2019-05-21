import React from "react";

class InvoiceList extends React.Component {
  render() {
    return (
      <div>
        <div className="card pb-2">
          <div className="card-header bg-primary">
            <span className="f12-vw f-white f-bold">Invoice List</span>
          </div>
          <div className="card-body">
            <div className="row justify-content-between px-2 py-1">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="f8-vw">Property</div>
                <div className>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="property-search"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="f8-vw">Invoice Date</div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-append">
                      <span className="input-group-text f8-vw">
                        <i className="fa fa-calendar" />
                      </span>
                    </div>
                    <input
                      id="invoice-date-filter"
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="f8-vw">Due Date</div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-append">
                      <span className="input-group-text f8-vw">
                        <i className="fa fa-calendar" />
                      </span>
                    </div>
                    <input
                      id="invoice-duedate-filter"
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div className="f8-vw">Payment Status</div>
                <div className="form-group">
                  <select className="form-control form-control-sm f8-vw">
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>
              </div>
            </div>
            {}
            <div className="d-flex justify-content-between">
              <div className="bg-green-smooth op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                <span className="f-white f8-vw f-bold">Inovice No.</span>
              </div>
              <div className="bg-green-smooth op-85 col-1 dipro-fluid p-1 text-center d-none d-md-block">
                <span className="f-white f8-vw f-bold">Date</span>
              </div>
              <div className="bg-green-smooth op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                <span className="f-white f8-vw f-bold">Property</span>
              </div>
              <div className="bg-green-smooth op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                <span className="f-white f8-vw f-bold">Total Value</span>
              </div>
              <div className="bg-green-smooth op-85 col-2 dipro-fluid p-1 text-center d-none d-md-block">
                <span className="f-white f8-vw f-bold">Due Date</span>
              </div>
              <div className="bg-green-smooth op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                <span className="f-white f8-vw f-bold">Status</span>
              </div>
              <div className="bg-green-smooth op-85 col-1 dipro-fluid p-1 text-center d-none d-md-block">
                <span className="f-white f8-vw f-bold">Action</span>
              </div>
            </div>
            {}
            {}
            <div id="invoice-content">
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514001"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514001
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514001">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514002"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514002
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse pb-2 mb-2" id="inv-20190514002">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514003"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514003
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514003">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514004"
                      aria-expanded="false"
                      aria-controls="inv-20190514004"
                    >
                      <i className="fa fa-angle-down" /> 20190514004
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse pb-2 mb-2" id="inv-20190514004">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514005"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514005
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514005">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514006"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514006
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-dark">
                    <span className="f8-vw f-white">Expired</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse pb-2 mb-2" id="inv-20190514006">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514007"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514007
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514007">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514008"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514008
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-warning">
                    <span className="f8-vw f-white">Pending</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse pb-2 mb-2" id="inv-20190514008">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514009"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514009
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-warning">
                    <span className="f8-vw f-white">Pending</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514009">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514010"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514010
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse pb-2 mb-2" id="inv-20190514010">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514011"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514011
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514011">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514012"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514012
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-red">
                    <span className="f8-vw f-white">Cancel</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse pb-2 mb-2" id="inv-20190514012">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514013"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514013
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514013">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514014"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514014
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse pb-2 mb-2" id="inv-20190514014">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="d-flex justify-content-between px-1 bg-strip">
                <div className="op-85 op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw nowrap">
                    <a
                      data-toggle="collapse"
                      href="#inv-20190514015"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-angle-down" /> 20190514015
                    </a>
                  </span>
                </div>
                <div className="op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">31/12/2020</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">Kalibata</span>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <span className="f8-vw">10.000.000</span>
                </div>
                <div className="op-85 col-2 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <span className="f8-vw">06/10/2021</span>
                  </div>
                </div>
                <div className="op-85 col-lg-2 col-md-2 col-3 dipro-fluid p-1 text-center">
                  <div className="bg-success">
                    <span className="f8-vw f-white">Paid</span>
                  </div>
                </div>
                <div className="op-85 op-85 col-1 dipro-fluid p-1 text-center d-none d-md-flex">
                  <div className="mx-auto">
                    <a href="../invoice/">
                      <span className="f8-vw">Detail</span>
                    </a>
                  </div>
                </div>
              </div>
              {}
              <div className="collapse bg-grey pb-2 mb-2" id="inv-20190514015">
                <div className="d-flex flex-column px-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Invoice Date</div>
                      <div className="col-6 p-0">: 31/12/2020</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Due Date</div>
                      <div className="col-6 p-0">: 06/10/2021</div>
                    </div>
                    <hr className="d-sm-block d-md-none" />
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Lot</div>
                      <div className="col-6 p-0">: 500 Lot</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Price/Lot</div>
                      <div className="col-6 p-0">: IDR 510.000</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Payment Date</div>
                      <div className="col-6 p-0">: 03/01/2020</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Account No.</div>
                      <div className="col-6 p-0 nowrap">: 45454546656565</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Bank</div>
                      <div className="col-6 p-0">: BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw op-85 f-grey">
                      <div className="col-6 p-0">Name</div>
                      <div className="col-6 p-0">: Dipro</div>
                    </div>
                    <div className="d-sm-block d-md-none d-flex f8-vw op-85 f-grey">
                      <div className="col-12 p-0">
                        <div className="btn btn-block btn-primary btn-sm f8-vw">
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
            </div>
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceList;
