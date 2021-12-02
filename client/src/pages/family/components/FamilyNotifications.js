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
import { red , green, lightGreen} from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@emotion/react';



export default function FamilyNotifications(props) {
    const [mydetails, setMydetails] = React.useState({});
    const [fetching , setFetching] = React.useState(true)
    const [error , setError] =   React.useState(false)
    const [data, setData] = React.useState([]);
    const theme = useTheme();
    const backGroundGreen = green['A100'];
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
        "api/familymember/getNotifications",
        {
          email
        },
        config
      ).then(function(response) {
        setError(false); 
        setFetching(false);
        setData(response.data.requests.reverse())
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

{fetching ?  <LinearProgress/> : <><h2>Notifications</h2>
    
    {error ? <Typography> An unknown Error</Typography>  : <>

      {
        
        data.map((d) =><>
        
          <Paper elevation={1} square style={{margin : theme.spacing(0.5)}}>
              
              <Typography style={{paddingTop : theme.spacing(1), paddingLeft : theme.spacing(1)}}>
                Your registered senior citizen is feeling low , please talk and cheer him up
              </Typography>
             
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right" style={{paddingRight : theme.spacing(2), paddingBottom :theme.spacing(2) }}>
                <strong>{d.date.slice(0,10)}</strong>
              </Typography>
           
              
          </Paper>
        </>
      )
      }

     </>}
      
  </>}
  
  
 

            
        </div>
    )
}
