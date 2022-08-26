import React from 'react';
import DataTable from 'react-data-table-component';
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
const AllCustomer = () => {
    return (
        <div>
           <DataTable columns={columns} data={data} /> 
        </div>
    );
}
export default AllCustomer;
