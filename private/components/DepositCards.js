import React from "react";

class DepositCards extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <div className="col-12 text-center">
                <span className="f8-vw f-grey">
                  Enter the deposit amount and choose the source of
                  funding/payment method that is most convenient for you
                </span>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="col-12 text-center">
                <div className="w-100 bg-primary p-1">
                  <span className="f-white f12-vw f-bold">DEPOSIT</span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column mt-3">
              <form id="deposit-form" method="POST">
                <div className="form-group row">
                  <label
                    htmlFor="depositAmount"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Deposit Amount
                  </label>
                  <div className="col-7 px-0">
                    <input
                      type="text"
                      name="depositAmount"
                      className="form-control form-control-sm"
                      id="depositAmount"
                      placeholder="10.000.000"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="depositUsing"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Deposit Using
                  </label>
                  <div className="col-7 px-0">
                    <select
                      id="depositUsing"
                      name="depositUsing"
                      className="form-control form-control-sm"
                    >
                      <option value="BCA">Bank Central Asia</option>
                      <option value="BNI">Bank Nasional Indonesia</option>
                      <option value="BRI">Bank Rakyat Indonesia</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="transferMethod"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Transfer Method
                  </label>
                  <div className="col-7 px-0">
                    <select
                      id="transferMethod"
                      name="transferMethod"
                      className="form-control form-control-sm"
                    >
                      <option value="BCA-M">BCA Mobile</option>
                      <option value="BNI-M">BNI Mobile</option>
                      <option value="BRI-M">BRI Mobile</option>
                      <option value="ATM">Via ATM</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="rekeningNo"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Rek. No
                  </label>
                  <div className="col-7 px-0">
                    <input
                      type="text"
                      name="rekeningNo"
                      className="form-control form-control-sm"
                      id="rekeningNo"
                      placeholder="89898 898967 7878"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="currency"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Currency
                  </label>
                  <div className="col-7 px-0">
                    <select
                      id="currency"
                      name="currency"
                      className="form-control form-control-sm"
                    >
                      <option value="IDR">IDR</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="d-flex mt-2">
              <div className="col-12 text-center">
                <div className="w-100 bg-green-smooth p-1">
                  <span className="f-white f12-vw f-bold">INSTRUCTION</span>
                </div>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="col-12 text-center">
                <span className="f8-vw f-red">
                  <strong>
                    Be sure to transfer only from a bank account that is under
                    your name. Otherwise the deposit will be rejected!
                  </strong>
                </span>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 col-12 my-auto">
                <div className="d-flex flex-column px-3">
                  <div className="d-flex f8-vw">
                    <div className="col-12 py-1 px-0">
                      Please transfer to following bank account:
                    </div>
                  </div>
                  <div className="d-flex f8-vw">
                    <div className="col-4 p-0">Bank Code</div>
                    <div className="col-8 p-0">: 016</div>
                  </div>
                  <div className="d-flex f8-vw">
                    <div className="col-4 p-0">Bank Name</div>
                    <div className="col-8 p-0">: BNI 46</div>
                  </div>
                  <div className="d-flex f8-vw">
                    <div className="col-4 p-0">Account Number</div>
                    <div className="col-8 p-0">: 7828704530143674</div>
                  </div>
                  <div className="d-flex f8-vw">
                    <div className="col-4 p-0">Account Name</div>
                    <div className="col-8 p-0">
                      : PT.Property Keluarga Bersama
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pl-2 my-auto">
                <div className="border mx-3 my-3 p-1 dipro-deposit-instruction-dashed">
                  <ul className="instruction">
                    <li className="f8-vw">
                      Transfer to correct Account number from ATM/Online
                      network. Funds will be depostited into your account in 1-3
                      hours.
                    </li>
                    <li className="f8-vw">
                      Fee of IDR 3.000 will be deducted from transfer amount.
                    </li>
                    <li className="f8-vw">
                      Your bank might charge some fee depends on yout Bank
                      policy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end my-3">
              <div className="mr-3">
                <button className="btn btn-lg bg-green-smooth f-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DepositCards;
