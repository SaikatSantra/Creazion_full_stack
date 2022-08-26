import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function DesignationNewForm() {
  const [open, setOpen] = React.useState(false);
  const [salary, setSalary] = React.useState('');
  const saveSalary=()=>{
    setOpen(true);
  }
  const handleChange2 = (event) => {
    setSalary(event.target.value);
  };

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
const formHandler=(e)=>{
e.preventDefault();
//
console.log(e.target.designation.value);
console.log(e.target.salaryid.value);
axios.post('http://localhost:5000/api/designation', {
  name: e.target.designation.value,
  salary_id: e.target.salaryid.value
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

}
  return (
    <Box component="form" autoComplete="off" sx={{
      '& > :not(style)': { m: 1, width: '40ch' },
    }} onSubmit={formHandler}>
      <TextField name="designation" label="Designation"  variant="outlined" type="text"/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Salary</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={salary}
          label="Age"
          onChange={handleChange2}
          name="salaryid"
        >
          <MenuItem value={10}>25000</MenuItem>
          <MenuItem value={20}>30000</MenuItem>
          <MenuItem value={30}>10000</MenuItem>
        </Select>
      </FormControl>

      
      <Button variant="outlined" size="large"  type="submit" onClick={saveSalary}>Save</Button>


      <div>
        Salary Information
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Designation Information Saved
        </Alert>
      </Snackbar>
    </Box>
  )
}
