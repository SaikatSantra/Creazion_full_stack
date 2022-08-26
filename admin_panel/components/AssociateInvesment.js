import React from 'react'
import DataTable from 'react-data-table-component';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const columns = [
  {
      name: 'Investment Date',
      selector: row => row.date,
  },
  {
      name: 'Ammount',
      selector: row => row.ammount,
  },
  {
      name: 'Return',
      selector: row => row.roi,
  },
];

const data = [
  {
      date: '12/02/2022',
      ammount: '6000',
      roi: '5%',
  },
  {
      date: '22/02/2022',
      ammount: '5000',
      roi: '5%',
  },
  {
      date: '02/04/2022',
      ammount: '4000',
      roi: '5%',
  },
  {
      date: '17/03/2022',
      ammount: '3000',
      roi: '5%',
  }
]
export default function AssociateInvesment() {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Item>
            <h3>My Invesments</h3>
          <DataTable columns={columns} data={data} />
          </Item>
        </Grid>
        
        <Grid xs={12} md={6}>
          <Item>
            <h3>Cutomer Invesments</h3>
          <DataTable columns={columns} data={data} />
          </Item>
        </Grid>
        <Grid xs={6} md={6}>
          <Item>
            <Button variant="outlined" color={"primary"}>Add Investment</Button>
          </Item>
        </Grid>
        <Grid xs={6} md={6}>
          <Item>
            <Button variant="outlined" color={"primary"}>Add New Customer</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
