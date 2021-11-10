import React from "react";

const Fight = props => {
    return (
  <div className="fight-container">
    <div className="content">
      <div className="parent">
        <div className="content-overlay"></div>
        <img src={props.fighter1_image}
          alt="" className="over-img-left small-img" />
        <img src={props.fighter2_image}
          alt="" className="over-img-right small-img" />
        <div className="content-details fadeIn-bottom">
          <h3 className="content-title">{props.fighter1_fname} {props.fighter1_lname}</h3>
          <div className="enhanced-hr">
            <span>VS</span>
          </div>
          <h3 className="content-title">{props.fighter2_fname} {props.fighter2_lname}</h3>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Fight;