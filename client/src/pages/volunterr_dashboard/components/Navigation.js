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
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
// ----------------------------------------------------------------------



const Selected = (path) => {
  const { pathname } = useLocation();
  if(path === pathname) 
   return true 
  else 
   return false
}


const Navigation = () => {

  const data = [
    { label: 'Authentication' },
    { label: 'Database' },
    { label: 'Storage' },
    { label: 'Hosting' },
  ];

  let history = useHistory();
  const [open, setOpen] = React.useState(true);

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

          <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  p: 2,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Register"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : '',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                  >

                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                  ))}

          <ListItem disablePadding selected={Selected("/Registration")} component={NavLink} sx ={{color: 'text.primary'}} to= "/Registration" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <NotificationsActiveIcon color = {Selected("/Registration")? "primary" : "" } />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1"  noWrap={true} color = {Selected("/Registration")? "primary" : "" }>
                    SeniorCitizen Registration
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected={Selected("/History")} component={NavLink} sx ={{color: 'text.primary'}} to= "/History" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <PeopleIcon color = {Selected("/History")? "primary" : "" } />
              </ListItemIcon>

              <ListItemText>
                <Typography variant="body1" fontSize={18}  color = {Selected("/History")? "primary" : "" }>
                history
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected={Selected( "/HelpRequests")} component={NavLink} sx ={{color: 'text.primary'}} to= "/HelpRequests" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <MedicalServicesIcon color = {Selected("/HelpRequests")? "primary" : "" } />
              </ListItemIcon>
 
              <ListItemText>
                <Typography variant="body1" fontSize={18}  color = {Selected("/HelpRequests")? "primary" : "" }>
                HelpRequests
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding selected={Selected("/Financialrequests")} component={NavLink} sx ={{color: 'text.primary'}} to= "/Financialrequests" >
            <ListItemButton sx={{p :2}} >
              <ListItemIcon>
                <AccountBoxIcon color = {Selected("/Financialrequests")? "primary" : "" } />
              </ListItemIcon>
              < ListItemText  >
                  <Typography variant="body1" fontSize={18}  color = {Selected("/Financialrequests")? "primary" : "" }>
                  Financialrequests
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
