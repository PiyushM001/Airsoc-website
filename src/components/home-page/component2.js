import React  from 'react' ;
import './component2.css'
import animationimg1 from  '../../images/plane_a.png';
import animationimg2 from '../../images/plane_b.png';
import animationimg3 from '../../images/plane_c.png';
import animationimg4 from '../../images/drone.png';
import animationimg5 from '../../images/rocket.png';



export default function Component2(props) {
  return (
    <div className='component2'>
      <div className='component2-text'>
      <h1 className='about-airsoc-heading'> About Airsoc </h1>
      <p className='about-airsoc-text'>AirSoc IIT Roorkee is the official campus group that actively works on Aircraft, Drone, and Rocket Design. We are a bunch of enthusiastic geeks who are passionate about developments in the aircraft industry and continuously working in the same to thrive for excellence. Our aim is to inculcate the culture of airborne vehicles among IIT Roorkee junta and bring glory to IITR through national and international competitions.</p>
    
      </div>
   
    <div className='animation'>
      <img onClick={props.animate} className={`plane-a ${props.a1}`} src={animationimg1} alt='.'></img>
      <img onClick={props.animate} className={`plane-b ${props.a31}`} src={animationimg2} alt='.'></img>
      <img onClick={props.animate} className={`plane-c ${props.a32}`} src={animationimg3} alt='.'></img>
      <img onClick={props.animate} className={`drone ${props.a21}`} src={animationimg4} alt='.'></img>
      <img  onClick={props.animate} className={`drone ${props.a22}`} src={animationimg5} alt='.'></img>
      
    </div></div>
  )
}
