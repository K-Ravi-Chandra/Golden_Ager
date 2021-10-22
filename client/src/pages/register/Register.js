import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const theme = createTheme();

const Register = () => {

    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[showPassword,setShowPassword] = React.useState(false)

    const handleUsername =  (event) => {
      setUserName(event.target.value);
    };

    const handleEmail =  (event) => {
      setEmail(event.target.value);
    };

    const handlePassword = (event) =>  {
      setPassword(event.target.value);
    };

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    let history = useHistory();

    React.useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/");
      }
    }, [history]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log({
          username,
          email,
          password,
        });
        
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };

        try {
          const role = "3"
          const { data } = await axios.post(
            "/api/auth/register",
            {
              username,
              email,
              password,
              role
            },
            config
          );
    
          localStorage.setItem("authToken", data.token);

          console.log("Registered sucessfully");
    
          history.push("/");

        } catch (error) {
          console.log(error);
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <FormControl  margin = "normal" fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">Full Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-name"
            type='text'
            value={username}
            onChange={handleUsername }
            label="Full Name"
          />
        </FormControl>
          <FormControl  margin = "normal" fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type='text'
            value={email}
            onChange={handleEmail }
            label="Email Address"
          />
        </FormControl>
          <FormControl margin = "normal"  fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item >
                  <Link href="/login" variant="body2">
                    {"Already have an account? Login here"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    )
}

export default Register