import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../api/Api'
import { Box } from '@mui/material'
import ChannelCard from '../components/ChannelCard'

const ChannelDetail = () => {

  const {id} = useParams()
  
  const [channel, setChannel] = useState([])
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // channel detail
    api.fetchFromApi(`channels?part=snippet&id=${id}`)
      .then(data => setChannel(data.items[0]))
    // channel videos
    api.fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`)
      .then(data => setVideos(data.items))
    console.log(channel)
    console.log(videos)
  }, [id])


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channel={channel} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos 
          videos={videos} 
        />
      </Box>
    </Box>
  )
}

export default ChannelDetail