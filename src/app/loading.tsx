import { CircularProgress } from '@mui/material'
import React from 'react'

const loding = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <CircularProgress color="inherit" />
    </div>
  )
}

export default loding
