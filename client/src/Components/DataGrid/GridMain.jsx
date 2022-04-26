import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./GridMain.css";
import DashboardDialog from './DashboardDialog';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';




const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 69 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const GridMain = ()=> {

    const [openAdd, setOpenAdd] = React.useState(false);
    const [pageSize, setPageSize] = React.useState(5);

    const handleClose = () => {
        setOpenAdd(false);
    }


  return (
    <section>
      <div className='grid-heading'>
        <Link to="/"><IconButton color="primary" aria-label="Go to Back">
          <ArrowBackIosNewIcon />
        </IconButton></Link>

        <h2>Dashboard</h2>
      </div>
      <div className='button-section'>
        <Box><Button variant="outlined" className='crud-button' onClick={()=>setOpenAdd(true)}><Tooltip title="Add" arrow><AddIcon/></Tooltip></Button></Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Search" variant="standard" />
        </Box>

        <Box><Button variant="outlined" className='crud-button'>Delete</Button></Box>
      </div>
      <div className='grid-section'>
        <div style={{ width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            pagination
            autoHeight
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            
          />
        </div>
      </div>

      <DashboardDialog onOpen={openAdd} onclose={handleClose}/>

    </section>
  );
}

export default GridMain;