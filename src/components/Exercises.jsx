import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises, setExercises, bodyPart}) {
  return (
    <Box id="exercises">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Body Part: {bodyPart}</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise) => 
            <ExerciseCard exercise={exercise} />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises