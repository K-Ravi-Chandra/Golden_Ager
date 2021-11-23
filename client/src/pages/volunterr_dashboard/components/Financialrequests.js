import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import axios from "axios";
import { Button,  Divider,  Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';
export default function SimpleAccordion() {

  const [data, setData] = React.useState([]);
  const [updated , setUpdated] = React.useState(false)
  //const [loading , setLoading] = React.useState(false)
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
      const volunteer = "Volunteer";

      await axios.get(
        "api/volunter/getfinancialrequests",
        {
          volunteer
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setData(response.data.requests)
        console.log(data)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });
      console.log(data);
  }, [])

  
 

  return (
    <div>
      {fetching ?  <LinearProgress/> : <>
      
        {error ? <Typography> An unknown Error</Typography>  : <>

        {
          updated ?  <></> : <>

         <div>
           <hr/>
          {data.map((d) =>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{d.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{p:2}}>
            Name:    {d.name}
          </Typography>
          <Typography sx={{p:2}}>
            Email :  {d.email} 
          </Typography>
          <Typography sx={{p:2}}>
            Mobile : {d.phone} 
          </Typography>
          <Typography sx={{p:2}}>
            Date :   {d.date} 
          </Typography>
          
          <Stack direction="row" spacing={1}>
          <Button color="primary" variant="contained" aria-label="add to shopping cart">
             <DoneIcon />Accept
          </Button>
          <Button variant="contained" aria-label="delete" color ="error">
             <ClearIcon />Reject
          </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
           )}
         </div>
         </>
        }
         </>}
        
          
      </>}
      
      
     

    </div>
  );
}