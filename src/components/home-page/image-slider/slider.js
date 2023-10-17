import React from 'react'
import './slider.css'
import { Carousel } from 'react-responsive-3d-carousel'
import drone from'../../../images/drone.svg'
import img1 from  '../../../images/plane_a.svg'
import img2 from '../../../images/plane_c.svg'
import img3 from '../../../images/plane_c.svg'
import img4 from '../../../images/rocket.svg'

export default function Slider() {
  return (
    <div className='slider-div'>
      <Carousel>
<img src={drone}/>
<img src={img1}/>
<img src={img2}/>
<img src={img3}/>
<img src={img4}/>

      </Carousel>
    </div>
  )
}
