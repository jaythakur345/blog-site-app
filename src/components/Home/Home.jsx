import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../HeroSection.jsx/HeroSection'
import Posts from '../Posts/Posts'
import Sidebar from '../SideBar/Sidebar'

const Home = () => {
  return (
    <Box>
        <HeroSection />
        <Box sx={{display:"flex"}} mt={2}>
            <Posts />
            <Sidebar />
        </Box>
    </Box>
  )
}

export default Home