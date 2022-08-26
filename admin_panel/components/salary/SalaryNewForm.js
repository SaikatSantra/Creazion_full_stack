import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SalaryNewForm() {
  const [open, setOpen] = React.useState(false);
  const saveSalary=()=>{
    setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
 

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box component="form" autoComplete="off" sx={{
      '& > :not(style)': { m: 1, width: '40ch' },
    }}>
      <TextField id="basic" label="Basic"  variant="outlined" type="number"/>
      <TextField id="hra" label="HRA"  variant="outlined" type="number"/>

      <TextField id="conveyance" label="Conveyance"  variant="outlined" type="number"/>
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Medical"   variant="outlined"type="number" />

      <TextField id="special" label="Special"  variant="outlined" type="number"/>
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Provident Fund"   variant="outlined" type="number" />

      <TextField id="special" label="Tax"  variant="outlined" type="number"/>
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Insurence"   variant="outlined" type="number" />

      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="PT"   variant="outlined" type="number" />
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Others"   variant="outlined" type="number" />
      
      <Button variant="outlined" size="large" onClick={saveSalary}>Save</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Salary Information Saved
        </Alert>
      </Snackbar>
    </Box>
  )
}
