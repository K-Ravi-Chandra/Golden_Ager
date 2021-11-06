import { Container, Typography,Card, Grid, Stack, Link, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const UserProfilePage = (props) => {
    const data = {
        name : "Charan",
        email : "cs19b032@iittp.ac.in",
        phone : "9876543212",
        hospital : "Multispecality Hospital",
        address : "Near PR College , Main Road",
        date_joined : "05/11/21"
    }
    
    return (

            <Box sx={{ pb: 5 }}>
                <Typography variant="h6" >My Profile </Typography>
                <Paper  sx = {{p : 2}} elevation={2}>
                    <Stack spacing ={1}>
                        <Typography as ={Link} > Personal Information</Typography>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Name :  </Typography>
                            <Typography > {data.name}  </Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Phone :  </Typography>
                            <Typography> {data.phone} </Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Email :  </Typography>
                            <Typography> {data.email} </Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography >Date Joined :  </Typography>
                            <Typography>{data.date_joined}</Typography>
                        </Stack>


                        <Typography as ={Link} > Hospital Information</Typography>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Name :  </Typography>
                            <Typography>{data.hospital}</Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Phone :  </Typography>
                            <Typography> 9123491111 </Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Address :  </Typography>
                            <Typography>{data.address}</Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > City :  </Typography>
                            <Typography> Kakinada</Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > State :  </Typography>
                            <Typography> AP</Typography>
                        </Stack>
                        <Stack direction = 'row' spacing = {1}>
                            <Typography > Pincode :  </Typography>
                            <Typography> 533002</Typography>
                        </Stack>                       
                    </Stack>
                    
                </Paper>
            </Box>
    )
}

export default UserProfilePage
