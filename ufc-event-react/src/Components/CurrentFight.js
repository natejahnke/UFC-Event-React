import React from "react";

const CurrentFight = (props) => {
  const { fightersObj, currentFightID, eventSection } = props;
  // console.log(currentFightID);
  // console.log(fightersObj.mainCard);
  let idMatch;
  if (currentFightID <= 5) {
    idMatch = fightersObj.mainCard.find(fighter => fighter.fightID === currentFightID);
  } else if (currentFightID > 5 && currentFightID <= 10) {
    idMatch = fightersObj.prelim.find(fighter => fighter.fightID === currentFightID);
  } else if (currentFightID > 10) {
    idMatch = fightersObj.earlyPrelim.find(fighter => fighter.fightID === currentFightID);
  };
  // console.log(currentFightID);
  // console.log(fightersObj.hasOwnProperty(1));
  // console.log(fightersObj);
  // const fighterEntry = fightersObj[eventSection];
  // console.log(fighterEntry);
  // const idMatch = fightersObj.mainCard.find(fighter => fighter.fightID === currentFightID);
  console.log(idMatch);
  // console.log(Object.values(idMatch));
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
        <div className="fighter-name-left">{idMatch.fighters.fighter1info.f_name} {idMatch.fighters.fighter1info.l_name}</div>
        <div className="profile-stats">
          <div className="stats-box-left">
            <div>{idMatch.fighters.fighter1info.record}</div>
            <div>{idMatch.fighters.fighter1info.age}</div>
            <div>{idMatch.fighters.fighter1info.weight} LB</div>
            <div>{idMatch.fighters.fighter1info.height}</div>
            <div>{idMatch.fighters.fighter1info.reach} in</div>
            <div>{idMatch.fighters.fighter1info.country}</div>
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
            <div>{idMatch.fighters.fighter2info.record}</div>
            <div>{idMatch.fighters.fighter2info.age}</div>
            <div>{idMatch.fighters.fighter2info.weight} LB</div>
            <div>{idMatch.fighters.fighter2info.height}</div>
            <div>{idMatch.fighters.fighter2info.reach} in</div>
            <div>{idMatch.fighters.fighter2info.country}</div>
          </div>
        </div>
        <div className="fighter-name-right">{idMatch.fighters.fighter2info.f_name} {idMatch.fighters.fighter2info.l_name}</div>
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