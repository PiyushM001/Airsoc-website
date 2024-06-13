import React from 'react'

import './PageHead.css'


export default function PageHead (props) {
  return (
    <div className="our-team-div">
      <div className="our-team-text">
        <p>{props.heading}</p>
        <div className="underline" />
      </div>
    </div>
  );
}
