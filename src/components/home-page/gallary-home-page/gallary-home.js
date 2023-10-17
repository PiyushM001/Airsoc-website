import React from 'react'
import './gallary-home.css'
import Slider from '../image-slider/slider'
export default function Gallaryhome() {
  return (
    <div className="project-div">
      <svg className=" svg" viewBox="0 140 1440 170">
        <path
          fill="#0099ff"
          fill-opacity="0"
          stroke="purple"
          stroke-width="4"
          stroke-dasharray="20 30"
          d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,154.7C800,139,880,149,960,165.3C1040,181,1120,203,1200,202.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
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
          d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,154.7C800,139,880,149,960,165.3C1040,181,1120,203,1200,202.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="project-mid-div">
        <div className="our-team-text project-div-1  xyz">
          Gallery
          <div className="underline project-underline"></div>
        </div>
        <div className="gallary-home-div"></div>
        <div className="gallary-home-div2">
        <div className="gallary-home-div3"> <Slider/></div>
         
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
  )
}
//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,192C320,213,400,235,480,224C560,213,640,171,720,154.7C800,139,880,149,960,165.3C1040,181,1120,203,1200,202.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>