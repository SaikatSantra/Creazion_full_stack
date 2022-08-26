import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NewInvesment() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>

        <Typography variant="h6" >I Want Invest </Typography>
        <Button variant="outlined" color="primary">Invesment Link</Button>

    </Box>
  )
}
