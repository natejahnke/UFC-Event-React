import React from "react";

const FightButton = (props) => {
  const { fightID, fightersObj, setCurrentFightID } = props;

  const handleClick = () => {
    setCurrentFightID(fightID);
  };

  return (

    <div className="fight-container">
      <button className="fight-container" type="button" onClick={handleClick}>
        <div className="content">
          <div className="parent">
            <div className="content-overlay"></div>
            <img src={fightersObj.fighter1info.img}
              alt="" className="over-img-left small-img" />
            <img src={fightersObj.fighter2info.img}
              alt="" className="over-img-right small-img" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">
                {`${fightersObj.fighter1info.f_name} ${fightersObj.fighter1info.l_name}`}
              </h3>
              <div className="enhanced-hr">
                <span>VS</span>
              </div>
              <h3 className="content-title">
                {`${fightersObj.fighter2info.f_name} ${fightersObj.fighter2info.l_name}`}
              </h3>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default FightButton;