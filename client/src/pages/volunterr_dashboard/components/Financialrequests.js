import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import axios from "axios";
import { Button,  Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {

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

  }, [])

  
  
 

  return (
    <div>
      {fetching ?  <LinearProgress/> : <>
      
        {error ? <Typography> An unknown Error</Typography>  : <>

         <div>
          {data.map((d) =>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><li key = {d.date}>{d.name}</li></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li key={d.date}><b>Name :</b>{d.name}</li> 
            <li key={d.date}><b>Email :</b>{d.email}</li>
            <li key={d.date}><b>Mobile No :</b>{d.phone}</li>
            <li key={d.date}><b>Date :</b>{d.date}</li>
            <b>Issue :</b>Need a volunteer to take me for health checkup<br/>
          </Typography>
          <Button variant="contained" color="success">Accept</Button>
          <Button variant="outlined" color="error">Reject</Button>
        </AccordionDetails>
      </Accordion>
           )}
         </div>
         </>}
          
      </>}
      
      
     

    </div>
  );
}