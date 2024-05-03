import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import * as api from '../api/Api'
import { Videos } from '../components/Videos'
import { useParams } from 'react-router-dom'

const Search = () => {

  const [videos, setVideos] = new useState([])

  const { key } = useParams()

  useEffect(() => {
    api.fetchFromApi(`search?q=${key}&part=snippet&maxResults=50&order=date`)
      .then(data => setVideos(data.items))
    console.log(videos)
  }, [key])

  return (
      <Box sx={{ overflowY: "auto", width: "100%", px: { sx: 0, md: 5 }, color: "#fff" }}>
        <Videos
          videos={videos}
        />
      </Box>
  )
}

export default Search