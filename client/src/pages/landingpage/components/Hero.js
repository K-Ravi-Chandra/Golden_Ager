import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const url = 'https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'

let headerTheme = createTheme();
headerTheme = responsiveFontSizes(headerTheme);

let captionTheme = createTheme();
captionTheme.typography.body1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [captionTheme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
};

export default function Hero() {
    return (
<Paper 
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundImage: `url(${url})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <main>
          <Box
            sx={{
              position: 'relative',
              pt: { xs: 15, md: 20 },
              pb: { xs: 15, md: 20 },
            }}
          >
          <Container maxWidth="md">
            <ThemeProvider theme={headerTheme}>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="inherit"
              gutterBottom
              paragraph
            >
              Let us make them Smile Again!
            </Typography>
            </ThemeProvider>
            <ThemeProvider theme={captionTheme}>
            <Typography variant = "body1" align="center" color="inherit" paragraph>
                An inovative step to help Senior Citizens
            </Typography>
            </ThemeProvider>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
              <Button variant="outlined" color="inherit" component={Link} to="/register">Join us</Button>
            </Stack>
            
          </Container>

          </Box>

        </main>
    </Paper>
    )
}
