import React ,{ useState } from 'react';

import '../App.css';
import Component2 from '../components/home-page/component2';
import Navbar from '../components/home-page/navbar';
import Ourteam from '../components/home-page/our-team';
import Projecthomepage from '../components/home-page/project/project-home-page';
import Footer from '../components/footer';
import Milestoneshome from '../components/home-page/milestones-home-page/milestones-home';
import Gallaryhome from '../components/home-page/gallary-home-page/gallary-home';
import Contact from '../components/home-page/contact-us/contact';

function Home() {
    return (
      <div className='app_body'>
  <Navbar/>
  <Component2 />
  <Ourteam/>
  <Projecthomepage/>
  <Milestoneshome/>
  <Gallaryhome/>
  <Contact/>
  <Footer/>
  
  </div>
    );
  }
  
  export default Home;