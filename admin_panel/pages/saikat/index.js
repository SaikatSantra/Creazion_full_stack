import React from 'react'
import Forget from '../../components/saikat-login/forget'
import Login from '../../components/saikat-login/login'
import Signup from '../../components/saikat-login/signup'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function index() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={4}><Item><Login/></Item></Grid>
    <Grid item xs={4}><Item><Forget/></Item></Grid>
    <Grid item xs={4}><Item><Signup/></Item></Grid>
    </Grid>
    </Box>
    </>
  )
}
