import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Grid, Container, Typography,Card} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ThemeConfig from '../../../components/theme'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MoneyIcon from '@mui/icons-material/Money';

// 1) Financial Help ---------------------------------------------------------------

  const FinancialHelp_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(10, 0),
    color: theme.palette.info.darker,
    backgroundColor: theme.palette.info.lighter
  }));
  
  const FinancialHelp_IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
  function FinancialHelp_Card() {
    return (
      <FinancialHelp_RootStyle sx={{cursor : 'pointer'}} onClick={() => {console.log("Financial Help")}}>
        
          <FinancialHelp_IconWrapperStyle>
            <ConnectWithoutContactIcon sx={{ fontSize: 80 }} />
          </FinancialHelp_IconWrapperStyle>
        
          <Typography variant="h4"> Financial Help </Typography>

      </FinancialHelp_RootStyle>
    );
  }


// 2) Feeling Loneliness -----------------------------------------------------------------

  const FeelingLoneliness_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(10, 0),
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
          <MoneyIcon/>
        </FeelingLoneliness_IconWrapperStyle>

        <Typography variant="h4"> Feeling Loneliness </Typography>

      </FeelingLoneliness_RootStyle>
    );
  }

// 3) Health Checkup ----------------------------------------------------------------------

  const HealthCheckup_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(10, 0),
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
  
  function HealthCheckup_Card() {
    return (
      <HealthCheckup_RootStyle sx={{cursor : 'pointer'}} onClick={() => {console.log("Health Checkup")}}>

        <HealthCheckup_IconWrapperStyle>
            <PeopleIcon/>
        </HealthCheckup_IconWrapperStyle>

        <Typography variant="h4"> Health Checkup </Typography>

      </HealthCheckup_RootStyle>
    )
  }
 
// 4) Other Help ----------------------------------------------------------------------

  const OtherHelp_RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(10, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.lighter
  }));
  
  const OtherHelp_IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));
  
  function OtherHelp_Card() {
    return (
      <OtherHelp_RootStyle sx={{cursor : 'pointer'}} onClick={() => {console.log("Other Help")}}>

        <OtherHelp_IconWrapperStyle>
          <PeopleIcon/>
        </OtherHelp_IconWrapperStyle>

        <Typography variant="h4">Other Help</Typography>

      </OtherHelp_RootStyle>
    );
  }

//----------------------------------------------------------------

const DashboardPage = () => {
    return (
    <ThemeConfig>

      <Container maxWidth="xl">
        <Grid sx={{pt : 6}} container spacing={3}>

          <Grid item xs={12} sm={6}  md={3}>
                <FinancialHelp_Card/>
          </Grid>

          <Grid item xs={12} sm={6}  md={3}>
                <FeelingLoneliness_Card/>
          </Grid>

          <Grid item xs={12} sm={6}  md={3}>
                <HealthCheckup_Card/>
          </Grid>

          <Grid item xs={12} sm={6}  md={3}>
                <OtherHelp_Card/>
          </Grid>
          

        </Grid>
      </Container>       
        
    </ThemeConfig>
    )
}

export default DashboardPage