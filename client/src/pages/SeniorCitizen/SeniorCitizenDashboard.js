import React from 'react'
import { useTheme,alpha, styled } from '@mui/material/styles';
import { Box, Grid, Container,CardHeader , Typography,Card} from '@mui/material';
import { Switch, Route, Redirect } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ThemeConfig from '../../components/theme'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Link} from '@mui/material';
import Logo from "../../components/logo.png"
import Dashboard from './components/Dashoard'
import {Avatar} from '@mui/material';

// const switchRoutes = (
//   <Switch>
   
//     <Route
//       path="/dashboard"
//       component= {Dashboard}
//       key="Dashboard"
//     />
    
//     <Redirect from="/" to="/dashboard" />
    
//   </Switch>
// );


const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 1.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const SeniorCitizenDashboard = () => {
  return (
    <ThemeConfig>
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <RootStyle
        elevation = {0}
        color = "inherit"
        position="fixed"
        sx={{
          pt : 2,
        }}
      >
      <Toolbar >   
      <Link underline="none" href="/">
            <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo} />
        </Link>  
        <Typography  variant="h3" sx={{ flexGrow: 1 , fontWeight : 50}}>
              <Link  underline="none" href="/dashboard">
                  Golden Ager
              </Link>
        </Typography>

        <AccountStyle>
          <Avatar {...stringAvatar('Ravi K')} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                Ravi Chandra
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Senior Citizen
              </Typography>
            </Box>
          </AccountStyle>

       

      </Toolbar>
      </RootStyle>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        
        <Dashboard/>
      </Box>
    </Box>
      </ThemeConfig>
  )
}

export default SeniorCitizenDashboard
