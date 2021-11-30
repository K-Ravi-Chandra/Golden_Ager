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
  const [open, setOpen] = React.useState(false);

return (
  <React.Fragment>
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
       {data.name}
      </TableCell>    
      <TableCell align="right">{data.date}</TableCell>
      <TableCell align="right">{data.status}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
    
        <Collapse in={open} timeout="auto" unmountOnExit>
          
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Details
            </Typography>

            <Typography variant="body1">
              Problem : {data.problem}
            </Typography>
            <Typography variant="body1">
              Solution : {data.solution}
            </Typography>
            <Typography variant="body1">
              Advice : {data.advice}
            </Typography>
            
            
          
          </Box>
        </Collapse>
        </TableCell>
    </TableRow>
  </React.Fragment>
);
}


export default function MyFamilyHealth(props) {
    const [mydetails, setMydetails] = React.useState({});
    const [fetching , setFetching] = React.useState(true)
    const [error , setError] =   React.useState(false)
    const [data, setData] = React.useState([]);
  
    React.useEffect(async () => {

      const email = props.data.email
      setError(false);
      setFetching(true);
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
        await axios.post( 
          "api/familymember/getMyDetails",
          {
            email
          },
          config
        ).then(function(response) {
          setMydetails(response.data.details[0])           
          const email = response.data.details[0].senior;
          axios.post(
        "api/familymember/getAppointmentsData",
        {
          email
        },
        config
      ).then(function(response) {
        setError(false); 
        setFetching(false);
        setData(response.data.requests)
        console.log(response.data.requests)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });
          

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

      <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Date</TableCell>
          <TableCell align="right">Problem</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((d) => (
          <Row key={d._id} data={d} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
     </>}
      
  </>}
  
  
 

            
        </div>
    )
}
