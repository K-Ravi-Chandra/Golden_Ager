import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useTheme, useMediaQuery, Menu, MenuItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from './logo.png';
import { Link } from 'react-router-dom';



export default function NavBar() {

  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"))


  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };



  const [donateOpen, setDonateOpen] = React.useState(false);
  const [demoOpen, setDemoOpen] = React.useState(false);

  const drawer = (
    <div>
                  <Toolbar sx={{ toolbar: (theme) => theme.mixins.toolbar }}/>
            <List>
              <ListItemButton key= "About" component={Link} to="/Golden_Ager/" >
                  {/* <ListItemIcon>
                    <InfoIcon/>
                  </ListItemIcon> */}
                  <ListItemText  primary= "About" />
              </ListItemButton>
              <ListItemButton onClick = { () => {setDonateOpen(!donateOpen)}}>
                {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                <ListItemText primary="Donate" />
                {donateOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={donateOpen } timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton component={Link} to="/Golden_Ager/donatemoney" sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                  <ListItemText  primary="Donate Money" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Golden_Ager/donaterequirements" sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                  <ListItemText primary="Donate Requirements" />
                </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick = { () => {setDemoOpen(!demoOpen)}}>
                {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                <ListItemText primary="Demo Pages" />
                {demoOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={demoOpen } timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton component={Link} to="/Golden_Ager/VolunterDashboard" sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                  <ListItemText primary="Volunter Dashboard " />
                </ListItemButton>
                <ListItemButton component={Link} to="/Golden_Ager/SeniorCitizenDashboard"  sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                  <ListItemText primary="Senior Citizen Dashboard" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Golden_Ager/DoctorDashboard"  sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                  <ListItemText primary="Doctor Dashboard" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Golden_Ager/FamilyDashboard" sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                  <ListItemText primary="Family Dashboard" />
                </ListItemButton>
        </List>
      </Collapse>
      <Divider/>
      <ListItemButton  component={Link} to="/login" >
                  {/* <ListItemIcon>
                    <InfoIcon/>
                  </ListItemIcon> */}
                  <ListItemText  primary={
                      <Typography color="primary">
                        Login
                      </Typography>
                    } 
                  />
              </ListItemButton>
              <ListItemButton  component={Link} to="/register" >
                  {/* <ListItemIcon>
                    <InfoIcon/>
                  </ListItemIcon> */}
                  <ListItemText  primary={
                      <Typography color="primary" variant = "outlined">
                        Signup
                      </Typography>
                    } 
                  />
              </ListItemButton>
            </List>
    </div>
    
  )

  // Appbar Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    // Appbar Menu2
    const [anchorE2, setAnchorE2] = React.useState(null);
    const open2 = Boolean(anchorE2);
    const handleClick2 = (event) => {
      console.log(anchorE2)
      setAnchorE2(event.currentTarget);
      
    };
    const handleClose2 = () => {
      setAnchorE2(null);
    };

  return (

    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar color= "inherit"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar >
          
          <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo}/>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Golden Ager
          </Typography>
          {isMobile ? (<div></div>
            
            ) : (<div>
              <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
        }}
      >
      <Button color="inherit"  component={Link} to="/Golden_Ager" >About</Button>
          <Button onClick={handleClick}  color="inherit">Donate</Button>
          <Button onClick={handleClick2} color="inherit">DemoPages</Button>
          <Divider orientation="vertical" flexItem />
          <Button color="primary" component={Link} to="/login">Login</Button>
          <Button color="primary" variant = "outlined" component={Link} to="/register" >Signup</Button>

      </Box>



          </div>)}
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(!state)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='top'
            open={state & isMobile}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            onClose={toggleDrawer(!state)}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>
      
    </Box>
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem  component={Link} to="/Golden_Ager/donatemoney" >
          Donate Money
        </MenuItem>
        <MenuItem component={Link} to="/Golden_Ager/donaterequirements">
          Donate Requirements
        </MenuItem>
        
    </Menu>
    <Menu
        anchorEl={anchorE2}
        open={open2}
        onClose={handleClose2}
        onClick={handleClose2}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={Link} to="/Golden_Ager/SeniorCitizenDashboard">
          Senior Citizen Dashboard
        </MenuItem>
        <MenuItem  component={Link} to="/Golden_Ager/VolunterDashboard">
          Volunter Dashboard
        </MenuItem>
        <MenuItem  component={Link} to="/Golden_Ager/DoctorDashboard">
          Doctor Dashboard
        </MenuItem>
        <MenuItem  component={Link} to="/Golden_Ager/FamilyDashboard">
          Family Dashboard
        </MenuItem>
        
    </Menu>
    </React.Fragment>
  );
}

