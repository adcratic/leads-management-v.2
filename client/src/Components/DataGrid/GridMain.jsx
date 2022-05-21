import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./GridMain.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import AddDialog from './AddDialog';
import DeleteDialog from './DeleteDialog';
import axios from 'axios';
import SignUp from '../../pages/SignUp';




const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'leadName',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'mobileNumber',
    headerName: 'Phone',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
    editable: true,
  },
  {
    field: 'requirenemnt',
    headerName: 'Requirement',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,

  },
  {
    field: 'quickNote',
    headerName: 'Quick Note',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,

  },
];



// [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// }
const GridMain = (props) => {

  const [openAdd, setOpenAdd] = React.useState(false);
  const [rowId, setRowId]= React.useState([]);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(5);
  const [leads, setLeads] = React.useState([]);
  const [selectionModel, setSelectionModel] = React.useState({});
  const rows = leads.map((data) => {
    return { id: data._id, leadName: data.leadName, mobileNumber: data.mobileNumber, email: data.email, requirenment: data.requirenment, quickNote: data.quickNote }
  })

  React.useEffect(() => {
    axios.get('http://localhost:5000/leadsData/')
      .then(res => {
        console.log(res.data.leadsData);
        setLeads(res.data.leadsData)

      }).catch(err => console.log(err))
  }, [])

  const handleClose = () => {
    setOpenAdd(false);
    setOpenDelete(false);
  }

  const handleDelete = (e)=>{

  }

 


  return (
    <>
      {props.isUserL ? (
        <section>
      <div className='grid-heading'>
        <Link to="/">
          <IconButton color="primary" aria-label="Go to Back">
            <ArrowBackIosNewIcon />
          </IconButton>
        </Link> 

        <h2>Dashboard</h2>
      </div>
      <div className='button-section'>
        <Box><Button variant="outlined" className='crud-button' onClick={() => setOpenAdd(true)}><Tooltip title="Add" arrow><AddIcon /></Tooltip></Button></Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Search" variant="standard"  />
        </Box>

        <Box><Button variant="outlined" className='crud-button' onClick={() => setOpenDelete(true)}>Delete</Button></Box>
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
            onSelectionModelChange={(ids)=>{
              setSelectionModel(ids);
              console.log(ids);
            }}
          />
        </div>
      </div>

      <AddDialog onOpen={openAdd} onClose={handleClose} />
      <DeleteDialog onOpen={openDelete} onClose={handleClose} selectionLength={selectionModel.length} />

    </section>
      ):(
        <SignUp/>
      )}
    </>
  );
}

export default GridMain;