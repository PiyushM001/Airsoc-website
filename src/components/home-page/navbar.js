import React from 'react'
import './navbar.css'
import img from '../../images/iitr-logo.svg'
import img2 from '../../images/Airsoc 2.svg'

export default function Navbar() {
  return (
    <div>
    <div className="nav">
        <img id='logo' className='logo-margin' src={img} alt="."></img>
        <img className='logo-margin' src={img2} alt="."></img>
        <div className='airsoc-logo-div'>
        <h1 className='airsoc'>AirSoc</h1> 
        <h3 className='iitr'> IIT Roorkee</h3>
        </div>
        <div className='links0'>
        <div className='links'>
        <a className='link-home link' href='/'>Home </a>
        <a className='link' href='/'>Team </a>
        <a className='link' href='/'>Project</a>
        <a className='link' href='/'>Milestone</a>
        <a className='link' href='/'>Gallery </a>
        <a className='link' href='/'>Contact</a>
        </div></div>
    </div>
    <div className='test'>
    <svg className='svg'  viewBox="0 0 1440 520"> 
    <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#605195" />
      <stop offset="100%" stop-color="#E07785" />
    </linearGradient>
  </defs>
   <path  fill="url(#gradient)" fill-opacity="1" d="M0,224L40,224C80,224,160,224,240,208C320,192,400,160,480,165.3C560,171,640,213,720,213.3C800,213,880,171,960,149.3C1040,128,1120,
    128,1200,154.7C1280,181,1360,235,1400,261.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
    </svg>
    </div>
    
</div>
  )
}
