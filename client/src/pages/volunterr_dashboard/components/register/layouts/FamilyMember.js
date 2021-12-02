import * as React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { styled} from '@mui/styles';
import { Paper,Link, Box ,Toolbar,Typography, Stack , Grid, Container} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Textfield from '../../../../../components/formUI/Textfield';
import SubmitButton from '../../../../../components/formUI/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const phoneRegExp=/^[7-9][0-9]{9}$/

const StyledSubmitButton = styled(SubmitButton)({
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});



const FamilyMember = (props) => {

  const INITIAL_FORM_STATE = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword : '',
    senior : '',
    volunter : `${props.data.email}`
  };
  
  
  const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
      .required('Required'),
    senior : Yup.string()
    .email('Invalid email.')
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

  const [loading , setLoading] = React.useState(false)
  

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

      const email = values.senior;

      try {

        const Senior = await axios.post(
          "/api/volunter/findseniorcitizen",
          {
            email
          },
          config
        )

        if(Senior.data.success){

          try {
            const { data } = await axios.post(
              "/api/volunter/registerfamilymember",
              values,
              config
            );
      
            console.log(data.data)

            setSuccess(data.data)
            setShowSuccess(true)
            setShowError(false)
            setLoading(false)
            setError("An Unknown Error Occured")
            props.resetForm()
    
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
          }
        }
        else{
            setLoading(false);
            setShowSuccess(false)
            setError("Senior Citizen not found")
            setSuccess("")
            setShowError(true)
        }
        
      } catch (error) {
          setLoading(false);
          setShowSuccess(false)
          setError("An Unknown Error Occured")
          setSuccess("")
          setShowError(true)
          console.log(error);
      }
      
    };

    return(
      <>
        <Grid container sx = {{pt :2}} rowSpacing={2} >

          <Grid item xs ={12}>
                <Typography    variant="h5">
                    FamilyMember Registration
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
                              <Container maxWidth="md">
                                  
                                <Grid container spacing={2} rowSpacing = {2}>

                                    <Grid item xs={12} >
                                        <Textfield
                                        required
                                        disabled = {loading}
                                        name="username"
                                        label="Full Name"
                                        />
                                    </Grid>



                                    <Grid item xs={12} >
                                        <Textfield
                                        required
                                        disabled = {loading}
                                        name="senior"
                                        label="Senior Citzen Email"
                                        />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <Textfield
                                        required
                                        disabled = {loading}
                                        name="phone"
                                        label="Phone Number"
                                        />
                                    </Grid>

                                        
                                    <Grid item xs={12} >
                                        <Textfield
                                        required
                                        disabled = {loading}
                                        name="email"
                                        label="Email Address"
                                        />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <Textfield
                                        required
                                        disabled = {loading}
                                        type="password"
                                        name="password"
                                        label="Password"
                                        />
                                    </Grid>


                                    <Grid item xs={12} >
                                        <Textfield
                                        required
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
                              </Container>

                          </Form>
                      </Formik>
                </div>

            </Grid>
          </Grid>

      </>
    )
}

export default FamilyMember


