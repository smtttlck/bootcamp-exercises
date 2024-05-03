import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Sidebar } from '../components/Sidebar'
import * as api from '../api/Api'
import { Videos } from '../components/Videos'

const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = new useState("New")
  const [videos, setVideos] = new useState([])

  useEffect(() => {
    api.fetchFromApi(`search?q=${selectedCategory}&part=snippet&maxResults=50&order=date`)
          .then(data => setVideos(data.items)) 
    console.log(videos)
  }, [selectedCategory])

    return (
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "100vh" }, borderRight: '1px solid #fff', px: { sx: 0, md: 5 } }}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
        <Box sx={{ overflowY: "auto", width: "100%", px: { sx: 0, md: 5 }, color: "#fff" }}>
          <Videos
            videos={videos}
          />
        </Box>
      </Stack>
  )
}

export default Home