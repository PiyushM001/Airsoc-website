import React from 'react'
import './footer.css'
import socialImg1 from '../images/mail-foot-no-hover.svg'
import socialImg1Hov from '../images/mail-foot-hover.svg'
import socialImg2 from '../images/facebook-foot-no-hover.svg'
import socialImg2Hov from '../images/facebook-foot-hover.svg'
import socialImg3 from '../images/insta-foot-no-hover.svg'
import socialImg3Hov from '../images/insta-foot-hover.svg'
export default function Footer() {
    return (
        <div className="foot">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.24516848488238!2d77.89965336499765!3d29.86650317215278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb32bac1adc93%3A0x80bba7dd5e4d1a6a!2sStudents%20Activity%20Centre%20-%20SAC!5e0!3m2!1sen!2sin!4v1695257980997!5m2!1sen!2sin"
                width="36%"
                height="63%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className='social-icon-div'>

                <a className='link' href='https://www.facebook.com/airsociitr/' target="_blank">
                    <div className="social-container">
                        <img className='social-icon-img' src={socialImg1Hov} alt="E-mail" />
                        <img className='social-icon-img-hover' src={socialImg1} alt="E-mail" />
                    </div>
                </a>
                <a className='link' href='https://www.facebook.com/airsociitr/' target="_blank">
                    <div className="social-container">
                        <img className='social-icon-img' src={socialImg2Hov} alt="Facebook" x />
                        <img className='social-icon-img-hover' src={socialImg2} alt="Facebook" />
                    </div>
                </a>
                <a className='link' href='https://www.instagram.com/airsoc_iitr/' target="_blank">
                    <div className="social-container">
                        <img className='social-icon-img' src={socialImg3Hov} alt="Instagram" />
                        <img className='social-icon-img-hover' src={socialImg3} alt="Instagram" />
                    </div>
                </a>

            </div>
        </div>
    )
}
