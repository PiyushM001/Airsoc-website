import React ,{ useState } from 'react';

import './App.css';
import Component2 from './components/home-page/component2';
import Navbar from './components/home-page/navbar';
import Ourteam from './components/home-page/our-team';
import Projecthomepage from './components/home-page/project/project-home-page';
import Footer from './components/footer';
function App() {
  const [a1 , seta1] = useState("a1");
  const [a21 , seta21] = useState("a21");
  const [a22, seta22] = useState("a22 ");
  const [a31 , seta31] = useState(" a31");
  const [a32, seta32] = useState(" a32");
   
   
  const fun=()=>{
   

   if(a1==="a1" ){
    seta1("a21");
seta21("a31");
seta22("a1");
seta31("a32");
seta32("a22");
   }
   if(a1==="a21" ){
    seta1("a31");
seta21("a32");
seta22("a21");
seta31("a22");
seta32("a1");
   }
   if(a1==="a31" ){
    seta1("a32");
seta21("a22");
seta22("a31");
seta31("a1");
seta32("a21");
   }
   if(a1==="a32" ){
    seta1("a22");
seta21("a1");
seta22("a32");
seta31("a21");
seta32("a31");
   }
   if(a1==="a22" ){
    seta1("a1");
seta21("a21");
seta22("a22");
seta31("a31");
seta32("a32");
   }
  }

  return (
    <div className='app_body'>
<Navbar/>
<Component2 animate={fun} a1={a1}  a21={a21} a22={a22} a31={a31} a32={a32}/>
<Ourteam/>
<Projecthomepage/>
<Footer/>
</div>
  );
}

export default App;
