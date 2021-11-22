import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation, NavLink } from 'react-router-dom';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, ListItem,Link ,Collapse, ListItemText, ListItemIcon, ListItemButton, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useHistory } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';



const Selected = (path) => {
  const { pathname } = useLocation();
  if(path === pathname) 
   return true 
  else 
   return false
}


const Navigation = () => {

  let history = useHistory();

  const { pathname } = useLocation();
  const logout = () => {

    localStorage.removeItem("authToken");
    history.push("/");
}
  return (
    <Box >
      <List>
          <ListItem  disablePadding selected={Selected("/dashboard")} component={NavLink} sx ={{color: 'text.primary'}} to= "/dashboard" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <DashboardIcon color = {Selected("/dashboard")? "primary" : "" }/>
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" fontSize={18} color = {Selected("/dashboard")? "primary" : "" } >
                    Dashboard
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          
          
          <ListItem disablePadding selected={Selected("/donate-money")} component={Link} sx ={{color: 'text.primary'}} href= "https://rzp.io/l/yt2s6Yf" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <AccountBalanceIcon color = {Selected("/donate-money")? "primary" : "" } />
              </ListItemIcon>

              <ListItemText>
                <Typography variant="body1" fontSize={18}  color = {Selected("/donate-money")? "primary" : "" }>
                Donate Money
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          
          
          <ListItem disablePadding selected={Selected( "/donate-requirements")} component={NavLink} sx ={{color: 'text.primary'}} to= "/donaterequirements" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <WheelchairPickupIcon color = {Selected("/donate-requirements")? "primary" : "" } />
              </ListItemIcon>
 
              <ListItemText>
                <Typography variant="body1" fontSize={18}  color = {Selected("/donate-requirements")? "primary" : "" }>
                Donate Requirements
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          
          
          <ListItem disablePadding selected={Selected("/notifications")} component={NavLink} sx ={{color: 'text.primary'}} to= "/notifications" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <NotificationsActiveIcon color = {Selected("/notifications")? "primary" : "" } />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" fontSize={18}  color = {Selected("/notifications")? "primary" : "" }>
                    Notifications
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          
          <hr />
          
          <ListItem disablePadding selected={Selected("/user")} component={NavLink} sx ={{color: 'text.primary'}} to= "/user" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <AccountBoxIcon color = {Selected("/user")? "primary" : "" } />
              </ListItemIcon>
              < ListItemText  >
                  <Typography variant="body1" fontSize={18}  color = {Selected("/user")? "primary" : "" }>
                  My Profile
                  </Typography>
                </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx ={{color: 'text.primary'}} >
            <ListItemButton sx={{p :2}}  onClick={logout}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              < ListItemText as={Typography} variant="body1" fontSize={18}  >
                  Logout
                </ListItemText>
            </ListItemButton>
          </ListItem>
        
        
        </List>
    </Box>
    )
}

export default Navigation
