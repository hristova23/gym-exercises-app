import { Box, Button, Chip, Stack, TextField, Typography } from '@mui/material'
import { spacing } from '@mui/system'
import { React, useState, useEffect } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

function SearchExercises(bodyPart, setBodyPart, setExercises) {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      
      setSearch('');
      setExercises(searchedExercises);
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
      <Box>     
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises