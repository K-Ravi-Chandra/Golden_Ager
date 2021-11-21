import React from 'react'
import { Grid, Box , Paper, Typography, makeStyles, Card, Button} from '@material-ui/core'
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';


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


export default function FamilyProfile() {

    const classes = useStyles();

    return (
        <Box sx={{width:'100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} style={{padding:"20px"}}>
                    <Paper elevation={1} square className={classes.root}>
                        <div className={classes.profileShow}>
                            <Card className={classes.profileIcon}>
                                <PersonIcon />
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
                                    {"MK Rao"}
                                </Typography>
                                <Typography
                                    variant = "subtitle2"
                                    component = "div"
                                >
                                    {"mkrao@gmail.com"}
                                </Typography>
                                <Typography
                                    variant = "subtitle3"
                                    component = "div"
                                >
                                    {"9999999999"}
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
                                <PersonIcon />
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
                                    {"TT Pal"}
                                </Typography>
                                <Typography
                                    variant = "subtitle2"
                                    component = "div"
                                >
                                    {"ttpak@gmail.com"}
                                </Typography>
                                <Typography
                                    variant = "subtitle3"
                                    component = "div"
                                >
                                    {"88888888888"}
                                </Typography>
                                
                            </div>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} style={{padding:"20px"}}>
                    <Paper elevation={1} square className={classes.root}>
                        <div className={classes.profileShow}>
                            <Card className={classes.profileIcon}>
                                <PersonIcon />
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
                                    {"Ram"}
                                </Typography>
                                <Typography
                                    variant = "subtitle2"
                                    component = "div"
                                >
                                    {"ram@service.com"}
                                </Typography>
                                <Typography
                                    variant = "subtitle3"
                                    component = "div"
                                >
                                    {"7777777777"}
                                </Typography>
                                
                            </div>
                        </div>
                    </Paper>
                </Grid>


                <Grid item xs={12} md={6} style={{padding:"20px"}}>
                    <Paper elevation={1} square className={classes.root}>
                        <div className={classes.profileShow}>
                            <Card className={classes.profileIcon}>
                                <PersonIcon />
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
                                    {"Dr. Shyam"}
                                </Typography>
                                <Typography
                                    variant = "subtitle2"
                                    component = "div"
                                >
                                    {"shyam@gmail.com"}
                                </Typography>
                                <Typography
                                    variant = "subtitle3"
                                    component = "div"
                                >
                                    {"9898989898"}
                                </Typography>
                                
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}
