import React from "react";

class Breadcrumb extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <ul className="breadcrumb">
            <li>
              <a href="#">Market Place</a>
            </li>
            <li>
              <a href="#" className="bread-active">
                Property
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Breadcrumb;
