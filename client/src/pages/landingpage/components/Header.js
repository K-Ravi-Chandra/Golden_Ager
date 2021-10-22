import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const url = 'https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'



export default function Header() {
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
            <Typography variant="h5" align="center" color="inherit" paragraph>
                An inovative step to help Senior Citizens
            </Typography>
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
