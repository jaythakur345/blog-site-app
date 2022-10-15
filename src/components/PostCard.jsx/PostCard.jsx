import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const PostCard = () => {
  return (
    <Card sx={{ maxWidth: 345, margin:"20px" }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default PostCard