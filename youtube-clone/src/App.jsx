import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import VideoDetail from './pages/VideoDetail'
import ChannelDetail  from './pages/ChannelDetail'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>        
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:key' element={<Search />} />
        </Routes>
      </Box>      
    </Router>
  )
}

export default App
