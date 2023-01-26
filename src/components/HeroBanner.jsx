import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import HeroBannerImg from '../assets/images/banner.jpg'

function HeroBanner() {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'},
      }}
      position="relative" p="20px" mb="300px">
      <Typography fontWeight="600" color="#FF2625">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" line-height="32px" mb={4 }>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <img src={HeroBannerImg} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner