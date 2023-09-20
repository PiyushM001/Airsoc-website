import React from "react";
import "./team-member.css";

import img2 from "../../images/Vector.svg";
import img3 from "../../images/Twitter Squared.svg";
import img4 from "../../images/LinkedIn.svg";

export default function Teammember(props) {
  return (
    <div className="team-member-box">
      <div className="team-member-box-img">
        <img src={props.img}></img>

        <div className="team-member-box-content">
          <h3 className="position">Position</h3>
          <h1 className="team-members-names">NAME </h1>

          <div className="team-member-social-media-icons">
            <img
              onclick={props.mail}
              className="team-member-social-media-img-"
              src={img2}
            ></img>
            <img
              onclick={props.twitter}
              className="team-member-social-media-img"
              src={img3}
            ></img>
            <img
              onclick={props.linkedin}
              className="team-member-social-media-img"
              src={img4}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
