import React ,{ useState } from 'react';

import '../App.css';
import Navbar from '../components/home-page/navbar';
import PageHead from '../components/PageHead';
import Footer from '../components/footer';

function Projects () {
  return (
    <div className='app_body'>
      <Navbar/>
      <PageHead heading="Projects" />
      <Footer/>
    </div>
  );
}
  
  export default Projects;