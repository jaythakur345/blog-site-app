import { AppBar, Avatar, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const Header = () => {
  return (
    <AppBar position="sticky" color='secondary'>
      <StyledToolbar>
        <Typography variant='h6' textTransform={'uppercase'} letterSpacing={1.5}>Daily Blogs</Typography>
        <ul style={{ display: "flex" }}>
          <li style={{ marginRight: "20px", }}>
            <Link style={{ color: "white", textTransform: 'uppercase', letterSpacing: '1.5px' }} to='/'>HOME</Link>
          </li>
          <li style={{ marginRight: "20px", }}>
            <Link style={{ color: "white", textTransform: 'uppercase', letterSpacing: '1.5px' }} to='/'>About</Link>
          </li>
          <li style={{ marginRight: "20px", }}>
            <Link style={{ color: "white", textTransform: 'uppercase', letterSpacing: '1.5px' }} to='/'>Contact</Link>
          </li>
          <li style={{ marginRight: "20px", }}>
            <Link style={{ color: "white", textTransform: 'uppercase', letterSpacing: '1.5px' }} to='/'>Write</Link>
          </li>
        </ul>

        <UserBox>
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header