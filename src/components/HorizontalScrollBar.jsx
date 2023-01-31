import { Box, Chip, Stack } from '@mui/material'
import React from 'react'

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box>
      {data.map((item) => 
          <Chip key={item} variant={bodyPart === "item" ? "filled" : "outlined"} sx={{m:"5px"}} label={item}></Chip>
      )}
    </Box>
  )
}

export default HorizontalScrollBar