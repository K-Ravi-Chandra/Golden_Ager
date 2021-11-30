import React from 'react'
import { Grid, Box , Paper, Typography, makeStyles, Card, Button} from '@material-ui/core'
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import axios from "axios";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ElderlyRoundedIcon from '@mui/icons-material/ElderlyRounded';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles( theme =>({
    root : {
        background : '#fdffff'
    },
    profileShow : {
        padding:theme.spacing(3),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    profileIcon : {
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    profileTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle1':{
            opacity:'0.9'
        },
        '& .MuiTypography-subtitle2':{
            opacity:'0.5'
        },
        '& .MuiTypography-subtitle3':{
            opacity:'0.5'
        }
    }
}))


export default function FamilyProfile(props) {

    const [mydetails, setMydetails] = React.useState({});
    const [seniordetails, setSeniordetails] = React.useState({});
    const [seniorprofile, setSeniorprofile] = React.useState([]);
    const [volunterdetails, setVolunterdetails] = React.useState({});
    const [doctordetails, setDoctordetails] = React.useState({})
    const [fetching , setFetching] = React.useState(true)
    const [error , setError] =   React.useState(false)
  
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
          const email = response.data.details[0].senior
                     axios.post( 
                        "api/seniorcitizen/details",
                        {
                        email
                        },
                        config
                    ).then(function(response) {
                        
                        setSeniordetails(response.data.details)
                        setSeniorprofile(response.data.details.profile)
                        
                        let email = response.data.details.volunter
                        const doctor = response.data.details.doctor
 
                        axios.post( 
                            "api/familymember/volunteerdetails",
                            {
                                email
                            },
                            config
                          ).then(function(response) {
                            setVolunterdetails(response.data.volunter)
                            email = doctor
                            console.log(email)
                            axios.get(
                                "/api/doctor/getDetails",
                                {
                                    email
                                },
                                config
                              ).then(function(response) {
                                setError(false);
                                setFetching(false);
                                setDoctordetails(response.data.details)
                                console.log(response.data.details)
                                return response;
                              })
                              .catch(function(error) {
                                setError(true);
                                console.log(error.message)
                                setFetching(false);
                                console.log(error);
                              });
                            return response;
                          }).catch(function(error) {
                            setError(true);
                            setFetching(false);
                            console.log(error);
                        });
                        
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

    const classes = useStyles();

   
    


    return (
        <>

        
        {fetching ?  <LinearProgress/> : <>
    
            {error ? <Typography> An unknown Error</Typography>  : <>

                <Box sx={{width:'100%'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6} style={{padding:"20px"}}>
                            <Paper elevation={1} square className={classes.root}>
                                <div className={classes.profileShow}>
                                    <Card className={classes.profileIcon}>
                                        <PersonIcon fontSize="large"/>
                                    </Card>
                                    <div className={classes.profileTitle}>
                                        <Typography
                                            variant = "h6"
                                            component = "div"
                                        >
                                            <strong>Your Profile Details</strong>
                                        </Typography> 
                                        <Typography
                                            variant = "subtitle1"
                                            component = "div"
                                        >
                                            {mydetails.username}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle2"
                                            component = "div"
                                        >
                                            {mydetails.email}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle3"
                                            component = "div"
                                        >
                                            {mydetails.phone}
                                        </Typography>
                                        
                                    </div>
                                </div>
                            </Paper>
                            {/* <Button></Button> */}
                        </Grid>



                        <Grid item xs={12} md={6} style={{padding:"20px"}}>
                            <Paper elevation={1} square className={classes.root}>
                                <div className={classes.profileShow}>
                                    <Card className={classes.profileIcon}>
                                        <ElderlyRoundedIcon fontSize="large"/>
                                    </Card>
                                    <div className={classes.profileTitle}>
                                        <Typography
                                            variant = "h6"
                                            component = "div"
                                        >
                                            <strong>Senior Citizen Details</strong>
                                        </Typography>
                                        <Typography
                                            variant = "subtitle1"
                                            component = "div"
                                        >
                                            {seniorprofile.username}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle2"
                                            component = "div"
                                        >
                                            {seniordetails.email}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle3"
                                            component = "div"
                                        >
                                            {seniorprofile.phone}
                                        </Typography>
                                        
                                    </div>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6} style={{padding:"20px"}}>
                            <Paper elevation={1} square className={classes.root}>
                                <div className={classes.profileShow}>
                                    <Card className={classes.profileIcon}>
                                        <AdminPanelSettingsIcon fontSize="large"/>
                                    </Card>
                                    <div className={classes.profileTitle}>
                                        <Typography
                                            variant = "h6"
                                            component = "div"
                                        >
                                            <strong>Volunteer Details</strong>
                                        </Typography>
                                        <Typography
                                            variant = "subtitle1"
                                            component = "div"
                                        >
                                            {volunterdetails.username}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle2"
                                            component = "div"
                                        >
                                            {volunterdetails.email}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle3"
                                            component = "div"
                                        >
                                            {volunterdetails.phone}
                                        </Typography>
                                        
                                    </div>
                                </div>
                            </Paper>
                        </Grid>


                        <Grid item xs={12} md={6} style={{padding:"20px"}}>
                            <Paper elevation={1} square className={classes.root}>
                                <div className={classes.profileShow}>
                                    <Card className={classes.profileIcon}>
                                        <HealthAndSafetyIcon fontSize="large"/>
                                    </Card>
                                    <div className={classes.profileTitle}>
                                        <Typography
                                            variant = "h6"
                                            component = "div"
                                        >
                                            <strong>Doctor Details</strong>
                                        </Typography>
                                        <Typography
                                            variant = "subtitle1"
                                            component = "div"
                                        >
                                            {doctordetails.username}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle2"
                                            component = "div"
                                        >
                                            {doctordetails.email}
                                        </Typography>
                                        <Typography
                                            variant = "subtitle3"
                                            component = "div"
                                        >
                                            {doctordetails.phone}
                                        </Typography>
                                        
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </>}
        </>}

        </>
    )
}
