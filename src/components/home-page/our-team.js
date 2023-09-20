import React from "react";
import "./our-team.css";
import Seemorebtn from "./see-more-btn/see-more-btn";
import Teammember from "./team-member";
import img from "../../images/profile.png";
export default function Ourteam() {
  return (
    <div className="our-team-div">
      <div className="our-team-text">
        Our Team
        <div className="underline"></div>
      </div>

      <div className="our-team-div2">
        <Teammember
          img={img}
          mail={() => {
            window.open("https://www.linkedin.com/in/piyush-mehta-399b14277");
          }}
        />
        <Teammember img={img} />
      </div>
     <Seemorebtn/>
    </div>
  );
}
