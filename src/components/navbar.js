import React from 'react'
import './navbar.css'
import img from '../images/iitr-logo.png'
import img2 from '../images/Airsoc 2.png'
import img3 from '../images/plane_a.png'
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
<img className='big-img' src={img3} alt='.'></img></div>
  )
}
