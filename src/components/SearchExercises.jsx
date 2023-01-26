import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function SearchExercises() {
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg:"44px", xs:"30px"}}} m="50px" textAlign="center">
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative">
        <TextField label="Search Exercises" sx={{width: {lg: '700px', xs: '200px'}}}/>
        <Button variant="contained" color="error" sx={{height:'56px'}}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises