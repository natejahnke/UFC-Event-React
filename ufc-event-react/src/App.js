import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fight from "./Components/Fight";
import fighters from "../src/fighters.json";

class App extends Component {
  state = {
    fighters
  }

  render() {
    console.log(fighters.[5].fname);

    return (
      <Fight
        fighter1_fname={fighters[1].fname}
        fighter1_lname={fighters[1].lname}
        fighter2_fname={fighters[2].fname}
        fighter2_lname={fighters[2].lname}
        fighter1_image={fighters[1].image}
        fighter2_image={fighters[2].image}
      />
      // <div classNameName="App">
      //   <div className="container">
      //     <div className="event-header">
      //       <div className="profile-image-left red-gradient"><img className="profile-image"
      //         src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/68441%252Fprofile-galery%252Fprofile-picture%252FUSMAN_KAMARU_BELT_04-24.png?VersionId=null&h=a30e7339&itok=Nbspzpxy"
      //         alt="" /></div>
      //       <div className="event-info">
      //         <div className="event-number">UFC 268</div>

      //         <div className="event-names-column">
      //           <div className="event-fighter-name1">Usman</div>
      //           <div className="versus">vs</div>
      //           <div className="event-fighter-name2">Covington</div>
      //         </div>
      //         <div className="event-details">Sat, Nov 6 / 9:00 PM CDT<span className="event-location">Madison
      //           Square
      //           Garden, New York United
      //           States</span></div>
      //         <div className="fighter-name-left">Kamaru Usman</div>
      //         <div className="profile-stats">
      //           <div className="stats-box-left">
      //             <div>15-2-0</div>
      //             <div>170 LB</div>
      //             <div>6'0"</div>
      //             <div>76 in</div>
      //             <div>Nigeria</div>
      //           </div>
      //           <div className="stats-labels">
      //             <div>Record</div>
      //             <div>Weight</div>
      //             <div>Height</div>
      //             <div>Reach</div>
      //             <div>Country</div>
      //           </div>
      //           <div className="stats-box-right">
      //             <div>15-2-0</div>
      //             <div>170 LB</div>
      //             <div>6'0"</div>
      //             <div>76 in</div>
      //             <div>Nigeria</div>
      //           </div>
      //         </div>
      //         <div className="fighter-name-right">Colby Covington</div>
      //       </div>
      //       <div className="profile-image-right red-gradient"><img className="profile-image"
      //         src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/ufc-fighter-container/67658/profile-galery/profile-picture/COVINGTON_COLBY_08-03.png?VersionId=null&h=a30e7339&itok=Y_dsHvyE"
      //         alt="" /></div>
      //     </div>
      //     <div className="maincard-banner fight-time-banner">
      //       <p>Main Card - 9:00PM CST on PPV</p>
      //     </div>
      //     <div className="maincard fight-grid">
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/68441%252Fprofile-galery%252Fprofile-picture%252FUSMAN_KAMARU_BELT_04-24.png?VersionId=null&h=a30e7339&itok=Nbspzpxy"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/ufc-fighter-container/67658/profile-galery/profile-picture/COVINGTON_COLBY_08-03.png?VersionId=null&h=a30e7339&itok=Y_dsHvyE"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Kamaru Usman</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Colby Covington</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/69149%252Fprofile-galery%252Fprofile-picture%252FNAMAJUNAS_ROSE_BELTCOMP.png?VersionId=null&h=a30e7339&itok=yb9UPX0V"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2018-10/ZHANG_WEILI.png?VersionId=W3yOxHGSB.8rw7yJf4BgsWBLiB5hVHuc&itok=4kxIsWLh"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Rose Namajunas</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Zhang Weili</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2018-10/GAETHJE_JUSTIN.png?VersionId=klcIQXFsq.Vx8kxhoOmWKSJX7gNzXzFI&itok=A5_BjCnO"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69907%252Fprofile-galery%252Fprofile-picture%252FCHANDLER_MICHAEL_05-15.png?VersionId=null&h=a30e7339&itok=TnrOOEF8"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Justin Gaethje</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Michael Chandler</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69249%252Fprofile-galery%252Fprofile-picture%252FBURGOS_SHANE_05-15.png?VersionId=null&h=a30e7339&itok=IO2kMHTb"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/71505%252Fprofile-galery%252Fprofile-picture%252FQUARANTILLO_BILLY_07-17.png?h=a30e7339&itok=fJCuUNPz"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Shane Burgos</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Billy Quarantillo</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2020-09/EDGAR_FRANKIE_07-27.png?VersionId=5BEAi0xvp5VYpH3Fl.rDiUWDfa_AtJjc&h=a30e7339&itok=s1pcmTlS"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-06/68723%252Fprofile-galery%252Fprofile-picture%252FVERA_MARLON_06_19.png?VersionId=null&h=a30e7339&itok=XIRfSh02"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Frankie Edgar</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Marlon Vera</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="prelims-banner fight-time-banner">
      //       <p>Prelims - 7:00PM CST on ESPN+</p>
      //     </div>
      //     <div className="prelims fight-grid">
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://www.ufc.com/themes/custom/ufc/assets/img/no-profile-image.png"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/67317%252Fprofile-galery%252Fprofile-picture%252FMICHAILIDIS_ANDREAS_05-01.png?VersionId=null&h=a30e7339&itok=svZC5Z0z"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Alex Pereira</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Andreas Michailidis</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/ufc-fighter-container/67178/profile-galery/profile-picture/IAQUINTA_AL.png?VersionId=lPmWchnfXz9uhaQr22VJ8ulOiRGXjh9h&itok=c7Nl-pce"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-08/67476%252Fprofile-galery%252Fprofile-picture%252FGREEN_BOBBY_08-07.png?h=a30e7339&itok=rpKS4G-I"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Al Iaquinta</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Bobby Green</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69012%252Fprofile-galery%252Fprofile-picture%252FHAWES_PHIL_05-08.png?VersionId=null&h=a30e7339&itok=DurqUY-l"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/fighter_images/Chris_Curtis/CURTIS_CHRIS.png?VersionId=HU6VjRF9wFQT9zEYhOZS70FGIx5kMMvS&itok=dvOJcUwn"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Phillip Hawes</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Chris Curtis</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/69727%252Fprofile-galery%252Fprofile-picture%252FSHAHBAZYAN_EDMEN_05-22.png?VersionId=null&h=a30e7339&itok=ESS94afV"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/71679%252Fprofile-galery%252Fprofile-picture%252FIMAVOV_NASSOURDINE_07-24.png?h=a30e7339&itok=VO1-z9zd"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Edmen Shahbazyan</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Nassourdine Imavov</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://www.ufc.com/themes/custom/ufc/assets/img/no-profile-image.png"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/71417%252Fprofile-galery%252Fprofile-picture%252FWILLIAMS_JORDAN_07-24.png?h=a30e7339&itok=nuZ5QRrA"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Ian Garry</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Jordan Williams</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="earlyprelims-banner fight-time-banner">
      //       <p>Early Prelims - 5:00PM CST on UFC Fight Pass</p>
      //     </div>
      //     <div className="earlyprelims fight-grid">
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2020-12/68015%252Fprofile-galery%252Fprofile-picture%252FVILLANTE_GIAN_12-05.png?VersionId=null&h=a30e7339&itok=-9LhdlwD"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-05/71791%252Fprofile-galery%252Fprofile-picture%252FBARNETT_CHRIS_05-22.png?VersionId=null&h=a30e7339&itok=H8FOlJXZ"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Gian Villante</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Chris Barnett</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-04/67864%252Fprofile-galery%252Fprofile-picture%252FJACOBY_DUSTIN_05-01.png?VersionId=null&h=a30e7339&itok=snthYb0N"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-11/69719%252Fprofile-galery%252Fprofile-picture%252FALLAN_JOHN_07-13.png?h=a30e7339&itok=4kVZsytq"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Dustin Jacoby</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">John Allan</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-08/BAGHDASARYAN_MELSIK_07-31.png?h=a30e7339&itok=pkUK9d-O"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://www.ufc.com/themes/custom/ufc/assets/img/no-profile-image.png"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Melsik Baghdasaryan</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Bruno Souza</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="fight-container">
      //         <div className="content">
      //           <div className="parent">
      //             <div className="content-overlay"></div>
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-09/71758%252Fprofile-galery%252Fprofile-picture%252FVERGARA_CJ.png?h=a30e7339&itok=iKLos_Aj"
      //               alt="" className="over-img-left small-img" />
      //             <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-08/71517%252Fprofile-galery%252Fprofile-picture%252FOSBOURNE_ODE_08-07.png?h=a30e7339&itok=r6XnUD1P"
      //               alt="" className="over-img-right small-img" />
      //             <div className="content-details fadeIn-bottom">
      //               <h3 className="content-title">Cj Vergara</h3>
      //               <div className="enhanced-hr">
      //                 <span>VS</span>
      //               </div>
      //               <h3 className="content-title">Ode' Osbourne</h3>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
