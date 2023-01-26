import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'

function SearchExercises() {
  const [search, setSearch] = useState('')

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
        console.log(exercisesData);
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg:"44px", xs:"30px"}}} m="50px" textAlign="center">
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative">
        <TextField value={search} onChange={(e)=> setSearch(e.target.value.toLowerCase())} label="Search Exercises" sx={{width: {lg: '700px', xs: '200px'}}}/>
        <Button onClick={handleSearch} variant="contained" color="error" sx={{height:'56px'}}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises