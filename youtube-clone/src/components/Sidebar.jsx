import React from 'react'
import { Stack } from '@mui/material'
// icons
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

export const categories = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movie', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> }
]

export const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction="column">
        {categories.map(category => (
            <button 
                className="category-btn" key={category.name}
                style={{color: '#fff', height: {sx: '20px', md: '100%'}, background: category.name === selectedCategory && '#FC1503'}}
                onClick={() => setSelectedCategory(category.name)}
            >
                <span style={{color: category.name === selectedCategory ? '#fff' : '#D23F2E', marginRight: '15px' }}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}
