import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import { SearchBar } from './SearchBar'

const Navbar = () => {
  return (
    <Stack
        p={3}
        alignItems={"center"} 
        justifyContent={"space-between"} 
        position={"sticky"}
    >
      <Link to='/'>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/018/749/796/small/3d-red-round-video-play-button-icon-generative-ai-png.png"
          alt="icon" height={"50px"} />
      </Link>
      <SearchBar />

    </Stack>
  )
}

export default Navbar