import React from 'react'
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

export default function AssociateNewForm() {
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
      <TextField id="name" label="Full Name"  variant="outlined" type="text"/>
      <TextField id="phone" label="Phone No"  variant="outlined" type="number"/>

      <TextField id="email" label="Email Id"  variant="outlined" type="email"/>
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Commision Rate"   variant="outlined"type="number" />

      <TextField id="special" label="Referel Code"  variant="outlined" type="text"/>
      <TextField label="Password"   variant="outlined" type="password" />

      
      <Button variant="outlined" size="large" onClick={saveSalary}>Save</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Associate Created Please Login and fill other information
        </Alert>
      </Snackbar>
    </Box>
  )
}


