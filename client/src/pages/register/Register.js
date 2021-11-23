import * as React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Logo from '../../components/logo.png'
import { styled} from '@mui/styles';
import { Paper,Link, Box ,Toolbar,Typography, Stack , Grid} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Textfield from '../../components/formUI/Textfield';
import SubmitButton from '../../components/formUI/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const phoneRegExp=/^[2-9]{2}[0-9]{8}/

const Title = styled(Typography)({
  fontSize : 35,
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});

const StyledSubmitButton = styled(Button )({
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  border: 0,
  borderRadius: 4,
  boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
  color: 'white',
});

const INITIAL_FORM_STATE = {
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword : ''

};


const FORM_VALIDATION = Yup.object().shape({
  username: Yup.string()
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



const theme = createTheme();

const Register = () => {

  const [error, setError] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [loading , setLoading] = React.useState(false)

  const handleClose = () => {
    setOpen(false);
  };

    let history = useHistory();

    React.useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/");
      }
    }, [history]);

    const onSubmit  = async (values, props) => {

      setOpen(false);
      setLoading(true);

        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };

        try {
          const email = values.email;
          const password = values.password;
          const username = values.username;
          const phone = values.phone;
          const role = "0"
          const { data } = await axios.post(
            "/api/auth/register",
            {
              username,
              email,
              password,
              role,
              phone,
            },
            config
          );
    
          localStorage.setItem("authToken", data.token);

          console.log("Registered sucessfully");
    
          history.push("/");
          setLoading(false)

        } catch (error) {
          setLoading(false)
          console.log(error.response)
          if(error.response.data.error === 'Duplicate field Value Enter'){
            setError('Account Already Exists')
          }
          else if(error.response.statusText){
            setError(error.response.statusText)
          }
          else {
            setError(error.response.data.error)
          }
          setOpen(true)
          setTimeout(handleClose, 8000);
        }
  

      };
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                  <CssBaseline />
                  <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1454418747937-bd95bb945625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'right',
                    }}
                  />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >

                      <Toolbar >
                            <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo}/>
                            <Title variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                <Link underline="none" href="/">
                                    Golden&nbsp;Ager
                                </Link>
                            </Title>
                      </Toolbar>

                    
                      <Grid container sx = {{pt :2}} rowSpacing={2} >

                            <Grid item xs ={12}>
                                  <Typography    variant="h5">
                                        Create an Account
                                  </Typography>
                            </Grid>

                            <Grid item xs={12}>

                                <Box sx={{ width: '100%' }}>
                                      <Collapse in={open} >
                                            <Alert severity="error"
                                              action={
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

                                                      <Grid item xs={12}>
                                                          <Textfield
                                                            disabled = {loading}
                                                            name="username"
                                                            label="Full Name"
                                                          />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                          <Textfield
                                                           disabled = {loading}
                                                            name="email"
                                                            label="Email Address"
                                                          />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                          <Textfield
                                                          disabled = {loading}
                                                            name="phone"
                                                            label="Phone Number"
                                                          />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                          <Textfield
                                                          disabled = {loading}
                                                          type="password"
                                                            name="password"
                                                            label="Password"
                                                          />
                                                        </Grid>

                                              
                                                        <Grid item xs={12}>
                                                          <Textfield
                                                          disabled = {loading}
                                                          type="password"
                                                            name="confirmPassword"
                                                            label="Confirm Password"
                                                          />
                                                        </Grid>

                                            

                                                </Grid>

                                                <Stack
                                                    sx={{ p: 2}}
                                                    direction="row"
                                                    spacing={2}
                                                    justifyContent="center">
                                                        <StyledSubmitButton variant="contained" type = "submit" disabled={loading} >{loading ? 'Loading...' : 'Register'}</StyledSubmitButton>
                                                </Stack>

                                            </Form>
                                        </Formik>
                                  </div>

                              </Grid>
                        </Grid>

                        <Grid container columnSpacing={1}>
                              <Grid item xs >
                                    <Typography align = 'center'  variant="body1">
                                          Already have an account? {''}
                                          <Typography align = 'left' sx = {{color : '#00a6c1'}} as={Link} underline="none" href="/login" variant="body1">
                                              Login
                                        </Typography>
                                    </Typography>
                              </Grid>
                        </Grid> 

                    </Box>
              </Grid>
          </Grid>
      </ThemeProvider>
    )
}

export default Register
