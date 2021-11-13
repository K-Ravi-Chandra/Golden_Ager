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
import PerfectScrollbar from 'react-perfect-scrollbar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
    { label: 'Senior Citizen' , path : '/registeration/seniorcitizen'},
    { label: 'Doctor' , path : '/registeration/doctor' },
    { label: 'Family Member' , path : '/registeration/familymember'},
  ];

  let history = useHistory();
  const [open, setOpen] = React.useState(false);

  const { pathname } = useLocation();
  const logout = () => {

    localStorage.removeItem("authToken");
    history.push("/");
}
  return (
    <Box >
      <PerfectScrollbar>
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
                selected = {!open && (Selected("/registeration/seniorcitizen") || Selected("/registeration/doctor") || Selected("/registeration/familymember"))}
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  p: 2,
                  pb: open ? 0 : 2.5,
                }}
              >
                <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
                <ListItemText
                  primary="Register"
                  primaryTypographyProps={{
                    paddingTop : open ? 1 : 0
                  }}
                  secondary="Senior Citizen, Doctor, Family Member"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'grey',
                  }}
                  
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    mt: 1,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItem disablePadding selected={Selected(item.path)} component={NavLink} sx ={{color: 'text.primary'}} to= {item.path}>
                      <ListItemButton sx={{p: 2}} key={item.label} selected = {Selected(item.path)}>
                        <ListItemText sx ={{pl : 2.5}}>
                          <Typography variant="body1"  noWrap={true} color = {Selected(item.path)? "primary" : "" }>
                            {item.label}
                          </Typography>
                        </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  ))}

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
      </PerfectScrollbar>
    </Box>
    )
}

export default Navigation
