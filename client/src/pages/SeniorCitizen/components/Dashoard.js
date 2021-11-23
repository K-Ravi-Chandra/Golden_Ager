import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Grid, Container, Typography,Card, Button} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ThemeConfig from '../../../components/theme'
import MoneyIcon from '@mui/icons-material/Money';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AttributionIcon from '@mui/icons-material/Attribution';
import axios from "axios";
// 1) Financial Help ---------------------------------------------------------------

  const FinancialHelpRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.info.darker,
    backgroundColor: theme.palette.info.lighter
  }));
  
  const FinancialHelpIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
  function FinancialHelpCard(props) {

    const details = props.data
    const profile = props.profile

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
      
      }
      catch (error) {
        console.log(error.response.data)
      }
  
    }
    return (
      <FinancialHelpRootStyle sx={{cursor : 'pointer'}} onClick={FinancialHelp}>
        
          <FinancialHelpIconWrapperStyle>
            <MoneyIcon sx={{ fontSize: 80}} />
          </FinancialHelpIconWrapperStyle>
        
          <Typography variant="h6"> Financial Help </Typography>

      </FinancialHelpRootStyle>
    );
  }


// 2) Feeling Loneliness -----------------------------------------------------------------

  const FeelingLoneliness_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.warning.darker,
    backgroundColor: theme.palette.warning.lighter
  }));
  
  const FeelingLoneliness_IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
  function FeelingLoneliness_Card() {
    return (
      <FeelingLoneliness_RootStyle sx={{cursor : 'pointer'}} onClick={() => {console.log("Feeling Loneliness")}}>

        <FeelingLoneliness_IconWrapperStyle>
          <AttributionIcon sx={{ fontSize: 80 }}/>
        </FeelingLoneliness_IconWrapperStyle>

        <Typography variant="h6"> Feeling Loneliness </Typography>

      </FeelingLoneliness_RootStyle>
    );
  }

// 3) Health Checkup ----------------------------------------------------------------------


  

  const HealthCheckup_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.darker,
    backgroundColor: theme.palette.primary.lighter
  }));

  const HealthCheckup_IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
  function HealthCheckup_Card(props) {
    const data = props.data
    console.log(data)
    const HealthCheckup = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const name = data.name;
      const email = data.email;

      try {
        const fetch = await axios.post(
          "/api/seniorcitizen/details",
          {
            email
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

          alert(bookAppointment.data.data)
          
        } catch (error) {
          console.log(error.message)
        }
      } catch (error) {
        console.log(error.message)
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
    return (
      <HealthCheckup_RootStyle sx={{cursor : 'pointer'}} onClick={HealthCheckup}>

        <HealthCheckup_IconWrapperStyle>
            <LocalHospitalOutlinedIcon sx={{ fontSize: 80 }}/>
        </HealthCheckup_IconWrapperStyle>

        <Typography variant="h6"> Health Checkup </Typography>

      </HealthCheckup_RootStyle>
    )
  }
 
// 4) Request tHelp ----------------------------------------------------------------------

  
  const RequestHelpRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.lighter
  }));
  
  const RequestHelpIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
  function RequestHelpCard(props) {

    const details = props.data
    const profile = props.profile

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
      
      }
      catch (error) {
        console.log(error.response.data)
      }
  
    }

    return (
      <RequestHelpRootStyle  sx={{cursor : 'pointer'}} onClick={RequestHelp}>

        <RequestHelpIconWrapperStyle>
          <ConnectWithoutContactIcon sx={{ fontSize: 80 }}/>
        </RequestHelpIconWrapperStyle>

        <Typography variant="h6">Request Help</Typography>

      </RequestHelpRootStyle>
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