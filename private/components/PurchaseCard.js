import React from "react";

class PurchaseCard extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-row">
          <div className="mr-auto">
            <strong>My Purchase Order</strong>
          </div>
          <div>
            <span className="f-teal f-bold">No. 9898967878</span>
          </div>
        </div>
        <div className="card p-1 mt-2">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 dipro-border-right-dashed py-2">
                <div className="d-flex flex-column">
                  <div className="px-1">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Date</div>
                      <div className="col-8">
                        <span className="f8-vw">29/08/2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Property</div>
                      <div className="col-8">
                        <span className="f8-vw">Basura Aparment</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Location</div>
                      <div className="col-8">
                        <span className="f8-vw">
                          Jakarta, Sudirman Street No. 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 py-2">
                <div className="d-flex flex-column">
                  <div className="px-1">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Total Lot</div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control form-control-sm f8-vw f8-vw text-right"
                          autofocus
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Price/LOT (IDR)</div>
                      <div className="col-8 text-right">
                        <span className="f8-vw">530.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">
                        <span className="f-bold">Total (IDR)</span>
                      </div>
                      <div className="col-8 text-right">
                        <span className="f8-vw f-bold">13.000.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="dipro-border-bottom-dashed" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 dipro-border-right-dashed">
                <div className="d-flex flex-column">
                  <div className="px-1">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Full name*</div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control form-control-sm f8-vw f8-vw"
                          defaultValue="John Doe"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">No. Identity*</div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control form-control-sm f8-vw"
                          defaultValue="56555 54545 65656565 3262"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4">Billing Address*</div>
                      <div className="col-8">
                        <div>
                          <input
                            type="text"
                            className="form-control form-control-sm f8-vw"
                            defaultValue="Sudirman Street"
                            readOnly
                          />
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            className="form-control form-control-sm f8-vw"
                            defaultValue="Bali"
                            readOnly
                          />
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            className="form-control form-control-sm f8-vw"
                            defaultValue="Denpasar"
                            readOnly
                          />
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            className="form-control form-control-sm f8-vw"
                            defaultValue={81113}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="d-flex flex-column">
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Contact No*</div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control form-control-sm f8-vw"
                          defaultValue="08115 5552 6569"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-1 mt-2">
                    <div className="d-flex f8-vw">
                      <div className="col-4 my-auto">Email*</div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control form-control-sm f8-vw"
                          defaultValue="john.doe@email.com"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="dipro-border-bottom-dashed" />
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="px-1 mt-1">
                  <div className="d-flex f8-vw">
                    <div className="col-4 my-auto">Payment Method*</div>
                    <div className="col-8">
                      <select className="form-control form-control-sm f8-vw">
                        <option disabled selected>
                          --Please choose your payment method here--
                        </option>
                        <option value="bank_transfer">Bank Transfer</option>
                        <option value="deposit">Deposit</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="d-flex f8-vw">
                    <div className="col-4 my-auto">Account Number*</div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-1 mt-1">
                  <div className="d-flex f8-vw">
                    <div className="col-4 my-auto">Bank*</div>
                    <div className="col-8">
                      <select className="form-control form-control-sm f8-vw">
                        <option disabled selected>
                          --Please choose bank here--
                        </option>
                        <option value="BRI">Bank Rakyar Indonesia (BRI)</option>
                        <option value="BNI">
                          Bank Nasional Indonesia (BNI)
                        </option>
                        <option value="BCA">Bank Central Asia (BCA)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-1 mt-1">
                  <div className="d-flex f8-vw">
                    <div className="col-4 my-auto">Owner*</div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <div className="px-1 mt-2 mb-2">
                  <div className="d-flex row f8-vw">
                    <div className="col-lg-4 col-md-4 col-6 my-auto text-center">
                      <span className="f8-vw">
                        <i className="fa fa-camera" /> Selfie Picture
                      </span>
                      <div className="mx-auto">
                        <img
                          src="../img/purchase/selfie.png"
                          className="img-responsive img-fluid mx-auto"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6 my-auto text-center d-none d-md-block">
                      <span className="f8-vw">
                        <i className="fa fa-camera" /> Identity Card
                      </span>
                      <div>
                        <img
                          src="../img/purchase/identity.png"
                          className="img-responsive img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6 my-auto text-center">
                      <span className="f8-vw">
                        <i className="fa fa-camera" /> Selfie with Identity Card
                      </span>
                      <div className="mx-auto">
                        <img
                          src="../img/purchase/selfie_identity.png"
                          className="img-responsive img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex row">
                    <div className="col-12 d-sm-block d-md-none text-center">
                      <span className="f8-vw">
                        <i className="fa fa-camera" /> Identity Card
                      </span>
                      <div>
                        <img
                          src="../img/purchase/identity.png"
                          className="img-responsive img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex row">
                    <div className="col-12 my-3 text-center">
                      <button
                        className="btn bg-green-smooth f-white"
                        onclick="window.location.href = '../invoice';"
                      >
                        Submit
                      </button>
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

export default PurchaseCard;
