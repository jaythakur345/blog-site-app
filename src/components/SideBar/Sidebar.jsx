import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StyleHeading = styled(Box)({
    width: "100%",
    textAlign: "center",
    padding: "5px 0",
    borderBottom: "1px solid gray",
    borderTop: "1px solid gray"
})

const Sidebar = () => {
    return (
        <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin:"20px 0"}}
            flex={1} width="100%" height="100%">
            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg" width="300px" alt="Img" />
            <StyleHeading my={2}>
                <Typography variant='h6' sx={{}}>
                    About Me
                </Typography>
            </StyleHeading>
            <Typography variant='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, aut debitis praesentium fugit enim blanditiis
            </Typography>
            <StyleHeading my={2}>
                <Typography variant='h6' sx={{}}>
                    Categories
                </Typography>
            </StyleHeading>
            <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <li style={{ marginRight: "30px", marginBottom: "10px" }}><Link to='/'>Music</Link></li>
                <li style={{ marginRight: "30px", marginBottom: "10px" }}><Link to='/'>Music</Link></li>
                <li style={{ marginRight: "30px", marginBottom: "10px" }}><Link to='/'>Music</Link></li>
                <li style={{ marginRight: "30px", marginBottom: "10px" }}><Link to='/'>Music</Link></li>
                <li style={{ marginRight: "30px", marginBottom: "10px" }}><Link to='/'>Music</Link></li>
                <li style={{ marginRight: "30px", marginBottom: "10px" }}><Link to='/'>Music</Link></li>
                <li style={{ marginRight: "30px", marginBottom: "10px" }}><Link to='/'>Music</Link></li>
            </ul>
            <StyleHeading my={2}>
                <Typography variant='h6' sx={{}}>
                    Follow Me
                </Typography>
            </StyleHeading>
            <Stack direction={'row'} gap={2}>
                <Link to='/'><Facebook /></Link>
                <Link to='/'><Twitter /></Link>
                <Link to='/'><Instagram /></Link>
            </Stack>
        </Box>
    )
}

export default Sidebar