import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material';

export default function login() {
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
        <Box sx={{textAlign:"center", pb:2, fontSize:20}}>Login Form</Box>
        <TextField required  id="outlined-required" style={{ width:'calc(100% - 16px)'}} label="Email"></TextField>
        <TextField hintText="Password" label="Password" style={{ width:'calc(100% - 16px)'}} floatingLabelText="Password" type="password"></TextField>
        <Button variant="contained" type='submit' color="primary">Login </Button>
        <Link href="#">Reset password</Link>
        </Box>
   </>
  )
}
 