import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Box, Typography} from '@mui/material';
import { Switch, Route, Redirect } from "react-router-dom";
import ThemeConfig from '../../components/theme'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Link} from '@mui/material';
import Logo from "../../components/logo.png"
import Dashboard from './components/Dashoard'
import {Avatar} from '@mui/material';

const switchRoutes = (
  <Switch>
   
    <Route
      path="/dashboard"
      component= {Dashboard}
      key="Dashboard"
    />
    
    <Redirect from="/" to="/dashboard" />
    
  </Switch>
);


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

  
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  

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

const SeniorCitizenDashboard = (props) => {
  console.log(props)
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
          <Avatar />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {props.data.name}
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
        
        {switchRoutes}
      </Box>
    </Box>
      </ThemeConfig>
  )
}

export default SeniorCitizenDashboard







