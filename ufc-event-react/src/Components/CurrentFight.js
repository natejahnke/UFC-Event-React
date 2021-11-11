import React from "react";

const CurrentFight = (props) => {
    const { fightersObj, fightID, currentFightID } = props;
    console.log(currentFightID);
    console.log(fightersObj.mainCard);
    const idMatch = fightersObj.mainCard.find(fighter => fighter.fightID === currentFightID);
    console.log(idMatch);
  return (
    
    <div className="event-header">
            <div className="profile-image-left red-gradient"><img className="profile-image"
              src={idMatch.fighters.fighter1info.img}
              alt="" /></div>
            <div className="event-info">
              <div className="event-number">UFC 268</div>

              <div className="event-names-column">
                <div className="event-fighter-name1">{idMatch.fighters.fighter1info.l_name}</div>
                <div className="versus">vs</div>
                <div className="event-fighter-name2">{idMatch.fighters.fighter2info.l_name}</div>
              </div>
              <div className="event-details">Sat, Nov 6 / 9:00 PM CDT<span className="event-location">Madison
                Square
                Garden, New York United
                States</span></div>
              <div className="fighter-name-left">Kamaru Usman</div>
              <div className="profile-stats">
                <div className="stats-box-left">
                  <div>15-2-0</div>
                  <div>170 LB</div>
                  <div>6'0"</div>
                  <div>76 in</div>
                  <div>Nigeria</div>
                </div>
                <div className="stats-labels">
                  <div>Record</div>
                  <div>Weight</div>
                  <div>Height</div>
                  <div>Reach</div>
                  <div>Country</div>
                </div>
                <div className="stats-box-right">
                  <div>15-2-0</div>
                  <div>170 LB</div>
                  <div>6'0"</div>
                  <div>76 in</div>
                  <div>Nigeria</div>
                </div>
              </div>
              <div className="fighter-name-right">Colby Covington</div>
            </div>
            <div className="profile-image-right red-gradient"><img className="profile-image"
              src={idMatch.fighters.fighter2info.img}
              alt="" /></div>
          </div>
    
    // <div className="current-fight-block">
    //   <h1>{`Fight ${currentFightID}`}</h1>
    // </div>
  );
};

export default CurrentFight;