// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/NavBar.jsx'
import Home from './pages/Home Page/Home.jsx'
import Events from './pages/Events Page/Events.jsx'
import About from './pages/About Page/About.jsx'
import Board from './pages/Board Page/Board.jsx'
import Announcements from './pages/Announcements Page/Announcements.jsx'
import Join from './pages/Join Page/Join.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <div className="grid-overlay" aria-hidden="true" />

    <div className="app-content">
        <Navbar />
  
        <div className="nav-spacer" aria-hidden="true"></div>
        
        <Routes> /* routes you to correct page */
          {/* LANDING ROUTE */}
          <Route path="/" element={<Home />}/>
          
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<div style={{padding:16}}>Not Found</div>} />
        </Routes>
        
    </div>
    </BrowserRouter>
  </StrictMode>
)

