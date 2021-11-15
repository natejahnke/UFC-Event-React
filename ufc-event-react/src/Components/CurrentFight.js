import React from "react";

const CurrentFight = (props) => {
  const { currentFightID, fightsArray } = props;

  const fightObj = fightsArray.find(fight => fight.fightID === currentFightID);
  console.log(fightObj);

  return (

    <div className="event-header">
      <div className="profile-image-left red-gradient"><img className="profile-image"
        src={fightObj.fighters.fighter1info.img}
        alt="" /></div>
      <div className="event-info">
        {/* <div className="event-number">UFC 268</div> */}

        {/* <div className="event-names-column">
          <div className="event-fighter-name1">{fightersObj.mainCard[0].fighters.fighter1info.l_name}</div>
          <div className="versus">vs</div>
          <div className="event-fighter-name2">{fightersObj.mainCard[0].fighters.fighter2info.l_name}</div>
        </div> */}
        {/* <div className="event-details">Sat, Nov 6 / 9:00 PM CDT<span className="event-location">Madison
          Square
          Garden, New York United
          States</span></div> */}
        <div className="fighter-name-left-box">
          <div className="fighter-name-left-text">
          <h4 className="fighter-name-left">{fightObj.fighters.fighter1info.f_name} {fightObj.fighters.fighter1info.l_name}</h4>
          {/* <h4 className="fighter-name-left">{idMatch.fighters.fighter1info.l_name}</h4> */}
          </div>
        </div>
        <div className="profile-stats">
          <div className="stats-box-left">
            <div>{fightObj.fighters.fighter1info.record}</div>
            <div>{fightObj.fighters.fighter1info.age}</div>
            <div>{fightObj.fighters.fighter1info.weight} LB</div>
            <div>{fightObj.fighters.fighter1info.height}</div>
            <div>{fightObj.fighters.fighter1info.reach} in</div>
            <div>{fightObj.fighters.fighter1info.country}</div>
          </div>
          <div className="stats-labels">
            <div>Record</div>
            <div>Age</div>
            <div>Weight</div>
            <div>Height</div>
            <div>Reach</div>
            <div>Country</div>
          </div>
          <div className="stats-box-right">
            <div>{fightObj.fighters.fighter2info.record}</div>
            <div>{fightObj.fighters.fighter2info.age}</div>
            <div>{fightObj.fighters.fighter2info.weight} LB</div>
            <div>{fightObj.fighters.fighter2info.height}</div>
            <div>{fightObj.fighters.fighter2info.reach} in</div>
            <div>{fightObj.fighters.fighter2info.country}</div>
          </div>
        </div>
        <div className="fighter-name-right-box">
          <div className="fighter-name-right-text">
            <h4 className="fighter-name-right">{fightObj.fighters.fighter2info.f_name} {fightObj.fighters.fighter2info.l_name}</h4> 
            {/* <h4 className="fighter-name-right">{idMatch.fighters.fighter2info.l_name}</h4> */}
          </div>
        </div>
      </div>
      <div className="profile-image-right red-gradient"><img className="profile-image"
        src={fightObj.fighters.fighter2info.img}
        alt="" /></div>
    </div>
  );
};

export default CurrentFight;