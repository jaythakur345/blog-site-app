import { Box } from '@mui/material'
import React from 'react'
import PostCard from '../PostCard.jsx/PostCard'

const Posts = () => {
  return (
    <Box flex={4} sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </Box>
  )
}

export default Posts