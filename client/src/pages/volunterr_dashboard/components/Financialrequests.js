import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import axios from "axios";
import { Typography } from '@mui/material';


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
      
        {error ? <Typography> An unknown Error</Typography> : <> {data.map((d) => <li key={d.date}>{d.name} , {d.email}, {d.phone}, {d.date}</li>)}</>}
      </>}
      
      
     

    </div>
  );
}