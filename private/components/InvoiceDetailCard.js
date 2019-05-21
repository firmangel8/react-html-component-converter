import React from "react";

class InvoiceDetailCard extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex">
          <div className="mr-auto">
            <span className="f14-vw">My Invoice</span>
          </div>
          <div>
            <img
              src="../img/purchase/pdf.png"
              className="ml-2 img-responsive w-75"
            />
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="col-lg-3 dipro-border-right-white bg-dark py-2">
            <div className="container d-flex h-100">
              <div className="row justify-content-center align-self-center mx-auto">
                <figure className="figure my-auto">
                  <img
                    src="../img/dipro64.png"
                    className="figure-img img-fluid rounded img-responsive"
                    alt="A generic square placeholder image with rounded corners in a figure."
                  />
                  <figcaption className="figure-caption mx-auto">
                    www.dipro.id
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 bg-dark py-2">
            <div className="f-white">
              <span className="f12-vw">Address</span>
            </div>
            <p className="f-white dipro-line-height-1">
              <span className="f8-vw">
                Jl. Raya Gandul No. 34, Jakarta Selatan, Indonesia
              </span>
              <br />
              <span className="f8-vw">+62 021 6776 5576 54</span>
            </p>
          </div>
          <div className="col-lg-3 bg-primary mx-auto py-2">
            <div className="container d-flex h-100">
              <div className="row justify-content-center align-self-center mx-auto">
                <span className="f-bold f14-vw">INVOICE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3 px-0 py-0">
          <div className="card-body mx-2 my-2">
            <div className="d-flex pt-2">
              <div className="col-12">
                <span className="f8-vw">Invoice to</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-8">
                <span className="f-bold f12-vw">Mr. John Doe</span>
                <div className="d-flex">
                  <ul className="fa-ul dipro-line-height-1">
                    <li>
                      <span className="fa-li f8-vw">
                        <i className="fa fa-home" />
                      </span>
                      <span className="f8-vw">
                        Jl. Blok M No. 76, Jakarta Selatan
                        <br />
                        <span>Jakarta</span>
                      </span>
                    </li>
                    <li>
                      <span className="fa-li f8-vw">
                        <i className="fa fa-envelope" />
                      </span>
                      <span className="f8-vw">john.doe@email.com</span>
                    </li>
                    <li>
                      <span className="fa-li f8-vw">
                        <i className="fa fa-phone" />
                      </span>
                      <span className="f8-vw">+62 8178 9898 887 887</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <h6 className="f-bold">Invoice Number</h6>
                <h5 className="f-teal f-bold">9898967878</h5>
              </div>
            </div>
            <hr className="dipro-border-blue" />
            <div className="d-flex">
              <div className="px-2 col-2">
                <span className="f8-vw f-bold">Order No.</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw f-bold">Date</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw f-bold">Description</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw f-bold">Lot</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw f-bold">Price/Lot (IDR)</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw f-bold">Total pay (IDR)</span>
              </div>
            </div>
            <hr className="dipro-border-blue-dashed" />
            {}
            <div className="d-flex">
              <div className="px-2 col-2">
                <span className="f8-vw op-85">87878337</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw op-85">29/08/2019</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw op-85">
                  Basura Apartment Jakarta, Jl. Sudirman Street No. 1
                </span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw op-85">10.000</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw op-85">510.000</span>
              </div>
              <div className="px-2 col-2">
                <span className="f8-vw op-85 f-bold">510.000.000</span>
              </div>
            </div>
            {}
            <hr className="dipro-border-teal" />
            <div className="d-flex row">
              <div className="col-lg-8 col-12">
                <p className="f10-vw">Terms and Condition:</p>
                <ul className="f8-vw">
                  <li>Due Date 06/09/2019</li>
                  <li>Terms of Payment 100%</li>
                </ul>
                <p />
              </div>
              <div className="col-lg-4 col-12">
                <div className="d-flex bg-yellow-dark f12-vw f-bold">
                  <div className="mr-auto p-2">Total</div>
                  <div className="p-2">510.000.000</div>
                </div>
              </div>
            </div>
            <div className="d-flex row mt-1">
              <div className="col-lg-6 col-md-6 col-12 mb-1">
                <div className="card p-2 bg-grey">
                  <div className="card-body">
                    <span className="f12-vw f-bold">Payment Method</span>
                    <div className="d-flex f8-vw">
                      <div className="col-lg-3 col-md-4">Rek. No</div>
                      <div className="col-lg-9 col-md-8">
                        54546 545458 659554 5485
                      </div>
                    </div>
                    <div className="d-flex f8-vw">
                      <div className="col-lg-3 col-md-4">Bank</div>
                      <div className="col-lg-9 col-md-8">BNI 46</div>
                    </div>
                    <div className="d-flex f8-vw">
                      <div className="col-lg-3 col-md-4">Owner</div>
                      <div className="col-lg-9 col-md-8">DiPro</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 my-auto">
                <div className="d-flex flex-column f8-vw">
                  <div className="d-none d-md-block">
                    <div className="f-bold">Jakarta, 29/08/2019</div>
                    <div className="f-bold">PT. Properti Keluarga Bersama</div>
                  </div>
                  {}
                  <div className="d-sm-block d-md-none">
                    <div className="float-right">
                      <div className="f-bold">Jakarta, 29/08/2019</div>
                      <div className="f-bold">
                        PT. Properti Keluarga Bersama
                      </div>
                    </div>
                  </div>
                  {}
                </div>
              </div>
            </div>
            <hr className="dipro-border-teal" />
            <div className="d-flex">
              <p className="f8-vw">
                <span className="f-bold">Disclaimer : </span>
                <span className="op-85">
                  This invoice is generated by system and can be used for
                  transactions
                </span>
              </p>
            </div>
            <div className="card-footer p-0 m-0">
              <div className="d-flex">
                <div className="col-8 bg-blue h-100">
                  <div className="dipro-footer-invoice" />
                </div>
                <div className="col-4 bg-green-smooth h-100">
                  <div className="dipro-footer-invoice" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceDetailCard;
