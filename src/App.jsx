
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Closing, Letter,Passcode,Question,Recap,Timer,Message,Music,Videos,LoveStory,BeautifulGirl,Proposal} from './components'
import './index.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Passcode />} />
        <Route path="/question" element={<Question />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/recap/message" element={<Message />} />
        <Route path="/recap/music" element={<Music />} />
        <Route path="/recap/pictures" element={<Videos />} />
        <Route path="/love-story" element={<LoveStory />} />
        <Route path="/most-beautiful" element={<BeautifulGirl />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>
    </Router>
  )
}

export default App
