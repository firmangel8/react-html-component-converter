import React from "react";

class DepositConfirmationCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <div className="col-12 text-center">
                <span className="f8-vw f-grey">
                  Complete the form below to confirm your deposit. Please fill
                  this form to confirm your transaction.
                  <br />
                  Please fill out the information accurately and truthfully.
                </span>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="col-12 text-center">
                <div className="w-100 bg-primary p-1">
                  <span className="f-white f12-vw f-bold">
                    DEPOSIT CONFIRMATION
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column mt-3">
              <form id="deposit-form" method="POST">
                <div className="form-group row">
                  <label
                    htmlFor="depositUsing"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Bank
                  </label>
                  <div className="col-6 px-0">
                    <select
                      id="depositUsing"
                      name="depositUsing"
                      className="form-control form-control-sm"
                    >
                      <option value="BCA">Bank Central Asia - BCA</option>
                      <option value="BNI">Bank Nasional Indonesia - BNI</option>
                      <option value="BRI">Bank Rakyat Indonesia BRI</option>
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
                  <div className="col-6 px-0">
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
                    Your Bank Account Number
                  </label>
                  <div className="col-6 px-0">
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
                    htmlFor="transferAmount"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Transfer Amount
                  </label>
                  <div className="col-6 px-0">
                    <input
                      type="text"
                      name="transferAmount"
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
                  <div className="col-6 px-0">
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
                <div className="form-group row">
                  <label
                    htmlFor="transferDate"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Transfer Date
                  </label>
                  <div className="col-6 px-0">
                    <input
                      type="text"
                      name="transferDate"
                      className="form-control form-control-sm"
                      id="transferDate"
                      placeholder="yyyy-mm-dd"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="transferRemark"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Transfer Remark (if any)
                  </label>
                  <div className="col-6 px-0">
                    <input
                      type="text"
                      name="transferRemark"
                      className="form-control form-control-sm"
                      id="transferRemark"
                      placeholder
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="addiitionalNote"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Additional Note (optional)
                  </label>
                  <div className="col-6 px-0">
                    <input
                      type="text"
                      name="addiitionalNote"
                      className="form-control form-control-sm"
                      id="addiitionalNote"
                      placeholder
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="transferReceipt"
                    className="col-4 col-form-label col-form-label-sm text-right"
                  >
                    Transfer Receipt
                  </label>
                  <div className="col-6 px-0">
                    <input
                      type="file"
                      name="transferReceipt"
                      className="form-control form-control-sm f10"
                      id="transferReceipt"
                      placeholder
                    />
                    <small
                      id="passwordHelpBlock"
                      className="form-text text-muted"
                    >
                      File type in .jpg, gif, png, pdf. Max file size in 3 MB.
                    </small>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn bg-green-smooth f-white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DepositConfirmationCard;
