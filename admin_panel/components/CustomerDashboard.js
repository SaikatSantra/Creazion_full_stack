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
export default function CustomerDashboard() {
    
  return (
    <div>

<Box className='red' sx={{ flexGrow: 1 }}  style={{ marginBottom: '30px' }} >
    <Grid container spacing={2}>
    <CustomerOffer/>
    </Grid>
    </Box>


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid  xs={12} md={4} sm={4}>
          <Item>
            Hello,User Good Morning
          </Item>
        </Grid>

        <Grid  xs={12} md={4} sm={4}>
          <Item>Total Invesment:828828282</Item>
        </Grid>
        
        <Grid  xs={12} md={4} sm={4}>
          <Item>Total Profit:22727272</Item>
        </Grid>

      </Grid>
    </Box>


 
        
     



        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  xs={12} md={4} sm={4}>
          <Item>
            Want to BA Model
          </Item>
        </Grid>
        <Grid  xs={12} md={4} sm={4}>
          <Item>Join CSP </Item>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <a href="#">Know More</a>
        </Grid>
        
        <Grid  xs={12} md={4} sm={4}>
          <Item>BRANCH Open</Item>
        </Grid>
      </Grid>
    </Box>
        
        </div>
  )
}
