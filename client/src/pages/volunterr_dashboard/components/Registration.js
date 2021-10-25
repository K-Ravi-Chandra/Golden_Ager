import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Registration = () => {

    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [address , setAddress] = useState("");
    const [password,setPassword] = useState("");
    const[showPassword,setShowPassword] = React.useState(false)
    const handleUsername =  (event) => {
      setUserName(event.target.value);
    };

    const handleEmail =  (event) => {
      setEmail(event.target.value);
    };

    const handlePhone = (event) =>  {
      setPhone(event.target.value);
    };


    const handleAge = (event) => {
      setAge(event.target.value);
    }

    const handleAddress = (event) => {
        setAddress(event.target.value);
      }

      const handlePassword = (event) =>  {
        setPassword(event.target.value);
      };
  
      const handleShowPassword = () => {
        setShowPassword(!showPassword);
      }
  
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const [open, setOpen] = React.useState(false);

    
      const handleClose = () => {
        setAddress("")
        setAge("")
        setEmail("")
        setPassword("")
        setPhone("")
        setUserName("")
        setOpen(false);
      };

      const [open2, setOpen2] = React.useState(false);


      const handleClose2 = () => {
        setOpen2(false);
      };

      

    const handleSubmit = async (event) => {
        event.preventDefault();


        console.log({
            username,
            email,
            password,
            age,
            phone,
            address
          });

          const config = {
            header: {
              "Content-Type": "application/json",
            },
          };

          try {
            const role = "1"
            const { data } = await axios.post(
              "/api/auth/register",
              {
                username,
                email,
                password,
                role,
                age,
                phone,
                address
              },
              config
            );
      
            console.log("Registered Sineor Citizensucessfully");
            setOpen(true)
            // history.push("/");
  
          } catch (error) {
            console.log(error);
            setOpen2(true)
          }

    }


    return (


        <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register a Senior Citizen
        </Typography>
        <Box component="form"  noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormControl  margin = "normal" fullWidth variant="outlined">
      <InputLabel htmlFor="senior-citizen-name">Full Name</InputLabel>
      <OutlinedInput
        id="senior-citizen-name"
        type='text'
        value={username}
        onChange={handleUsername }
        label="Full Name"
      />
    </FormControl>
      <FormControl  margin = "normal" fullWidth variant="outlined">
      <InputLabel htmlFor="senior-citizen-email">Email Address</InputLabel>
      <OutlinedInput
        id="senior-citizen-email"
        type='text'
        value={email}
        onChange={handleEmail }
        label="Email Address"
      />
    </FormControl>
    <FormControl  margin = "normal" fullWidth variant="outlined">
      <InputLabel htmlFor="senior-citizen-age">Age</InputLabel>
      <OutlinedInput
        id="senior-citizen-age"
        type='text'
        value={age}
        onChange={handleAge }
        label= "Age"
      />
    </FormControl>

    <FormControl  margin = "normal" fullWidth variant="outlined">
      <InputLabel htmlFor="senior-citizen-phone">Phone Number</InputLabel>
      <OutlinedInput
        id="senior-citizen-phone"
        type='text'
        value={phone}
        onChange={handlePhone }
        label="Phone Number"
      />
    </FormControl>

    <FormControl margin = "normal"  fullWidth variant="outlined">
          <InputLabel htmlFor="senior-citizen-password">Password</InputLabel>
          <OutlinedInput
            id="senior-citizen-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>


    <FormControl  margin = "normal" fullWidth variant="outlined">
      <InputLabel htmlFor="senior-citizen-address">Address</InputLabel>
      <OutlinedInput
        required
        multiline
        id="senior-citizen-address"
        type='text'
        value={address}
        onChange={handleAddress }
        label="Address"
      />
    </FormControl>
      

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          
        </Box>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Registration Suceesful"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Now senior citizen can login using their credentials
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Registration Failed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                {"An unknown error occured"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose2} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      </Box>

   
    )
}

export default Registration
