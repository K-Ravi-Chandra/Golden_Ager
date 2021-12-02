import { Container, Typography,Card,CardMedia, CardContent, Grid, Stack, Link, Paper } from '@mui/material'
import { Box  } from '@mui/system'
import React from 'react'
import axios from "axios";
import LinearProgress from '@mui/material/LinearProgress';

const UserProfilePage = (props) => {
    const { data } = props;
    const [details, setDetails] = React.useState([])

    const [fetching , setFetching] = React.useState(true)
    const [error , setError] =   React.useState(false)

    React.useEffect(async () => {


    setError(false);
    setFetching(true);

    const email = props.data.email;

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
      await axios.post(
        "/api/doctor/getDetails",
        {
            email
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setDetails(response.data.details)
        console.log(response.data.details)
        return response;
      })
      .catch(function(error) {
        setError(true);
        console.log(error.message)
        setFetching(false);
        console.log(error);
      });
  }, [])

    
    return (

            <Box sx={{ pb: 5 }}>
                {fetching ?  <LinearProgress/> : <>
    
                    {error ? <Typography> Please Try again Later</Typography>  : <>
                        <Typography variant="h6" >Your Profile </Typography>
                    <Stack spacing ={1}>

                      
                    
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Name&nbsp;:  </Typography>
                            <Typography > {details.username} </Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Phone&nbsp;:  </Typography>
                            <Typography>{details.phone}</Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Email&nbsp;:  </Typography>
                            <Typography>{details.email}</Typography>
                        </Stack>

                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Hospital&nbsp;:  </Typography>
                            <Typography>{details.hospital}</Typography>
                        </Stack>
                        
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Address&nbsp;:  </Typography>
                            <Typography>{details.hospitalAddress}</Typography>
                        </Stack>

                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Volunter&nbsp;Id&nbsp;:  </Typography>
                            <Typography>{details.volunter}</Typography>
                        </Stack>

                                      
                    </Stack>
                            </>} 
                </> }
              
                
                    
           
            </Box>
    )
}

export default UserProfilePage
