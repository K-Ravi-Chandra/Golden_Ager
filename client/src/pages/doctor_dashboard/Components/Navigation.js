import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation, NavLink } from 'react-router-dom';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, ListItem,Link ,Collapse, ListItemText, ListItemIcon, ListItemButton, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useHistory } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
// ----------------------------------------------------------------------



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
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  const logout = () => {

    localStorage.removeItem("authToken");
    history.push("/");
}
  return (
    <Box >
      <List>
          <ListItem disablePadding selected={Selected("/dashboard")} component={NavLink} sx ={{color: 'text.primary'}} to= "/dashboard" >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon color = {Selected("/dashboard")? "primary" : "" }/>
              </ListItemIcon>
              <ListItemText>
                <Typography color = {Selected("/dashboard")? "primary" : "" } >
                    Dashboard
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected={Selected("/patients")} component={NavLink} sx ={{color: 'text.primary'}} to= "/patients" >
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon color = {Selected("/patients")? "primary" : "" } />
              </ListItemIcon>

              <ListItemText>
                <Typography color = {Selected("/patients")? "primary" : "" }>
                Patients
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected={Selected( "/criticalpatients")} component={NavLink} sx ={{color: 'text.primary'}} to= "/criticalpatients" >
            <ListItemButton>
              <ListItemIcon>
                <MedicalServicesIcon color = {Selected("/criticalpatients")? "primary" : "" } />
              </ListItemIcon>
 
              <ListItemText>
                <Typography color = {Selected("/criticalpatients")? "primary" : "" }>
                Critical Patients
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected={Selected("/notifications")} component={NavLink} sx ={{color: 'text.primary'}} to= "/notifications" >
            <ListItemButton>
              <ListItemIcon>
                <NotificationsActiveIcon color = {Selected("/notifications")? "primary" : "" } />
              </ListItemIcon>
              <ListItemText>
                <Typography color = {Selected("/notifications")? "primary" : "" }>
                    Notifications
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected={Selected("/user")} component={NavLink} sx ={{color: 'text.primary'}} to= "/user" >
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon color = {Selected("/user")? "primary" : "" } />
              </ListItemIcon>
              < ListItemText  >
                  <Typography color = {Selected("/user")? "primary" : "" }>
                  My Profile
                  </Typography>
                </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx ={{color: 'text.primary'}} >
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              < ListItemText  >
                  Logout
                </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
    )
}

export default Navigation
