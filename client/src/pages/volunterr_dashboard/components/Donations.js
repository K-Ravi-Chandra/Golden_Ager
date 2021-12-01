import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../../../components/formUI/Textfield';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from "axios";
import { Container ,Stack  , Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled} from '@mui/styles';
import { red , green} from '@mui/material/colors';

const StyledSubmitButton = styled(Button)({
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
    color: 'white',
  });
function Row(props) {
    
    const { data } = props;
    const [updated , setUpdated] = React.useState(false)
    const [loading , setLoading] = React.useState(false)
  
    const [open, setOpen] = React.useState(false);

    console.log(data)

    const Accept  = async (values, props) =>{
      setLoading(true);
    
      const _id = data._id;
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

        await axios.post(
          "api/volunter/acceptDonations",
          {_id },
          config
        ).then(function(response) {
          setLoading(false);
          setUpdated(true);
          alert(response.data.success)
          return response;
        })
        .catch(function(error) {
          setLoading(false);
          alert(error.message);
        });
    }

   

  return (
    <React.Fragment>
      {updated ?  <></> : <> 

        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
         {data.firstName +' '+ data.lastName}
        </TableCell>    
        <TableCell align="right">{data.city}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      
          <Collapse in={open} timeout="auto" unmountOnExit>
            
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Donor Details
                <Typography gutterBottom component="div" sx={{p:2}}>
                  <b>Name</b>     :{data.firstName} 
                </Typography>
                <Typography  gutterBottom component="div" sx={{p:2}}>
                  <b>Phone No</b> :{data.phone} 
                </Typography>
                <Typography  gutterBottom component="div" sx={{p:2}}>
                  <b>Email </b> :{data.email} 
                </Typography>
                <Typography  gutterBottom component="div"sx={{p:2}}>
                  <b>Address</b> :{data.addressLine1} 
                                  {data.addressLine2 ?<>{', '} {data.addressLine2}</>:<></> } ,
                                  {data.state}
                </Typography>
                <Typography  gutterBottom component="div" sx={{p:2}}>
                  <b>Things Donated</b> :{data.thing} 
                </Typography>
              </Typography>
              {loading ? <LinearProgress sx={{marginBottom: 2}}/> :<></>}
              
              <Button onClick={Accept} variant = "contained">Accept</Button>
              
            </Box>
          </Collapse>
          </TableCell>
      </TableRow>
        
      </>}
      

    </React.Fragment>
  );
}


export default function Donations(props) {



const [data, setData] = React.useState([]);
const [donations , setDonations] = React.useState(false);
const [fetching , setFetching] = React.useState(true)
const [error , setError] =   React.useState(false)

React.useEffect(async () => {

    setError(false);
    setFetching(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

      await axios.post(
        "api/volunter/getDonations",
        {},
        config
      ).then(function(response) {
        setError(false); 
        setFetching(false);
        setData(response.data.donations)
        if(response.data.donations.length) setDonations(true)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });

  }, [])

  return (
    <div>
    {fetching ?  <LinearProgress/> : <>
    
      {error ? <Typography> An unknown Error</Typography>  : <>

      {donations ? <>
        <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <Row key={d._id} data={d} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </> : <Typography> At now there are no donations</Typography>}

       
       </>}
        
    </>}
    
    
   

  </div>
    
  );
}
