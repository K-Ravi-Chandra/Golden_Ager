import * as React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme,  alpha, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Card, CardHeader,  Link} from '@mui/material';
import Logo from "../../components/logo.png"
import { grey } from '@mui/material/colors';
import Navigation from './Components/Navigation';
import ThemeConfig from './theme'
//---------------
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


//---------------------------------------------------------------

const drawerWidth = 240;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  
}));



// ----------------------------------------------------------------------


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
  marginTop : 5,
  display: 'flex',
  alignItems: 'center',
  padding: 15,
  borderRadius: 15,
  backgroundColor: grey[100]
}));

const DoctorDashboard = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //------------------------------------------------------------------
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  //------------------------------------------------------------------


  const { pathname } = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      handleDrawerToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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

  const drawer = (
    <div>


      <Box sx={{ mb: 1, mx: 2.5 , mt : 2}}>
        <Link underline="none" component={Link} to="/">
          <AccountStyle>
          <Avatar {...stringAvatar('Charan P')} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                Charan Palepu
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Doctor
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
        <Typography  variant="h3" sx={{ flexGrow: 1 , fontWeight : 5}}>
              <Link  underline="none" href="/dashboard">
                  Golden Ager
              </Link>
        </Typography>

        <IconButton component={Link} href="/notifications" color="default">
            <Badge  badgeContent={99} color="error">
            <NotificationsIcon />
          </Badge>
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
        
        {switchRoutes}
      </Box>
    </Box>
      </ThemeConfig>

      

  )
}

export default DoctorDashboard
 
 