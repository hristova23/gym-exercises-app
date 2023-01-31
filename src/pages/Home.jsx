import React from 'react'

import HeroBanner from '../components/HeroBanner.jsx'
import SearchExercises from '../components/SearchExercises.jsx'
import Exercises from '../components/Exercises.jsx'
import { Box } from '@mui/material'
import { useState } from 'react'

function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
        setExercises={setExercises}
      />
      <Exercises 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home