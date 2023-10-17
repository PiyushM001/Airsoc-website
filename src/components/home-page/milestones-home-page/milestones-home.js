import React from "react";
import "./milestones-home.css";
import Seemorebtn from "../see-more-btn/see-more-btn";
export default function Milestoneshome() {
  return (
    <div className="milestone-home">
      <div>
        <div className="our-team-text">
          Milestones
          <div className="underline"></div>
        </div>
      </div>
      <div className="milestone-home2">
        <div className="milestonehome-circle-div ">
          <div className="milestonehome-circle ">
            <div className="milestonehome-circle1 ">2<sup>nd</sup></div>
          </div>
          Agrone,
Cognizance 2022
        </div>
        <div className="milestonehome-circle-div ">
          <div className="milestonehome-circle ">
            <div className="milestonehome-circle1 ">5<sup>th</sup></div>
          </div>
          Design,
SAE ADC 2021
        </div>
        <div className="milestonehome-circle-div ">
          <div className="milestonehome-circle ">
            <div className="milestonehome-circle1 ">13<sup>th</sup></div>
          </div>
          Overall,
SAE ADC 2021
        </div>

       
        
      </div>
      <div className="milestone-home3">
        <Seemorebtn />
      </div>
    </div>
  );
}
