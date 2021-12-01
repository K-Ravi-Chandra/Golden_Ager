// Imports...
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Logo from '../../components/logo.png'
import { styled} from '@mui/styles';

import { AppBar, Box ,Toolbar,Typography, Stack , Container, Grid} from '@mui/material'
import Textfield from '../../components/formUI/Textfield';
import SubmitButton from '../../components/formUI/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';
import axios from "axios";

// ---------------------------------------------------------------------------------------

const phoneRegExp=/^[2-9]{2}[0-9]{8}/

const Title = styled(Typography)({
  fontSize : 35,
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});

// Addin style components - buttons 
const StyledSubmitButton = styled(SubmitButton)({
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});


const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  thing: '',

};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp,"Enter valid Phone number")
    .required("Required"),
  addressLine1: Yup.string()
    .required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string()
    .required('Required'),
  state: Yup.string()
    .required('Required'),
  thing: Yup.string()
    .required('Required'),
});

// Donate Requirements page
const DonateRequirements = () => 
{
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values, props) => 
  {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };


    try 
    {
      const { data } = await axios.post(
        "/api/donate/donaterequirements",
        {
          values
        },
        config
      );

      console.log(data);
      setOpen(true);
          
      props.resetForm()

    } 
    catch (error) 
    {
      console.log(error);
    }

    setTimeout(handleClose, 5000);
  }

  return (
    <div>

      <AppBar sx ={{alignItems : 'center', p : 1}} position ="relative" elevation ={0} color = "transparent">
        <Toolbar >
          <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo}/>
          <Title variant="h4" component="div" sx={{ flexGrow: 1 }}>Golden Ager</Title>
        </Toolbar>
      </AppBar>

      <Container >
          <Box justifyContent="center" sx = {{alignContent : 'center',
              bgcolor: '#a3e4f1',
          }}>
              <Stack
                  sx={{ p: 2}}
                  direction="row"
                  spacing={2}
                  justifyContent="center">

                  <Typography fontSize = {20}  alignContent>Donate Requirements</Typography>

               </Stack>
          </Box>
        
          <Grid container  >

              <Grid item xs={12}>

                <Container >
                  <div >

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
                            <Typography paddingTop = {2}>
                              Your Details
                            </Typography>
                          </Grid>

                          <Grid item xs={12} md = {6}>
                            <Textfield
                              required
                              name="firstName"
                              label="First Name"
                            />
                          </Grid>

                          <Grid item xs={12} md = {6}>
                            <Textfield
                              name="lastName"
                              label="Last Name"
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
                              name="phone"
                              label="Phone"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Typography>
                              Address
                            </Typography>
                          </Grid>

                          <Grid item xs={12}>
                            <Textfield
                            required
                              name="addressLine1"
                              label="Address Line 1"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Textfield
                              name="addressLine2"
                              label="Address Line 2"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                            required
                              name="city"
                              label="City"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Textfield
                            required
                              name="state"
                              label="State"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Typography>
                              Things Donating
                            </Typography>
                          </Grid>

                          <Grid item xs={12}>
                            <Textfield
                            required
                              name="thing"
                              label="Things"
                              multiline={true}
                              rows={4}
                            />
                          </Grid>

                        </Grid>

                        <Box sx={{ width: '100%' , pt : 2}}>
                          <Collapse in={open} >

                            <Alert severity="success"
                              action=
                              {
                                <IconButton
                                  aria-label="close"
                                  color="inherit"
                                  size="small"
                                  onClick={() => {
                                     setOpen(false);
                                  }}
                                >
                                    <CloseIcon fontSize="inherit" />

                                </IconButton>
                              }
                              sx={{ mb: 2 }}
                            >

                              <AlertTitle>Thanks for Donating!</AlertTitle>
                              One of our volunteers will get back you.

                            </Alert>

                          </Collapse>
                        </Box>

                        <Stack
                            sx={{ p: 2}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                          <StyledSubmitButton> Submit </StyledSubmitButton>
                        </Stack>

                      </Form>

                    </Formik>

                  </div>
                </Container>

              </Grid>

          </Grid>
      </Container>

      <Toolbar/>

    </div>
  );

};

export default DonateRequirements;