import React from 'react'
import "./project-child-div.css"
export default function Projectchilddiv(props) {
  return (
    <div className='project-child-div'>
        <img className='project-img' src={props.img}></img>
      <div className='project-child-div-1'>
        <h1 className='project-child-div-title'> {props.title}</h1>
        <p className='project-child-div-text' > {props.content}</p>
      </div>
    </div>
  )
}
