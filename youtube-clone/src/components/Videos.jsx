import React from 'react'
import { Box, Stack } from '@mui/material'
import { VideoCard } from './VideoCard'

export const Videos = ({videos}) => {
  return (
    <Stack
        direction="row" flexWrap="wrap" gap={3}
    >
        {videos.map((video, index) => (
            <Box key={index}>
                <VideoCard video = {video} />
            </Box>
        ))}
        

    </Stack>
  )
}
