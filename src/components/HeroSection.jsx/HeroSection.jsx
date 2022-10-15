import React from 'react'
import { Box, styled, Typography } from '@mui/material'

const HeroBox = styled(Box)({
    background:"url('https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') fixed center/cover",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
})
const HeroSection = () => {
  return (
    <HeroBox width='100%' height='450px'>
        <Typography variant='h6' fontSize='60px' color='secondary' lineHeight={1}>
            BLOG
        </Typography>
        <Typography variant='p'>Type Something New Here.</Typography>
    </HeroBox>
  )
}

export default HeroSection