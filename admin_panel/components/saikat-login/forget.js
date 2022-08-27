import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function forget() {
  return (
    <>
        <Box  component="form" 
        sx={{ bgcolor: '#fff4ed' , textAlign:'left',
            '& .MuiTextField-root': { m: 1, width: '50ch' },
            '& .MuiButton-root': { m: 1, width: '25ch' },
            }} autoComplete="off">
        <Box sx={{textAlign:"center",pt:2}}>
            <AccountCircleOutlinedIcon style={{ color: "#1976d2", width:'35px', height:'35px' }}/>
            </Box>
        <Box sx={{textAlign:"center", pb:2, fontSize:20}}>Reset Password</Box>
        <TextField style={{ width:'calc(100% - 16px)'}}  required  id="outlined-required" label="Email"></TextField>
        <Button variant="contained" type='submit' color="primary">Send</Button>
        </Box>
   </>
  )
}
