import React from 'react';
import { Button } from '@mui/material';
import DataTable ,{ ExpanderComponentProps }from 'react-data-table-component';
import EditEmployee from './EditEmployee';
const columns = [
    {
        name: 'Full Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Phone No',
        selector: row => row.phone,
        sortable: true,
    },
    {
        name: 'Designation',
        selector: row => row.desgination,
        sortable: true,
    }
];

const data = [
    {
        id:1,
        name: 'User 1',
        email: 'user1@temp.com',
        phone: '7788828282',
        desgination:"Software developer"
    },
    {
        id:2,
        name: 'User 2',
        email: 'user2@temp.com',
        phone: '778882822',
        desgination:"Android Developer"
    },
    {
        id:3,
        name: 'User 3',
        email: 'gmail@yahoo.com',
        phone: '7788828282',
        desgination:"Tester"
    }
]


  
    
const AllEmployee = () => {

    const ExpandedComponent = ({ data }) => <>
    <p>Name : {data.name}</p>
    <p>Email :{data.email}</p>
    <p>Phone No: {data.phone}</p>
    <p>Designation: {data.desgination}</p>
    <Button onClick={()=>editEmployee(data.id)} color="info" variant="outlined">Edit</Button>

</>


const editEmployee=(id)=>{
    setEditId(id);
    }

     const[editId,setEditId]=React.useState(null);
    const [selectRows,setSelectRows]=React.useState([]);
  
    const handleChange = (state) => {
        console.log('state', state.selectedRows);
        setSelectRows({ selectRows: state.selectedRows });
    };
    return (
        <div>
            {editId?<EditEmployee data={data[editId-1]}/>: <DataTable columns={columns} data={data} selectableRows onSelectedRowsChange={handleChange}  pagination expandableRows expandableRowsComponent={ExpandedComponent}/> }
          
        </div>
    );
}
export default AllEmployee;

