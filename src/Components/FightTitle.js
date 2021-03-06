import React from "react";

const FightTitle = (props) => {

    return (
        <div className="fight-title">
            <h1 className="fight-title-number">UFC 268</h1>
            <div className="fight-title-names">
                <p className="fight-title-name1">USMAN</p>
                <p className="fight-title-versus">vs</p>
                <p className="fight-title-name2">COVINGTON</p>
            </div>
            <div className="fight-title-details">
                <div>Sat, Nov 6 / 9:00 PM CDT</div>
                <div className="fight-title-details-venue">Madison Square Garden</div>
                <div className="fight-title-details-location">New York, United States</div>
            </div>
        </div>
    );
};

export default FightTitle;