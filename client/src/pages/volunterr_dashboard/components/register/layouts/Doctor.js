import * as React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { styled} from '@mui/styles';
import { Paper, InputAdornment, Link, Box ,Toolbar,Typography, Stack , Grid} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Textfield from '../../../../../components/formUI/Textfield';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const phoneRegExp=/^[2-9]{2}[0-9]{8}/

const Doctor = (props) => {

  const [loading , setLoading] = React.useState(false)

 
  const INITIAL_FORM_STATE = {
    username: '',
    email: '',
    phone: '',
    hospital : '',
    password: '',
    confirmPassword : '',
    hospitalAddress : '',
    volunter : `${props.data.email}`
  
  };
  
  
  const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
      .required('Required'),
    hospital: Yup.string()
      .required('Required'),
    hospitalAddress : Yup.string()
    .required('Required'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
    phone: Yup.string()
      .max(10, 'Enter a valid phone number')
      .matches(phoneRegExp,"Enter valid Phone number")
      .required("Required"),
    password: Yup.string()
      .min(6, "Minimum characters should be 6")
      .required('Required'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches").required('Required')
  
  });
  



  //Sucess or error messages
  const [success, setSuccess] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [error, setError] = React.useState("An Unknown Error Occured");
  const [showError, setShowError] = React.useState(false);


  const CloseSuccess = () => {
    setShowSuccess(false);
  };

  const CloseError = () => {
    setShowError(false);
  };

    const onSubmit  = async (values, props) => {

      setShowSuccess(false);
      setShowError(false);
      setLoading(true);

      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.post(
          "/api/volunter/registerdoctor",
          values,
          config
        );
  
        console.log(data.data)

        setSuccess(data.data)
        setShowSuccess(true)
        setLoading(false)
        setShowError(false)
        setError("An Unknown Error Occured")
        props.resetForm()
        setTimeout(CloseSuccess, 5000);

      } catch (error) {

        setLoading(false)

        if(error.response.data.error) {
          if(error.response.data.error === 'Duplicate field Value Enter'){
            setError('Account Already Exists')
          }
          else{
            setError(error.response.data.error)
          }
        }
        else{
          setError("An Unknown error Occured")
        }
        setShowSuccess(false)
        setSuccess("")
        setShowError(true)
        console.log(error.response.data);
        setTimeout(CloseError, 5000);
      }

    };

    return(
      <>
        <Grid container sx = {{pt :2}} rowSpacing={2} >

          <Grid item xs ={12}>
                <Typography    variant="h5">
                     Doctor Registration
                </Typography>
          </Grid>

          <Grid item xs={12}>

          <Box sx={{ width: '100%' , pt : 1}}>
                <Collapse in={showSuccess} >
                    <Alert 
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setShowSuccess(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    >   
                    {success} 
                    </Alert>
                </Collapse>
    </Box>

    <Box sx={{ width: '100%' , pt : 1}}>
                <Collapse in={showError} >
                    <Alert severity="error"
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setShowError(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    >   
                    {error} 
                    </Alert>
                </Collapse>
    </Box>

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

                                    <Grid item xs={12} md = {6}>
                                        <Textfield
                                          required
                                          disabled = {loading}
                                          name="username"
                                          label="Full Name"
                                        />
                                      </Grid>

                                      <Grid item xs={12} md = {6}>
                                        <Textfield
                                          required
                                          disabled = {loading}
                                          name="hospital"
                                          label="Hospital"
                                        />
                                      </Grid>
    

                                      <Grid item xs={12} md = {6}>
                                        <Textfield
                                        required
                                        disabled = {loading}
                                          name="phone"
                                          label="Phone Number"
                                        />
                                      </Grid>

                                      <Grid item xs={12} md = {6}>
                                        <Textfield
                                          required
                                          disabled = {loading}
                                          name="email"
                                          label="Email Address"
                                        />
                                      </Grid>


                                      <Grid item xs={12} md = {6}>
                                        <Textfield
                                        required
                                        disabled = {loading}
                                        type="password"
                                          name="password"
                                          label="Password"
                                        />
                                      </Grid>

                            
                                      <Grid item xs={12} md = {6}>
                                        <Textfield
                                        required
                                        disabled = {loading}
                                        type="password"
                                          name="confirmPassword"
                                          label="Confirm Password"
                                        />
                                      </Grid>

                                      <Grid item xs={12} >
                                        <Textfield
                                        required
                                        disabled = {loading}
                                          name="hospitalAddress"
                                          label="Address"
                                          multiline
                                          rows = {3}
                                        />
                                      </Grid>
    
                              </Grid>

                
                              <Stack
                                  sx={{ p: 2}}
                                  direction="row"
                                  spacing={2}
                                  justifyContent="center">
                                      <LoadingButton
                                            type = "submit"
                                            loading = {loading}
                                            loadingPosition="start"
                                            startIcon={<PersonAddIcon />}
                                            variant="contained"
                                          >
                                            Register
                                          </LoadingButton>
                              </Stack>

                          </Form>
                      </Formik>
                </div>

            </Grid>
          </Grid>

      </>
    )
}

export default Doctor


