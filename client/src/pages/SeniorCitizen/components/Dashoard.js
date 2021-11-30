import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Grid, Container, Typography,Card, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ThemeConfig from '../../../components/theme'
import MoneyIcon from '@mui/icons-material/Money';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AttributionIcon from '@mui/icons-material/Attribution';
import axios from "axios";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTheme } from '@material-ui/core/styles';


// 1) Financial Help ---------------------------------------------------------------

// ------------------i) Creating a styled Component FinancialHelpRootStyle using card component of MUI
  const FinancialHelpRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.info.darker,
    backgroundColor: theme.palette.info.lighter
  }));
  
// ------------------ii) Creating a styled Component FinancialHelpIconWrapperStyle using card component of MUI
  const FinancialHelpIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
// ------------------iii) code for Financial Help component in dashboard   
  function FinancialHelpCard(props) {

    const details = props.data
    const profile = props.profile

    const [openDialog, setOpenDialog] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [pad, setPad] = React.useState(6);
    const handleCloseDialog = () => {
      setOpenDialog(false);
    }
    const theme = useTheme();

    //ONCLICK LISTENER functionality for the Financial Help component
    const FinancialHelp = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const name = profile.username
      const email = details.email
      const phone = profile.phone
      const volunter  = details.volunter
  
      try{
        const financialHelp = await axios.post(
          "/api/help/financialhelp",
          {
            name ,email, phone,volunter
          },
          config
        );
        console.log("Request Sent ");
        setIsSuccess(true);
        setPad(0);
        setOpenDialog(true);
      }
      catch (error) {
        console.log(error.response.data);
        setOpenDialog(true);
      }
  
    }
  
    return (//returning JSX code for the component 
      <>
      {/*--------------Component code---------------------*/}
      <FinancialHelpRootStyle sx={{cursor : 'pointer'}} onClick={FinancialHelp}>
        
          <FinancialHelpIconWrapperStyle>
            <MoneyIcon sx={{ fontSize: 80}} />
          </FinancialHelpIconWrapperStyle>
        
          <Typography variant="h6"> Financial Help </Typography>

      </FinancialHelpRootStyle>

      {/*------Dialog popup to notify if the component action was successful----*/}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        {/* <DialogTitle id="alert-dialog-title">
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                <h1><center>{isSuccess?"Success":"Error"}</center> </h1>
                <center>
                  {isSuccess ?
                      <CheckCircleIcon style={{color: "#26FF00", fontSize:"6em"}}/>
                      :<CancelIcon style={{color: "#FF0000", fontSize:"6em"}}/>
                  }
                </center>
                <br />
                <div style={{paddingLeft: theme.spacing(pad), paddingRight: theme.spacing(pad)}}>
                    <strong>
                      {
                        isSuccess
                          ?"Your voulnteer will arrange for your support soon"
                          :"Oops!!  Something went wrong"
                      }
                    </strong>
                </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </>
    );
  }


// 2) Feeling Loneliness -----------------------------------------------------------------

// ------------------i) Creating a styled Component FeelingLonliness_RootStyle using card component of MUI
  const FeelingLoneliness_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.warning.darker,
    backgroundColor: theme.palette.warning.lighter
  }));

// ------------------ii) Creating a styled Component FeelingLonliness_IconWrapperStyle using card component of MUI
  
  const FeelingLoneliness_IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));

  

  function FeelingLoneliness_Card(props) {
    const data = props.data

    const [openDialog, setOpenDialog] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [pad, setPad] = React.useState(6);
    const handleCloseDialog = () => {
      setOpenDialog(false);
    }

    const SendNotifications = async () => {
      
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      
      const email = data.email;


        try {

          const sendNotification =  await axios.post(
            "api/seniorcitizen/sendNotifications",
            {
               email
            },
            config
          )

          setOpenDialog(true);
          setIsSuccess(true);
          setPad(0);
          
        } catch (error) {
          console.log(error.message)
        }
      }

      const theme = useTheme();
    return (

      <>
      <FeelingLoneliness_RootStyle sx={{cursor : 'pointer'}} onClick={SendNotifications}>

        <FeelingLoneliness_IconWrapperStyle>
          <AttributionIcon sx={{ fontSize: 80 }}/>
        </FeelingLoneliness_IconWrapperStyle>

        <Typography variant="h6"> Feeling Loneliness </Typography>

      </FeelingLoneliness_RootStyle>


      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >



        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                <h1><center>{isSuccess?"Success":"Error"}</center> </h1>
                <center>
                  {isSuccess ?
                      <CheckCircleIcon style={{color: "#26FF00", fontSize:"6em"}}/>
                      :<CancelIcon style={{color: "#FF0000", fontSize:"6em"}}/>
                  }
                </center>
                <br />
                <div style={{paddingLeft: theme.spacing(pad), paddingRight: theme.spacing(pad)}}>
                    <strong>

                      {isSuccess
                        ?"Don't feel bad, your family members will meet you soon"
                        :"Oops!!  Something went wrong"

                      }
                    </strong>
                </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      </>

    );
  }

// 3) Health Checkup ----------------------------------------------------------------------


  
// ------------------i) Creating a styled Component HealthCheckup_RootStyle using card component of MUI
  const HealthCheckup_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.darker,
    backgroundColor: theme.palette.primary.lighter
  }));

  // ------------------ii) Creating a styled Component HealthCheckup_IconWrapperStyle using card component of MUI
  const HealthCheckup_IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
// ------------------iii) code for HealthCheckup component as card in dashboard
  function HealthCheckup_Card(props) {
    const data = props.data
    const profile = data.profile;
    
    const [openDialog, setOpenDialog] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [pad, setPad] = React.useState(6);
    const handleCloseDialog = () => {
      setOpenDialog(false);
    }
    const theme = useTheme();

    //ONCLICK LISTENER functionality for the HealthCheckup component
    const HealthCheckup = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const name = profile.username;
      const email = data.email;

      try {
        const fetch = await axios.post(
          "/api/seniorcitizen/details",
          {
            name,email
          },
          config
        )
        
        const doctor = fetch.data.details.doctor

        try {
          const bookAppointment =  await axios.post(
            "/api/seniorcitizen/bookAppointment",
            {
              name, email, doctor
            },
            config
          )

          // alert(bookAppointment.data.data)
          //successful
          setOpenDialog(true);
          setIsSuccess(true);
          setPad(0);
          
        } catch (error) {
          console.log(error.message);
          setOpenDialog(true);
          //error
        }
      } catch (error) {
        console.log(error.message);
        setOpenDialog(true);
        //error
      }

      //  try{
      //   const financialHelp = await axios.post(
      //     "/api/help/financialhelp",
      //     {
      //       name, email
      //     },
      //     config
      //   );
      //   console.log("Request Sent ");
      
      // }
      // catch (error) {
      //    console.log(error.response.data)
      //  }
  
    }
    return (//returning JSX code for the component
      <>

            {/*--------------Component code---------------------*/}

      <HealthCheckup_RootStyle sx={{cursor : 'pointer'}} onClick={HealthCheckup}>

        <HealthCheckup_IconWrapperStyle>
            <LocalHospitalOutlinedIcon sx={{ fontSize: 80 }}/>
        </HealthCheckup_IconWrapperStyle>

        <Typography variant="h6"> Health Checkup </Typography>

      </HealthCheckup_RootStyle>

      
        {/*------Dialog popup to notify if the component action was successful----*/}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        {/* <DialogTitle id="alert-dialog-title">
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                <h1><center>{isSuccess?"Success":"Error"}</center> </h1>
                <center>
                  {isSuccess ?
                      <CheckCircleIcon style={{color: "#26FF00", fontSize:"6em"}}/>
                      :<CancelIcon style={{color: "#FF0000", fontSize:"6em"}}/>
                  }
                </center>
                <br />
                <div style={{paddingLeft: theme.spacing(pad), paddingRight: theme.spacing(pad)}}>
                    <strong>
                      {
                        isSuccess
                          ?"Take care, Your doctor will contact you soon"
                          :"Oops!!  Something went wrong"
                      }
                    </strong>
                </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      </>
    )
  }
 
// 4) Request Help ----------------------------------------------------------------------

// ------------------i) Creating a styled Component RequestRootStyle using card component of MUI  
  const RequestHelpRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.lighter
  }));

// ------------------ii) Creating a styled Component RequestHelpIconWrapperStyle using card component of MUI  
  const RequestHelpIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));

// ------------------iii) code for RequestHelp component as Card in dashboard     
  function RequestHelpCard(props) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const details = props.data
    const profile = props.profile
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [pad, setPad] = React.useState(6);

    //ONCLICK LISTENER functionality for the Financial Help component
    const RequestHelp = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const name = profile.username
      const email = details.email
      const phone = profile.phone
      const volunter  = details.volunter
      const doctor = details.doctor
  
      try{
        const requestHelp = await axios.post(
          "/api/help/normalhelp",
          {
            name ,email, phone,volunter, doctor
          },
          config
        );
        console.log("Request Sent");
        setIsSuccess(true);
        setPad(0);
      }
      catch (error) {
        console.log(error.response.data);
      }
      setOpenDialog(true);
    }

    const handleCloseDialog = () => {
      setOpenDialog(false);
    }

    
    const theme = useTheme();

    return (//returning JSX code for the component
      <>
            
            {/*--------------Component code---------------------*/}

      <RequestHelpRootStyle  sx={{cursor : 'pointer'}} onClick={RequestHelp}>

        <RequestHelpIconWrapperStyle>
          <ConnectWithoutContactIcon sx={{ fontSize: 80 }}/>
        </RequestHelpIconWrapperStyle>

        <Typography variant="h6">Request Help</Typography>

      </RequestHelpRootStyle>

    {/*------Dialog popup to notify if the component action was successful----*/}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        {/* <DialogTitle id="alert-dialog-title">
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                <h1><center>{isSuccess?"Success":"Error"}</center> </h1>
                <center>
                  {isSuccess ?
                      <CheckCircleIcon style={{color: "#26FF00", fontSize:"6em"}}/>
                      :<CancelIcon style={{color: "#FF0000", fontSize:"6em"}}/>
                  }
                </center>
                <br />
                <div style={{paddingLeft: theme.spacing(pad), paddingRight: theme.spacing(pad)}}>
                    <strong>
                      {isSuccess
                        ?"Your Request has been stored successfully"
                        :"Oops!!  Something went wrong"
                      }
                    </strong>
                </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </>
    );
  }

//----------------------------------------------------------------

const DashboardPage = (props) => {

  const email = props.data.email

  const [details, setDetails] = React.useState([]);
  const [profile, setprofile] = React.useState([]);

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
      await axios.post( 
        "api/seniorcitizen/details",
        {
          email
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setDetails(response.data.details)
        setprofile(response.data.details.profile)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });

  }, [])



    return (
    <ThemeConfig>


      <Container maxWidth="xl">
        <Grid sx={{pt : 6}} container spacing={3}>

          <Grid item xs={12} sm={6}  md={3}>
                <FinancialHelpCard data={details} profile={profile}/>
          </Grid>

          <Grid item xs={12} sm={6}  md={3}>
                <FeelingLoneliness_Card data={details}/>
          </Grid>

          <Grid item xs={12} sm={6}  md={3}>
                <HealthCheckup_Card data={details}/>
          </Grid>

          <Grid item xs={12} sm={6}  md={3}>
                <RequestHelpCard data={details}   profile={profile}/>
          </Grid>
          

        </Grid>
      </Container>       
        
    </ThemeConfig>
    )
}

export default DashboardPage