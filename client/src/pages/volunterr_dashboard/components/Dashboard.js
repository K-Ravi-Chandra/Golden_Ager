import * as React from 'react';
import axios from "axios";
import { Avatar, Box, Card,CardContent,CardHeader, Grid,Container,LinearProgress, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useTheme,alpha, styled } from '@mui/material/styles';
import { merge } from 'lodash';
import ReactApexChart  from 'react-apexcharts';
import {BaseOptionChart} from '../../../components/charts'
//------------------------------------------------------------------
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
//financial requests pending : {financialrequests}{' '}
//         total requests : {totalfinancialrequests}{' '}
 //         seniorcitizens : {seniorcitizens} {' '}
//          total Donations : {donations}
//--------------const [financialrequests, setFinancialrequests] = React.useState('');
  //const [totalfinancialrequests, setTotalFinancialrequests] = React.useState('');
const Donationscard = (props) => (
  
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
            
          >
            Donations Recieved<br/>
          </Typography>
          
          <Typography
            color="textPrimary"
            variant="h4"
            sx = {{pt:2}}
          >
          {props.donations}
          </Typography>
         
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56 ,
              mx :2
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      
    </CardContent>
    </Card>
  
);


const RequestProgresscard = (props) => {
  const total = props.totalfinancialrequests
  const pend = props.financialrequests
  const perc = 100 - [(pend/total)*100]
  const per = Math.floor(perc)
  return (
    <div>
      <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              REQUESTS PROGRESS 
            </Typography>

            <Typography
              color="textPrimary"
              variant="h4"
            >
              {per}%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'warning.main',
                height: 56,
                width: 56
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress
            value={75.5}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
    </div>
  )
}




const Totalseniorcitizenscard = (props) => (
    <Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              TOTAL SENIOR CITIZENS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
              sx = {{pt : 2}}
            >
              {props.seniorcitizens}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'success.main',
                height: 56,
                width: 56
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          
        </Box>
      </CardContent>
    </Card>
  );
 const Totalmoneydonatedcard = (props) => (
    <Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              TOTAL MONEY SPENT FOR  REQUESTS 
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
            kkj
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                height: 56,
                width: 56
              }}
            >
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  //-----------------------------------------------------------

const Requests_Solved = 600;
const Total_Requests = 300;
const Total_Help_Requests = 1000;
const Total_Money_Requests = 400;

//-----------------------------------------------------------------------------------------
 const CHART_DATA = [Requests_Solved, Total_Help_Requests, Total_Requests, Total_Money_Requests];

 function PieChart() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main
    ],
    labels: ['Requests Solved', 'Total Requests', 'Help Requests', 'Money Requests'],
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
const Dashboard = (props) => {

  const [financialrequests, setFinancialrequests] = React.useState('');
  const [totalfinancialrequests, setTotalFinancialrequests] = React.useState('');
  const [seniorcitizens , SetSeniorCitizens] = React.useState('');
  const [donations , setDonations] = React.useState('');
   const [fetching , setFetching]  = React.useState(true)
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
      "api/volunter/getTotalDonations",
      {},
      config
    ).then(function(response) {
      setError(false); 
      setFetching(false);
      setDonations(response.data.donations.length)
      return response;
    })
    .catch(function(error) {
      setError(true);
      setFetching(false);
      console.log(error);
    });

}, [])


  React.useEffect(async () => {
    
    setError(false);
    setFetching(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
      const volunter = props.data.email;

      await axios.post(
        "/api/volunter/getSeniorCitizens",
        {
          volunter
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        SetSeniorCitizens(response.data.seniorcitizens.length)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });
  }, [])


  React.useEffect(async () => {
    
    setError(false);
    setFetching(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
      const volunter = props.data.email;

      await axios.post(
        "/api/volunter/getTotalFinancialRequests",
        {
          volunter
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setTotalFinancialrequests(response.data.requests.length)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });
  }, [])

  

  React.useEffect(async () => {
    
    setError(false);
    setFetching(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
      const volunter = props.data.email;

      await axios.post(
        "/api/volunter/getfinancialrequests",
        {
          volunter
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setFinancialrequests(response.data.requests.length)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });
  }, [])


    return (
        <>{fetching ? <LinearProgress/> : <>
            {error ? <>An Error Occurred! Please try again.</> : <>
            
              <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
          {/* financial requests pending : {financialrequests}{' '}
          total requests : {totalfinancialrequests}{' '}
          seniorcitizens : {seniorcitizens} {' '}
          total Donations : {donations} */}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}  md={4}>
          <Donationscard donations={donations} />
          </Grid>
          <Grid item xs={12}  md={4}>
          <RequestProgresscard financialrequests={financialrequests} totalfinancialrequests={totalfinancialrequests}/>
          </Grid>
          <Grid item xs={12}  md={4}>
          <Totalseniorcitizenscard seniorcitizens={seniorcitizens}/>
          </Grid>
          
          <Grid item xs={12}  md={12}>
             <PieChart financialrequests={financialrequests} totalfinancialrequests={totalfinancialrequests} />
          </Grid>
        </Grid>
      </Container>
        </>}
        </>}


        
        
        
        
        
        </>
    )
}

export default Dashboard