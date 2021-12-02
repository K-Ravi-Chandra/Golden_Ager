// All Imports ----------------------------------------------------------
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useTheme, useMediaQuery, Menu, MenuItem , Link} from '@mui/material';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from './logo.png';
import { styled} from '@mui/styles';

//-----------------------------------------------------------------------------

// Adding style components - buttons

const Title = styled(Typography)({
  fontSize : 30,
  fontWeight: 2500,
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 70%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});

export default function NavBar() 
{
  // Drawer
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"))
  const [state, setState] = useState(false); // state of drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const drawer = (
      <div>

          <Toolbar sx={{ toolbar: (theme) => theme.mixins.toolbar }}/>

          <List>
              <ListItemButton component={Link} href="https://rzp.io/l/yt2s6Yf">
                <ListItemText  primary="Donate Money" />
              </ListItemButton> 
                
              <ListItemButton component={Link} href="/donaterequirements" >
                <ListItemText primary="Donate Requirements" />
              </ListItemButton>

              <Divider/>

              <ListItemButton  component={Link} href="/login" >
                <ListItemText  primary={
                  <Typography color="primary">
                    LOGIN
                  </Typography>
                  } 
                />
              
              </ListItemButton>

              <ListItemButton  component={Link} href ="/register" >
                <ListItemText  primary={
                    <Typography color="primary" >
                      REGISTER
                    </Typography>
                    } 
                />
              </ListItemButton>

          </List>

      </div>
    
  )

  // App-bar Menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Final output return
  return (
    <React.Fragment>
      
      <Box sx={{ flexGrow: 1 }}>

        <AppBar elevation ={0} color= "inherit"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar >
          
            <Link underline="none" href="/">
              <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo} />
            </Link>
          
            <Box sx={{ flexGrow: 1 }}>
              <Title as={Link} underline="none" href="/" variant="h5" >
           
                  Golden Ager
            
              </Title>
            </Box>

          
            {isMobile ? (<></>
            ) : (

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'right',
                  width: 'fit-content',
                  edge: 'right'
                }}
              >

                  <Button onClick={handleClick} sx={{mx:1}} color="inherit"> Donate </Button>
                  <Divider orientation="vertical" flexItem />
                
                  <Button color="primary" component={Link} href="/login">
                    Login
                  </Button>
          
                  <Button color="primary" variant = "outlined" component={Link} href="/register" >Signup</Button>

              </Box>

            )}
          
            <IconButton
              color="inherit"
              edge = "end"
              aria-label="menu"
              onClick={toggleDrawer(!state)}
              sx={{  display: { sm: 'none' } }}
            >
              {state ? <CloseIcon/> : <MenuIcon /> }
            
            </IconButton>
         
            <Drawer
              anchor='top'
              open={state && isMobile}
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
            filter: 'drop-shadow(0px 2px 8px rgba(50,50,110,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32000,
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
        <Link as={MenuItem } underline="none" target="_blank"  href = {'https://rzp.io/l/yt2s6Yf'} >
          Donate Money
        </Link> 

        <MenuItem component={Link} href = "/donaterequirements">
          Donate Requirements
        </MenuItem>
        
      </Menu>

    </React.Fragment>
  );

}

