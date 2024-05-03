import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export const VideoCard = ({video}) => {
  return (
      <Card sx={{ width: 360, borderRadius: 0}}>
          <Link to={`/video/${video.id.videoId}`}>
              <CardMedia
                  image={video?.snippet.thumbnails.high.url}
                  alt={video?.snippet.title}
                  sx={{height: 200 }}
              />
          </Link>
          <CardContent sx={{ background: "#1e1e1e", height: 70 }} >
              <Link to={`/video/${video.id.videoId}`}>
                <Typography color="#fff" fontWeight="bold">
                    {video?.snippet.title.slice(0, 60)}
                </Typography>
              </Link>
              <Link to={`/channel/${video.snippet.channelId}`}>
                <Typography color="#919191" fontWeight="bold">
                    {video?.snippet.channelTitle}
                </Typography>
              </Link>
          </CardContent>

      </Card>
  )
}
