import React, { useState, useEffect } from 'react';
import './App.css';
import FightButton from "./Components/FightButton";
import CurrentFight from './Components/CurrentFight';
import FightBanner from "./Components/FightBanner";
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
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        },
        fighter2info: {
          id: 1,
          f_name: "Colby",
          l_name: "Covington",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/ufc-fighter-container/67658/profile-galery/profile-picture/COVINGTON_COLBY_08-03.png?VersionId=null&h=a30e7339&itok=Y_dsHvyE",
          height: 511,
          weight: 170,
          reach: 72,
          age: 33,
          record: 16 - 3 - 0,
          country: "USA"
        }
      }
    },
    {
      fightID: 2,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Rose",
          l_name: "Namajunas",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/69149%252Fprofile-galery%252Fprofile-picture%252FNAMAJUNAS_ROSE_BELTCOMP.png?VersionId=null&h=a30e7339&itok=yb9UPX0V",
          height: 65,
          weight: 115,
          reach: 65,
          age: 29,
          record: 11 - 4 - 0,
          country: "USA"
        },
        fighter2info: {
          id: 1,
          f_name: "Weili",
          l_name: "Zhang",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2018-10/ZHANG_WEILI.png?VersionId=W3yOxHGSB.8rw7yJf4BgsWBLiB5hVHuc&itok=4kxIsWLh",
          height: 64,
          weight: 115,
          reach: 63,
          age: 32,
          record: 21 - 2 - 0,
          country: "China"
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
          height: 6,
          weight: 135,
          reach: 76,
          age: 32,
          record: 23 - 9 - 1,
          country: "USA"
        },
        fighter2info: {
          id: 4,
          f_name: "Marlon",
          l_name: "Vera",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-06/68723%252Fprofile-galery%252Fprofile-picture%252FVERA_MARLON_06_19.png?VersionId=null&h=a30e7339&itok=XIRfSh02",
          height: 68,
          weight: 135,
          reach: 70.5,
          age: 28,
          record: 17 - 7 - 1,
          country: "Ecuador"
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
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        },
        fighter2info: {
          id: 1,
          f_name: "Billy",
          l_name: "Quarantillo",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/71505%252Fprofile-galery%252Fprofile-picture%252FQUARANTILLO_BILLY_07-17.png?h=a30e7339&itok=fJCuUNPz",
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
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
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        },
        fighter2info: {
          id: 1,
          f_name: "Michael",
          l_name: "Chandler",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69907%252Fprofile-galery%252Fprofile-picture%252FCHANDLER_MICHAEL_05-15.png?VersionId=null&h=a30e7339&itok=TnrOOEF8",
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        }
      }
    }
  ],
  prelim: [
    {
      fightID: 6,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Alex",
          l_name: "Pereira",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/68441%252Fprofile-galery%252Fprofile-picture%252FUSMAN_KAMARU_BELT_04-24.png?VersionId=null&h=a30e7339&itok=Nbspzpxy",
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        },
        fighter2info: {
          id: 1,
          f_name: "Andreas",
          l_name: "Michailidis",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/67317%252Fprofile-galery%252Fprofile-picture%252FMICHAILIDIS_ANDREAS_05-01.png?VersionId=null&h=a30e7339&itok=svZC5Z0z",
          height: 511,
          weight: 170,
          reach: 72,
          age: 33,
          record: 16 - 3 - 0,
          country: "USA"
        }
      }
    },
    {
      fightID: 7,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Al",
          l_name: "Iaquinta",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/ufc-fighter-container/67178/profile-galery/profile-picture/IAQUINTA_AL.png?VersionId=lPmWchnfXz9uhaQr22VJ8ulOiRGXjh9h&itok=c7Nl-pce",
          height: 65,
          weight: 115,
          reach: 65,
          age: 29,
          record: 11 - 4 - 0,
          country: "USA"
        },
        fighter2info: {
          id: 1,
          f_name: "Bobby",
          l_name: "Green",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-08/67476%252Fprofile-galery%252Fprofile-picture%252FGREEN_BOBBY_08-07.png?h=a30e7339&itok=rpKS4G-I",
          height: 64,
          weight: 115,
          reach: 63,
          age: 32,
          record: 21 - 2 - 0,
          country: "China"
        }
      }
    },
    {
      fightID: 8,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Phillip",
          l_name: "Hawes",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69012%252Fprofile-galery%252Fprofile-picture%252FHAWES_PHIL_05-08.png?VersionId=null&h=a30e7339&itok=DurqUY-l",
          height: 6,
          weight: 135,
          reach: 76,
          age: 32,
          record: 23 - 9 - 1,
          country: "USA"
        },
        fighter2info: {
          id: 4,
          f_name: "Chris",
          l_name: "Curtis",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/fighter_images/Chris_Curtis/CURTIS_CHRIS.png?VersionId=HU6VjRF9wFQT9zEYhOZS70FGIx5kMMvS&itok=dvOJcUwn",
          height: 68,
          weight: 135,
          reach: 70.5,
          age: 28,
          record: 17 - 7 - 1,
          country: "Ecuador"
        }
      }
    },
    {
      fightID: 9,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Edmen",
          l_name: "Shahbazyan",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69727%252Fprofile-galery%252Fprofile-picture%252FSHAHBAZYAN_EDMEN_05-22.png?VersionId=null&h=a30e7339&itok=ESS94afV",
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        },
        fighter2info: {
          id: 1,
          f_name: "Nassourdine",
          l_name: "Imavov",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/71679%252Fprofile-galery%252Fprofile-picture%252FIMAVOV_NASSOURDINE_07-24.png?h=a30e7339&itok=VO1-z9zd",
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        }
      }
    },
    {
      fightID: 10,
      fighters: {
        fighter1info: {
          id: 1,
          f_name: "Ian",
          l_name: "Garry",
          img: "https://www.ufc.com/themes/custom/ufc/assets/img/no-profile-image.png",
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        },
        fighter2info: {
          id: 1,
          f_name: "Jordan",
          l_name: "Williams",
          img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/71417%252Fprofile-galery%252Fprofile-picture%252FWILLIAMS_JORDAN_07-24.png?h=a30e7339&itok=nuZ5QRrA",
          height: 6,
          weight: 170,
          reach: 76,
          age: 32,
          record: 19 - 1 - 0,
          country: "Nigeria"
        }
      }
    }
  ],
  earlyPrelim: []
};

const App = () => {

  const [currentFightID, setCurrentFightID] = useState(1);

  useEffect(() => {
    console.log("currentFightID: " + currentFightID);

  }, [currentFightID]);

  const { mainCard, prelim, earlyPrelim } = fightData;
  console.log(fightData)

  const renderMainCardFights = (eventSection) =>
    eventSection.map((fightObj) => {
      const { fightID, fighters } = fightObj;

      return (
        <FightButton
          fightID={fightID}
          fightersObj={fighters}
          setCurrentFightID={setCurrentFightID}
          setCurrentFightTime={eventSection}
        />
      );
    });

  const renderCurrentFight = () => {

    const { fightID } = fightData;


    return (
      <CurrentFight

        currentFightID={currentFightID}
        fightersObj={fightData}
      />
    )
  };


  return (
    <>
      {renderCurrentFight()}
      <FightBanner fightTime={"Main Card - 9:00PM CST on PPV"} />
      <div className="maincard fight-grid">
        {renderMainCardFights(mainCard)}
      </div>
      <FightBanner fightTime={"Prelims - 7:00PM CST on ESPN+"} />
      <div className="prelims fight-grid">
        {renderMainCardFights(prelim)}
      </div>
      <FightBanner fightTime={"Early Prelims - 5:00PM CST on UFC Fight Pass"} />
      <div className="earlyprelims fight-grid">
        {renderMainCardFights(earlyPrelim)}
      </div>
    </>
  );
};

export default App;
