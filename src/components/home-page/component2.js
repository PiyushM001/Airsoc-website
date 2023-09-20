import React from "react";
import img from "../../images/PP1P.svg";
import img2 from "../../images/Airsoc 2.svg";
import "./component2.css";
export default function Component2() {
  return (
    <div>
      <div className="plane-img-div">
        <img className="plane-img" src={img}></img>
      </div>

      <div className="component2-div">
        <svg className="svg-component2" viewBox="0 130 1440 180">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#4a349b" />
              <stop offset="100%" stop-color="#e07785" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fill-opacity="1"
            d="M0,224L40,224C80,224,160,224,240,208C320,192,400,160,480,165.3C560,171,640,213,720,213.3C800,213,880,171,960,149.3C1040,128,1120,
    128,1200,154.7C1280,181,1360,235,1400,261.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>

        <img className="airsoc-logo-2" src={img2}></img>
        <h1 className="airsoc-logo-text">AirSoc</h1>
        <h2 className="airsoc-logo-text2">IIT Roorkee</h2>
        <h1 className="airsoc-logo-text3">About AirSoc</h1>
        <div className="component2-text-div">
        <p >
          AirSoc IIT Roorkee is the official campus group that actively works on
          Aircraft, Drone, and Rocket Design. We are a bunch of enthusiastic
          geeks who are passionate about developments in the aircraft industry
          and continuously working in the same to thrive for excellence. Our aim
          is to inculcate the culture of airborne vehicles among IIT Roorkee
          junta and bring glory to IITR through national and international
          competitions.
        </p></div>
      </div>
    </div>
  );
}
