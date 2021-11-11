import React, { useState, useEffect } from 'react';
import './App.css';
import FightButton from "./Components/FightButton";
import CurrentFight from './Components/CurrentFight';
// import fighters from "../src/fighters.json";
import fighters from "./fighters";

const fightData = {
  mainCard: [
    {
      fightID: 1,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Kamaru",
          l_name: "Usman",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/68441%252Fprofile-galery%252Fprofile-picture%252FUSMAN_KAMARU_BELT_04-24.png?VersionId=null&h=a30e7339&itok=Nbspzpxy",
          height: 6,
          weight: 170,
          age: 32,
          record: 19-1-0,
          country: "Nigeria"
        },
        fighter2info: {
          id: 1,
          f_name: "Colby",
          l_name: "Covington",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/ufc-fighter-container/67658/profile-galery/profile-picture/COVINGTON_COLBY_08-03.png?VersionId=null&h=a30e7339&itok=Y_dsHvyE",
          height: 123,
          weight: 23,
          age: 32
        }
      }
    },
    {
      fightID: 2,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "RoseRose",
          l_name: "Namajunas",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/69149%252Fprofile-galery%252Fprofile-picture%252FNAMAJUNAS_ROSE_BELTCOMP.png?VersionId=null&h=a30e7339&itok=yb9UPX0V",
          height: 123,
          weight: 23,
          age: 32
        },
        fighter2info: {
          id: 1,
          f_name: "Weili",
          l_name: "Zhang",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2018-10/ZHANG_WEILI.png?VersionId=W3yOxHGSB.8rw7yJf4BgsWBLiB5hVHuc&itok=4kxIsWLh",
          height: 123,
          weight: 23,
          age: 32
        }
      }
    },
    {
      fightID: 3,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Frankie",
          l_name: "Edgar",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2020-09/EDGAR_FRANKIE_07-27.png?VersionId=5BEAi0xvp5VYpH3Fl.rDiUWDfa_AtJjc&h=a30e7339&itok=s1pcmTlS",
          height: 123,
          weight: 23,
          age: 32
        },
        fighter2info: {
          id: 4,
          f_name: "Marlon",
          l_name: "Vera",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-06/68723%252Fprofile-galery%252Fprofile-picture%252FVERA_MARLON_06_19.png?VersionId=null&h=a30e7339&itok=XIRfSh02",
          height: 123,
          weight: 23,
          age: 32
        }
      }
    },
    {
      fightID: 4,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Shane",
          l_name: "Burgos",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69249%252Fprofile-galery%252Fprofile-picture%252FBURGOS_SHANE_05-15.png?VersionId=null&h=a30e7339&itok=IO2kMHTb",
          height: 123,
          weight: 23,
          age: 32
        },
        fighter2info: {
          id: 1,
          f_name: "Billy",
          l_name: "Quarantillo",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/71505%252Fprofile-galery%252Fprofile-picture%252FQUARANTILLO_BILLY_07-17.png?h=a30e7339&itok=fJCuUNPz",
          height: 123,
          weight: 23,
          age: 32
        }
      }
    },
    {
      fightID: 5,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Justin",
          l_name: "Gaethje",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2018-10/GAETHJE_JUSTIN.png?VersionId=klcIQXFsq.Vx8kxhoOmWKSJX7gNzXzFI&itok=A5_BjCnO",
          height: 123,
          weight: 23,
          age: 32
        },
        fighter2info: {
          id: 1,
          f_name: "Michael",
          l_name: "Chandler",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69907%252Fprofile-galery%252Fprofile-picture%252FCHANDLER_MICHAEL_05-15.png?VersionId=null&h=a30e7339&itok=TnrOOEF8",
          height: 123,
          weight: 23,
          age: 32
        }
      }
    }
  ],
  prelim: [],
  earlyPrelim: []
};

const App = () => {
 
 const [currentFightID, setCurrentFightID] = useState(1);

 useEffect(() => {
   console.log("currentFightID: " + currentFightID);

 }, [currentFightID]);

 const { mainCard } = fightData;

 const renderMainCardFights = () =>
  mainCard.map((fightObj) => {
    const { fightID, fighters } = fightObj;

    return (
        <FightButton
          fightID={fightID}
          fightersObj={fighters}
          setCurrentFightID={setCurrentFightID}
        />
    );
  });

  const renderCurrentFight = () => {
    
      const { fightID, fighters } = fightData;
      

      return (
        <CurrentFight
          fightID={fightID}
          currentFightID={currentFightID}
          fightersObj={fightData}
        />
      )};
    
  
  return (
      <>
        <h1>UFC 268</h1>
        {renderCurrentFight()}
        {/* <CurrentFight currentFightID={currentFightID} /> */}
        <div className="maincard fight-grid">
        {renderMainCardFights()}
        </div>
        
      </>
    );
  };

export default App;
