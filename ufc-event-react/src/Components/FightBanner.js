import React from "react";

const FightBanner = (props) => {
    const { fightTime } = props;

    return (
        <div className="maincard-banner fight-time-banner">
            <p>{fightTime}</p>
        </div>
    );
}

export default FightBanner;