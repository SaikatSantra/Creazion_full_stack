import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CustomerInforamtion() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>
            Peronal Information and Nominee Information
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>Bank Information</Item>
        </Grid>
        
        <Grid xs={3}>
          <Item>Current Profit</Item>
        </Grid>
        <Grid xs={3}>
          <Item>Withdrw Request</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Transaction History/Withdrw History</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
