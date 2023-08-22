import React  from 'react' ;
import '../components/component2.css'
import animationimg1 from '../images/plane_a.png';
import animationimg2 from '../images/plane_b.png';
import animationimg3 from '../images/plane_c.png';
import animationimg4 from '../images/drone.png';
import animationimg5 from '../images/rocket.png';



export default function Component2(props) {
  

  
 
  return (
    <div className='component2'>
    <div className='animation'>
      <img onClick={props.animate} className={`plane-a ${props.a1}`} src={animationimg1} alt='.'></img>
      <img onClick={props.animate} className={`plane-b ${props.a31}`} src={animationimg2} alt='.'></img>
      <img onClick={props.animate} className={`plane-c ${props.a32}`} src={animationimg3} alt='.'></img>
      <img onClick={props.animate} className={`drone ${props.a21}`} src={animationimg4} alt='.'></img>
      <img  onClick={props.animate} className={`drone ${props.a22}`} src={animationimg5} alt='.'></img>

    </div></div>
  )
}
