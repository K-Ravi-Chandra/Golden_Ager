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



function Row(props){ 

    const { data } = props;
    const [updated , setUpdated] = React.useState(false)
    const [loading , setLoading] = React.useState(false)

    const [open, setOpen] = React.useState(false);
   
    const Accept = async () => {

      setLoading(true);

      const _id = data._id;
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const status = "1";

      await axios.post(
        "api/volunter/updateFinancialRequest",
        {_id , status },
        config
      ).then(function(response) {
        setLoading(false);
        setUpdated(true);
        alert("Are You Sure ?")
        return response;
      })
      .catch(function(error) {
        setLoading(false);
        alert(error.message);
      });



    }

    const Reject = async () => {

      setLoading(true);

      const _id = data._id;
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const status = "-1";

      await axios.post(
        "api/volunter/updateFinancialRequest",
        {_id , status },
        config
      ).then(function(response) {
        setLoading(false);
        setUpdated(true);
        alert("Are You Sure ?")
        return response;
      })
      .catch(function(error) {
        setLoading(false);
        alert(error.message);
      });

    }

    return(
      <>

{
          updated ?  <></> : <>          
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{data.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{p:2}}>
            Name:    {data.name}
          </Typography>
          <Typography sx={{p:2}}>
            Email :  {data.email} 
          </Typography>
          <Typography sx={{p:2}}>
            Mobile : {data.phone} 
          </Typography>
          <Typography sx={{p:2}}>
            Date :   {data.date} 
          </Typography>
          
          <Stack direction="row" spacing={1}>
          <Button color="primary" variant="contained" aria-label="add to shopping cart" onClick={Accept}>
             <DoneIcon />Accept
          </Button>
          <Button variant="contained" aria-label="delete" color ="error" onClick={Reject}>
             <ClearIcon />Reject
          </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
   
         </>
        }

      </>
    )

}


export default function FinamcialRequests(props) {


  const [data, setData] = React.useState([]);
  const [requests , setRequests] = React.useState(false);
  const [updated , setUpdated] = React.useState(false)
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
      const volunter = props.data.email;

      await axios.post(
        "/api/volunter/getfinancialrequests",
        {
          volunter
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setData(response.data.requests)
        if(response.data.requests.length) setRequests(true)
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


          {requests ? <>
            {data.map((d) => (
            <Row key={d._id} data={d} />
          ))}
          
          </> : <Typography> You have done a great work! No financial requests pending</Typography>
          
          }
        
         </>}
        
          
      </>}
      
      
     

    </div>
  );
}