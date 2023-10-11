import React ,{ useState } from 'react';

import './App.css';
import Component2 from './components/home-page/component2';
import Navbar from './components/home-page/navbar';
import Ourteam from './components/home-page/our-team';
import Projecthomepage from './components/home-page/project/project-home-page';
import Footer from './components/footer';
function App() {
 
  

  return (
    <div className='app_body'>
<Navbar/>
<Component2 />
<Ourteam/>
<Projecthomepage/>
<Footer/>
</div>
  );
}

export default App;
