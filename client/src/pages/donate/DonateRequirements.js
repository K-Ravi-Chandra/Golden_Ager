import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider  from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const DonateRequirements = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message , setMessage] = useState("");


  const [open, setOpen] = React.useState(false);

    
      const handleClose = () => {
        setName("")
        setEmail("")
        setMessage("")
        setOpen(false);
      };

  const handleName =  (event) => {
    setName(event.target.value);
  };

  const handleEmail =  (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name,
      email,
      message
    });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/contact",
        {name ,email, message},
        config
      );

      console.log(data.data)
      setOpen(true)

    } catch (error) {
      console.log(error);
    }

  };

    return (
        <>

            <Box
            sx={{
               height: '100vh' ,

              p: 5,
            }}
          >
             <Typography
              component="h1"
              variant="h4"
              align="center"
              color="inherit"
              gutterBottom
              paragraph
            >
              Donate Rquirements
            </Typography>

            <Divider/>

            <Box component="form"  onSubmit={handleSubmit}     sx={{
        display: 'flex',
        flexDirection: 'column', p:5}} noValidate autoComplete="off">

      <FormControl  margin = "normal" fullWidth variant="outlined">
          <InputLabel htmlFor="name">Full Name </InputLabel>
          <OutlinedInput
            id="name"
            type='text'
            value={name}
            onChange={handleName }
            label="Full Name"
          />
        </FormControl>

        <FormControl  margin = "normal" fullWidth variant="outlined">
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <OutlinedInput
            id="email"
            type='text'
            value={email}
            onChange={handleEmail }
            label="Email Address"
          />
        </FormControl>

        <FormControl  margin = "normal" fullWidth variant="outlined">
          <InputLabel htmlFor="message">Message</InputLabel>
          <OutlinedInput
            id="message"
            type='text'
            multiline
            minRows = {4}
            value={message}
            onChange={handleMessage }
            label="Message"
          />
        </FormControl>
            <Button variant="contained" type="submit">Submit</Button>
            </Box>

      </Box>

      </>

    )
}

export default DonateRequirements
