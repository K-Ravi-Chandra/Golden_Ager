// All Imports..-------------------------------------------------------
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Logo from '../../../components/logo.png'
import { styled} from '@mui/styles';

import { AppBar, Box ,Toolbar,Typography, Stack , Button, Paper, Container, Grid} from '@mui/material'
import Textfield from '../../../components/formUI/Textfield';
import SubmitButton from '../../../components/formUI/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';
import axios from "axios";
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { blue, grey } from '@mui/material/colors';

// ----------------------------------------------------------------------------
// Contact page

const Contact = () => {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // Null by default
  const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    message: '',
  };
  
  // Accepting inputs and restricting in case of invalid inputs
  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
    message: Yup.string()
      .required('Required'),
  });

  const onSubmit = async (values, props) => {

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try 
    {
      const { data } = await axios.post(
        "/api/contact",
        {values},
        config
      );

      console.log(data.data)
      setOpen(true)

      props.resetForm()

    } 
    catch (error) 
    {
      console.log(error);
    }
  }
  
  // Final return 
  // Adding all style components
  return (
    <Paper sx={{position: 'relative',backgroundColor: grey[200],color: 'black',}}>
      
      <Box sx={{position: 'relative',p: 5,}}>

          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="inherit"
            gutterBottom
            paragraph
          >
            Contact us

          </Typography>

          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE
            }}

            validationSchema={FORM_VALIDATION}
            onSubmit={onSubmit}
          >
              <Form>

                <Grid container spacing={2} rowSpacing = {2}>

                  <Grid item xs={12}>
                    <Textfield
                      required
                      name="name"
                      label="Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      required
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      required
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                </Grid>

                <Stack
                  sx={{ p: 2}}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <SubmitButton>Submit</SubmitButton>
                
                </Stack>

              </Form>
          </Formik>
            
      </Box>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">
              {"Submitted Successfully"}
          </DialogTitle>
      
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your form has been received. We will get back to you quickly.
            </DialogContentText>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Ok
            </Button> 
          </DialogActions>
      
      </Dialog>

    </Paper>
  )

}

export default  Contact
