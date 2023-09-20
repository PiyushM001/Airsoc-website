import React, { useState } from "react";
import "./navbar.css";
import img from "../../images/iitr-logo.svg";
import img2 from "../../images/Airsoc 2.svg";

export default function Navbar() {
  const [list, setlist] = useState("list-div");
  const navfunction = () => {
    setlist("list-div list-div-");
  };
  const crossfunction = () => {
    setlist("list-div");
  };

  return (
    <div>
      <div className="nav">
        <img id="logo" className="logo-margin" src={img} alt="."></img>
        <img id="airsoc-logo" className="logo-margin" src={img2} alt="."></img>
        <div className="airsoc-logo-div">
          <h1 className="airsoc">AirSoc</h1>
          <h3 className="iitr"> IIT Roorkee</h3>
        </div>
        <div className="links0">
          <div className="links">
            <a className="link" href="/">
              Home{" "}
            </a>
            <a className="link" href="/">
              Team{" "}
            </a>
            <a className="link" href="/">
              Project
            </a>
            <a className="link" href="/">
              Milestone
            </a>
            <a className="link" href="/">
              Gallery{" "}
            </a>
            <a className="link" href="/">
              Contact
            </a>
          </div>
        </div>
        <div className="hamburger-div">
          <div onClick={navfunction}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`${list}`}>
          <div className="list">
            <div className="list-">
              <div onClick={crossfunction} className="cross-div">
                <span className="cross-span-1"></span>
                <span className="cross-span-2"></span>
              </div>
              <a className="list-anchor-tags" href="/">
                Home
              </a>
              <a className="list-anchor-tags" href="/">
                Team
              </a>
              <a className="list-anchor-tags" href="/">
                Project
              </a>
              <a className="list-anchor-tags" href="/">
                Milestone
              </a>
              <a className="list-anchor-tags" href="/">
                Gallery
              </a>
              <a className="list-anchor-tags" href="/">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
