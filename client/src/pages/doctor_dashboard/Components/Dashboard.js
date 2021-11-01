import React from 'react'
import { useTheme,alpha, styled } from '@mui/material/styles';
import { Box, Grid, Container,CardHeader , Typography,Card} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { merge } from 'lodash';
import ReactApexChart  from 'react-apexcharts';
import {BaseOptionChart} from '../../../components/charts'

//---------------------------------------------------
 

const Healthy_Patients = 600;
const Total_Appointments = 300;
const Total_Patients = 1000;
const Total_Critical_Patients = 400

//-----------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [Healthy_Patients, Total_Patients, Total_Appointments, Total_Critical_Patients];

 function PieChart() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main
    ],
    labels: ['Healthy Patients', 'Total Patients', 'Appointments', 'Critical Patients'],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => seriesName,
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <Card>
      <CardHeader title="Statistics" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
      </ChartWrapperStyle>
    </Card>
  );
}



// ----------------------------------------------------------------------

const AppointmentsRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.warning.darker,
    backgroundColor: theme.palette.warning.lighter
  }));
  
  const AppointmentsIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.warning.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
      theme.palette.warning.dark,
      0.24
    )} 100%)`
  }));
  
function AppointmentsCard() {
    return (
      <AppointmentsRootStyle>
        <AppointmentsIconWrapperStyle>
          <PeopleIcon/>
        </AppointmentsIconWrapperStyle>
        <Typography variant="h3">{Total_Appointments}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Appointments
        </Typography>
      </AppointmentsRootStyle>
    );
  }

// ----------------------------------------------------------------------

const Total_PatientsRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.info.darker,
    backgroundColor: theme.palette.info.lighter
  }));
  
  const Total_PatientsIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.info.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
      theme.palette.info.dark,
      0.24
    )} 100%)`
  }));
  
  
  function Total_PatientsCard() {
    return (
      <Total_PatientsRootStyle>
        <Total_PatientsIconWrapperStyle>
          <PeopleIcon/>
        </Total_PatientsIconWrapperStyle>
        <Typography variant="h3">{Total_Patients}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Total Patients
        </Typography>
      </Total_PatientsRootStyle>
    );
  }

//----------------------------------------------------------------------

const Healthy_PatientsRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.darker,
    backgroundColor: theme.palette.primary.lighter
  }));

  const Healthy_PatientsIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
      theme.palette.primary.dark,
      0.24
    )} 100%)`
  }));
  
const Healthy_PatientsStyledCard = () => {
    return (
        <Healthy_PatientsRootStyle>
        <Healthy_PatientsIconWrapperStyle>
            <PeopleIcon/>
        </Healthy_PatientsIconWrapperStyle>
        <Typography variant="h3">{Healthy_Patients}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
            Healthy Patients
        </Typography>
    </Healthy_PatientsRootStyle>
    )
}
  
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const Critical_PatientsRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.lighter
  }));
  
  const Critical_PatientsIconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.error.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
      theme.palette.error.dark,
      0.24
    )} 100%)`
  }));
  
  // ----------------------------------------------------------------------
  
 
 function Critical_PatientsCard() {
    return (
      <Critical_PatientsRootStyle>
        <Critical_PatientsIconWrapperStyle>
          <PeopleIcon/>
        </Critical_PatientsIconWrapperStyle>
        <Typography variant="h3">{Total_Critical_Patients}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
           Critical Patients
        </Typography>
      </Critical_PatientsRootStyle>
    );
  }

//----------------------------------------------------------------
const DashboardPage = () => {
    return (
        <>

<Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}  md={3}>
          <Total_PatientsCard/>
          </Grid>
          <Grid item xs={12}  md={3}>
          <Healthy_PatientsStyledCard  />
          </Grid>
          <Grid item xs={12}  md={3}>
          <Critical_PatientsCard/>
          </Grid>
          <Grid item xs={12}  md={3}>
                <AppointmentsCard/>
          </Grid>
          <Grid item xs={12}  md={12}>
                <PieChart/>
          </Grid>

        </Grid>
      </Container>
        
        
        
        
        
        
        </>
    )
}

export default DashboardPage
