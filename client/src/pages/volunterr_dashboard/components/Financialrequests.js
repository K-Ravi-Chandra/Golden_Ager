import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'Address',
      headerName: 'Address',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'Moneyissue',
      headerName: 'Moneyissue',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  const rows = [
    { id: 1, Name: 'Snow', Address: 'Jon', age: 35 },
    { id: 2, Name: 'Lannister', Address: 'Cersei', age: 42 },
    { id: 3, Name: 'Lannister', Address: 'Jaime', age: 45 },
    { id: 4, Name: 'Stark', Addresse: 'Arya', age: 16 },
    { id: 5, Name: 'Targaryen', Address: 'Daenerys', age: null },
    { id: 6, Name: 'Melisandre', Address: null, age: 150 },
    { id: 7, Name: 'Clifford', Address: 'Ferrara', age: 44 },
    { id: 8, Name: 'Frances', Address: 'Rossini', age: 36 },
    { id: 9, Name: 'Roxie', Address: 'Harvey', age: 65 },
  ];
  
  export default function DataGridDemo() {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
const FinancialRequests = () => {
    return (
        
        
        <h1>Financial REQUESTS</h1>
         // DataGridDemo();
          
          
    )
}

export default FinancialRequests

