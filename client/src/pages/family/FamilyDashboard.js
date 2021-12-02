import * as React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

//
import Navigation from './components/Navigation';
import routes from './routes';
import Logo from '../landingpage/components/logo.png';
import MyFamilyHealth from './components/MyFamilyHealth';
import FamilyProfile from './components/FamilyProfile';
import FamilyNotifications from './components/FamilyNotifications';
import ThemeConfig from '../../components/theme';

const drawerWidth = 240;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  
}));

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {

        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );

    })}
    <Redirect from="/" to="/dashboard" />
  </Switch>
);

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));



const FamilyDashboard = (props) => {

  const data = props.data

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  //------------------------------------------------------------------


  const { pathname } = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      handleDrawerToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);



  const drawer = (
    <div>
      <Box sx={{ mb: 1, mx: 2.5 , mt : 2}}>
        <Link underline="none" component={Link} to="/">
          <AccountStyle>
          <Avatar />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {props.data.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Family Member
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>
      <Navigation/>
    </div>
  );



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
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar >

              <Link underline="none" href="/">
                <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo} />
              </Link>  
        
              <Typography  variant="h3" sx={{ flexGrow: 1 , fontWeight : 50}}>
                <Link  underline="none" href="/dashboard">
                  Golden&nbsp;Ager
                </Link>
              </Typography>

              <IconButton component={Link} href="/notifications" color="default">
                <NotificationsIcon />
              </IconButton>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr : 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

            </Toolbar>
          </RootStyle>
      
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
          
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
            <Drawer
              variant="temporary"
              open={mobileOpen}
              anchor={'right'}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {drawer}
            </Drawer>
      
          </Box>
      
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            
            <Switch>
              {routes.map(({component: Cmp, ...route}, key) => {
                return (
                  <Route
                    exact = {true}
                    {...route}
                    key={key}
                    render={props => <Cmp {...props}  data={data} />}
                  />
                );
              })}
                
                <Redirect from="/" to="/dashboard" />
              
              </Switch>
          </Box>

        </Box>

      </ThemeConfig>
  )
}

export default FamilyDashboard
 
 