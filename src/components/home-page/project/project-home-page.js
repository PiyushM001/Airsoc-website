import React from "react";
import "./project-home-page.css";
import Projectchilddiv from "../project-child-div/project-child-div";
import img1 from "../../../images/plane_b_project.svg";
import img2 from "../../../images/rocket_project.svg";
import img3 from "../../../images/diana-macesanu-3ciHxbx9H0U-unsplash 1.svg";
import Seemorebtn from "../see-more-btn/see-more-btn";

export default function Projecthomepage() {
  return (
    <div className="project-div">
      <svg className=" svg" viewBox="0 140 1440 170">
        <path
          fill="#0099ff"
          fill-opacity="0"
          stroke="purple"
          stroke-width="4"
          stroke-dasharray="20 30"
          d="M0,288L30,272C60,256,120,224,180,202.7C240,181,300,171,360,192C420,213,480,267,540,272C600,277,660,235,720,208C780,181,840,171,900,186.7C960,203,1020,245,1080,250.7C1140,256,1200,224,1260,208C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg2"
        viewBox="0 140 1440 170"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4a349b" />
            <stop offset="100%" stop-color="#e07785" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fill-opacity="1"
          d="M0,288L30,272C60,256,120,224,180,202.7C240,181,300,171,360,192C420,213,480,267,540,272C600,277,660,235,720,208C780,181,840,171,900,186.7C960,203,1020,245,1080,250.7C1140,256,1200,224,1260,208C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <div className="project-mid-div">
        <div className="our-team-text project-div-1">
          Projects
          <div className="underline project-underline"></div>
        </div>
        <div className="project-div-2-"></div>
        <div className="project-div-2">
          <Projectchilddiv
            img={img1}
            title="Aero-Design "
            content="Aero Design Team is the most experienced team that has performed well at many national level competitions and now they have been working more advanced and innovative designs such as box-wing aircraft. 
"
          />
          <Projectchilddiv
            img={img2}
            title="Rocket-Design "
            content="Rocket Design Team is completely research-based as of now and they have simulated numerous Stage-I model rockets."
          />

          <Projectchilddiv
            img={img3}
            title="UAV/Drone Design "
            content="Team started in 2021 and they are already successful at a few national competitions. The major focus of this team is to work on latest UAV design and control systems along with applications in different industries such as agriculture. They are equipped with ample technical skills like electronics, flight control systems, Computer Vision, and Artificial Intelligence."
          />
        </div>
        <div className="see-more-btn-div2">
          <div className="btn-border2">
            <button className="see-more-btn2">See More</button>
          </div>
        </div>
      </div>

      <div className="lower-wave">
        <svg
          className="svg3"
          viewBox="0 50 1440 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#4a349b" />
              <stop offset="100%" stop-color="#e07785" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,186.7C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <svg className=" svg4" viewBox="0 50 1440 180">
        <path
          fill="#0099ff"
          fill-opacity="0"
          stroke="purple"
          stroke-width="4"
          stroke-dasharray="20 30"
          d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,186.7C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
// d="M0,288L30,272C60,256,120,224,180,202.7C240,181,300,171,360,192C420,213,480,267,540,272C600,277,660,235,720,208C780,181,840,171,900,186.7C960,203,1020,245,1080,250.7C1140,256,1200,224,1260,208C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">

//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,186.7C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
//
