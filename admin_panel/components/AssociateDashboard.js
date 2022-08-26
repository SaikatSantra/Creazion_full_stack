import React from 'react'
import CustomerOffer from './CustomerOffer'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function AssociateDashboard() {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Item>
            Hello,Associate Name, Grettings
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>Total Invesment:828828282</Item>
        </Grid>
        
        <Grid xs={4}>
          <Item>Total Profit:22727272</Item>
        </Grid>

        <Grid xs={6}>
          <Item>My Customer List</Item>
        </Grid>
        
        <Grid xs={6}>
          <Item>Recent Invesments</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
