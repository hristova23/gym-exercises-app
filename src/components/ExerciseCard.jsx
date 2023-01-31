import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  console.log(exercise)
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
      <Typography fontWeight="bold" color="#000" textTransform="capitalize" fontSize="24px">{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard