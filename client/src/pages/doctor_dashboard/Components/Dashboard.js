import React from 'react'
import { useTheme,alpha, styled } from '@mui/material/styles';
import { Box, Grid, Container,CardHeader , Typography,Card} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import axios from "axios";
import { merge } from 'lodash';
import ReactApexChart  from 'react-apexcharts';
import {BaseOptionChart} from '../../../components/charts'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
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

 function PieChart(props) {
  const theme = useTheme();

  const CHART_DATA = [props.patients, props.totalappointments, props.appointments];

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      
      theme.palette.info.main,
      theme.palette.primary.main,
      theme.palette.warning.main,
    ],
    labels: [ 'Total Patients', 'Total Appointments', 'Appointments'],
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
  
function AppointmentsCard(props) {
    return (
      <AppointmentsRootStyle>
        <AppointmentsIconWrapperStyle>
          <MedicationIcon/>
        </AppointmentsIconWrapperStyle>
        <Typography variant="h3">{props.appointments}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Pending Appointments
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
  
  
  function Total_PatientsCard(props) {
    return (
      <Total_PatientsRootStyle>
        <Total_PatientsIconWrapperStyle>
          <PeopleIcon/>
        </Total_PatientsIconWrapperStyle>
        <Typography variant="h3">{props.patients}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Total Patients
        </Typography>
      </Total_PatientsRootStyle>
    );
  }

//----------------------------------------------------------------------

const TotalAppointmentsRootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.darker,
    backgroundColor: theme.palette.primary.lighter
  }));

  const TotalAppointmentsIconWrapperStyle = styled('div')(({ theme }) => ({
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
  
const TotalAppointmentsCard = (props) => {
    return (
        <TotalAppointmentsRootStyle>
        <TotalAppointmentsIconWrapperStyle>
            <LocalHospitalIcon/>
        </TotalAppointmentsIconWrapperStyle>
        <Typography variant="h3">{props.totalappointments}</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Total Appointments
        </Typography>
    </TotalAppointmentsRootStyle>
    )
}
  
// ----------------------------------------------------------------------

const DashboardPage = (props) => {
    
const [patients, setPatients] = React.useState([]);
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

    const doctor = props.data.email;
    console.log(doctor)

      await axios.post(
        "/api/doctor/getPatients",
        {
          doctor
        },
        config
      ).then(function(response) {
        setError(false); 
        setFetching(false);
        setPatients(response.data.patients)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });

      

  }, [])

  const [appointments, setAppointments] = React.useState([]);

 React.useEffect(async () => {

    setError(false);
    setFetching(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const doctor = props.data.email;

      await axios.post(
        "api/doctor/getAppointments",
        {
          doctor
        },
        config
      ).then(function(response) {
        setError(false); 
        setFetching(false);
        setAppointments(response.data.requests)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });

  }, [])

  const [totalappointments, setTotalAppointments] = React.useState([]);

  React.useEffect(async () => {
 
     setError(false);
     setFetching(true);
 
     const config = {
       header: {
         "Content-Type": "application/json",
       },
     };
     const doctor = props.data.email;
 
       await axios.post(
         "api/doctor/getTotalAppointments",
         {
           doctor
         },
         config
       ).then(function(response) {
         setError(false); 
         setFetching(false);
         setTotalAppointments(response.data.requests)
         return response;
       })
       .catch(function(error) {
         setError(true);
         setFetching(false);
         console.log(error);
       });
 
   }, [])


    return (
        <>

<Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}  md={4}>
          <Total_PatientsCard patients = {patients.length}/>
          </Grid>
          <Grid item xs={12}  md={4}>
          <TotalAppointmentsCard totalappointments={totalappointments.length} />
          </Grid>

          <Grid item xs={12}  md={4}>
                <AppointmentsCard appointments={appointments.length}/>
          </Grid>
          <Grid item xs={12}   md={12}>
                <PieChart patients = {patients.length} totalappointments={totalappointments.length} appointments={appointments.length} />
          </Grid>

        </Grid>
      </Container>
        
        
        
        
        
        
        </>
    )
}

export default DashboardPage
