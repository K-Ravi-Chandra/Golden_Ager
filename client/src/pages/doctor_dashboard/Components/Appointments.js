import * as React from 'react';
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

const StyledSubmitButton = styled(Button)({
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
    color: 'white',
  });
function Row(props) {
    
    const { data } = props;
    const [loading , setLoading] = React.useState(false)
  
    const [open, setOpen] = React.useState(false);

    const onSubmit  = async (values, props) =>{
      const {  problem , status, advice , solution }  = values
      const _id = data._id;
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

        await axios.post(
          "api/doctor/updateAppointment",
          {_id , problem , status, advice , solution },
          config
        ).then(function(response) {
          alert(response.data.success)
          return response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    const INITIAL_FORM_STATE = {
        problem: '',
        advice : '',
        status : '',
        solution : ''
    }
    const FORM_VALIDATION = Yup.object().shape({

        advice : Yup.string()
        .required('Required'),
        status : Yup.string()
        .required('Required'),
        solution : Yup.string()
        .required('Required'),
        problem : Yup.string()
        .required('Required')
    });

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
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Update details
              </Typography>
              <Container maxWidth="md">

              <Formik
                                            initialValues={{
                                              ...INITIAL_FORM_STATE
                                            }}
                                            validationSchema={FORM_VALIDATION}
                                            onSubmit={onSubmit}
                                          >
                                            <Form>

                                              <Grid container spacing={2} rowSpacing = {2}>


                                                <Grid item xs={12}>
                                                  <Textfield
                                                  
                                                  disabled = {loading}
                                                    name="problem"
                                                    label="Problem"
                                                  />
                                                </Grid>

                                                <Grid item xs={12}>
                                                  <Textfield
                                                  
                                                  disabled = {loading}
                                                    name="status"
                                                    label="Status"
                                                  />
                                                </Grid>

                                                <Grid item xs={12}>
                                                  <Textfield
                                                  
                                                  disabled = {loading}
                                                    name="advice"
                                                    label="Advice"
                                                  />
                                                </Grid>

                                                <Grid item xs={12}>
                                                  <Textfield
                                                 
                                                    disabled = {loading}
            
                                                    name="solution"
                                                    label="Solution"
                                                  />
                                                </Grid>


                                            </Grid>

                                            <Stack
                                                sx={{ p: 2}}
                                                direction="row"
                                                spacing={2}
                                                justifyContent="center"
                                              >
                                                <StyledSubmitButton variant="contained" type = "submit" disabled={loading} >{loading ? 'Loading...' : 'Update'}</StyledSubmitButton>
                                            </Stack>

                                          </Form>
                                      </Formik>

              </Container>
              
            </Box>
          </Collapse>
          </TableCell>
      </TableRow>

    </React.Fragment>
  );
}


export default function Appointments(props) {



const [data, setData] = React.useState([]);
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
    const doctor = props.data.email;

      await axios.post(
        "api/doctor/getAppointments",
        {
          doctor
        },
        config
      ).then(function(response) {
        setError(false); 
        setFetching(false);
        setData(response.data.requests)
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
            <TableCell>Patient&nbsp;Name</TableCell>
            <TableCell align="right">Date</TableCell>
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
    
  );
}
