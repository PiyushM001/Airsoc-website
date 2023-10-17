import React from 'react'
import './contact.css'
import facebooklogo from '../../../images/facebook-logo.svg'
import instalogo from '../../../images/mail-logo.svg'
import twitterlogo from '../../../images/twitter-logo.svg'
import ytlogo from '../../../images/yt-logo.svg'
import maillogo from '../../../images/insta-logo.svg'
import linkedinlogo from '../../../images/linkedinlogo.svg'
import fblogo from '../../../images/fb-logo.svg'
import insta2logo from '../../../images/mail2logo.svg'
import twitter2logo from '../../../images/twitter2-logo.svg'
import yt2logo from '../../../images/yt2logo.svg'
import mail2logo from '../../../images/insta2logo.svg'
import linkedin2logo from '../../../images/linkedin2logo.svg'
export default function Contact() {
  return (
    <div>
       <div className="our-team-text ">
          Contact Us
          <div className="underline "></div>
          <div className='contact-mid-div'>

          <div className="contact-logo-div">
  <img className="contact-logo1" src={facebooklogo} alt={facebooklogo}/>
  <img className="background-contact-logo" src={fblogo} alt={facebooklogo}/>
</div>


<div className="contact-logo-div">
  <img className="contact-logo1" src={linkedinlogo} alt={facebooklogo}/>
  <img className="background-contact-logo" src={linkedin2logo} alt={facebooklogo}/>
</div>

<div className="contact-logo-div">
  <img className="contact-logo1" src={instalogo} alt={facebooklogo}/>
  <img className="background-contact-logo" src={mail2logo} alt={facebooklogo}/>
</div>

<div className="contact-logo-div">
  <img className="contact-logo1" src={twitterlogo} alt={facebooklogo}/>
  <img className="background-contact-logo" src={twitter2logo} alt={facebooklogo}/>
</div>

<div className="contact-logo-div">
  <img className="contact-logo1" src={ytlogo} alt={facebooklogo}/>
  <img className="background-contact-logo" src={yt2logo} alt={facebooklogo}/>
</div>

<div className="contact-logo-div">
  <img className="contact-logo1" src={maillogo} alt={facebooklogo}/>
  <img className="background-contact-logo" src={insta2logo} alt={facebooklogo}/>
</div>



            
          </div>
        </div>
    </div>
  )
}
