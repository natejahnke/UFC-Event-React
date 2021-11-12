import React from "react";

const FightBanner = (props) => {
    const { fightTime, timeCard } = props;

    return (
        <div className={`${timeCard}-banner fight-time-banner`}>
            <p>{fightTime}</p>
        </div>
    );
}

export default FightBanner;