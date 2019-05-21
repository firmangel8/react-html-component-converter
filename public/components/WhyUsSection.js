import React from "react";

class WhyUsSection extends React.Component {
  render() {
    return (
      <section className="part-fifth py-4 bg-blue">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-12">
              <div className="text-center f-white">
                <strong className="dipro-shadow ft-exo f24-vw">Why Us</strong>
              </div>
            </div>
          </div>
          <div className="row text-center placeholders my-3">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 placeholder">
              <figure className="figure">
                <img
                  src="img/brand-icons/easy.svg"
                  className="figure-img img-fluid rounded"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption className="figure-caption text-center">
                  <span className="f14-vw f-white">Easy</span>
                  <div className="f-white">
                    <span className="f9-vw">Fractional ownership concept</span>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 placeholder">
              <figure className="figure">
                <img
                  src="img/brand-icons/fast.svg"
                  className="figure-img img-fluid rounded"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption className="figure-caption text-center">
                  <span className="f14-vw f-white">Fast</span>
                  <div className="f-white">
                    <span className="f9-vw">Fast in transaction process</span>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 placeholder">
              <figure className="figure">
                <img
                  src="img/brand-icons/secure.svg"
                  className="figure-img img-fluid rounded"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption className="figure-caption text-center">
                  <span className="f14-vw f-white">Secure</span>
                  <div className="f-white">
                    <span className="f9-vw">Digital Signature Technology</span>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 placeholder">
              <figure className="figure">
                <img
                  src="img/brand-icons/liquid.svg"
                  className="figure-img img-fluid rounded"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption className="figure-caption text-center">
                  <span className="f14-vw f-white">Liquid</span>
                  <div className="f-white">
                    <span className="f9-vw">Buy and selling assets faster</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyUsSection;
