import React ,{ useState } from 'react';

import '../App.css';
import Navbar from '../components/home-page/navbar';
import PageHead from '../components/PageHead';
import Footer from '../components/footer';

function TeamMembers () {
  return (
    <div className='app_body'>
      <Navbar/>
      <PageHead heading="Our Team" />      
      <Footer/>
      
    </div>
  );
}
  
  export default TeamMembers;