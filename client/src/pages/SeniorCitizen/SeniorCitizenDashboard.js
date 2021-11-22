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
import Profile from './components/Profile';



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



const SeniorCitizenDashboard = (props) => {
  const data = props.data
  
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

        <Link underline= "none" href="/profile">
        <AccountStyle >
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
        </Link>

      </Toolbar>
      
      </RootStyle>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        
        <Switch>
   
    <Route
          path="/dashboard"
          render = {props => <Dashboard {...props}  data={data}/>}
          key="Dashboard"
        />
        <Route
          path="/profile"
        
          render = {props => <Profile {...props}  data={data}/>}
          key="Profile"
        />
        
        <Redirect from="/" to="/dashboard" />
        
  </Switch>
      </Box>
    </Box>
      </ThemeConfig>
  )
}

export default SeniorCitizenDashboard







