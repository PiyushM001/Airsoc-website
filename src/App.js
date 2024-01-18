import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Milestones from './Pages/Milestones'
import TeamMembers from './Pages/TeamMembers'
import Projects from './Pages/Projects'

export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/team" element={<TeamMembers />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}