import React from 'react'
import { CircularProgress } from '@mui/material'

const Loader = (isLoading: any) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isLoading && <CircularProgress size="200px" />}
    </div>
  )
}

export default Loader
