import { Box, Chip } from '@mui/material'
import React from 'react'

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  console.log(bodyPart)
  return (
    <Box>
      {data.map((item) => 
          <Chip onClick={() => setBodyPart(item)} key={item} variant={bodyPart === "item" ? "filled" : "outlined"} sx={{m:"5px"}} label={item}></Chip>
      )}
    </Box>
  )
}

export default HorizontalScrollBar