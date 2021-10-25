import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../landingpage/components/logo.png';
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const FamilyDashboard = () => {

  let history = useHistory();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [item, setItem] = React.useState('0')

const handleClick = (index) => {
  setItem(index)
  setMobileOpen(!mobileOpen);
}


const logout = () => {

    localStorage.removeItem("authToken");
    history.push("/");
}


  const renderSwitch = (item) => {
    switch(item) {
      case '0':
        return <div>My Family Health</div>;
      case '1':
        return  <div>Donate Money</div>;
      case '2':
        return  <div>Donate Senior Citizen Requirements</div>;
      case '3':
        return  <div>Notifications</div> ;
      case '4':
            return  <div>Your Profile ! Hello Family</div> ;
      default:
        return <div>Help Requests</div>;
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <Toolbar sx={{ toolbar: (theme) => theme.mixins.toolbar }}/>
      <Divider />
      <List>

          <ListItem selected= {item === '0'} button onClick={() => handleClick('0')} key= "My Family Health">
            <ListItemText 
            primaryTypographyProps={{
              fontSize: 18,
              letterSpacing: 0,
            }}
            primary= "My Family Health"/>
          </ListItem>
          <ListItem selected= {item === '1'} button onClick={() => handleClick('1')}  key= "Donate Money" >
          <ListItemText 
            primaryTypographyProps={{
              fontSize: 18,
              letterSpacing: 0,
            }} 
            primary= "Donate Money" />
          </ListItem>
          <ListItem selected= {item === '2'} button onClick={() => handleClick('2')}  key= "Donate Senior Citizen Requirements" >
          <ListItemText 
            primaryTypographyProps={{
              fontSize: 18,
              letterSpacing: 0,
            }}
             primary= "Donate Senior Citizen Requirements" />
          </ListItem>
          <ListItem selected= {item === '3'} button onClick={() => handleClick('3')}  key= "Notifications">
          <ListItemText 
            primaryTypographyProps={{
              fontSize: 18,
              letterSpacing: 0,
            }}
             primary= "Notifications" />
          </ListItem>

      </List>
      <Divider />
      <List>

          <ListItem selected= {item === '4'} button onClick={() => handleClick('4')}  key= "My Profile">
          <ListItemText 
            primaryTypographyProps={{
              fontSize: 18,
              letterSpacing: 0,
            }}
             primary= "My Profile"/>
          </ListItem>
          <ListItem button onClick={logout} key= " Logout" >
          <ListItemText 
            primaryTypographyProps={{
              fontSize: 18,
              letterSpacing: 0,
            }}
             primary= "Logout" />
          </ListItem>
      </List>
    </div>
  );



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo}/>
          <Typography variant="h6" noWrap component="div">
            Golden Ager
          </Typography>
        </Toolbar>


      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer

          variant="temporary"
          open={mobileOpen}
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
        {renderSwitch(item)}
      </Box>
    </Box>
  );
}

export default FamilyDashboard;

