import React , {useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider  from '@mui/material/Divider';
import TextField from '@mui/material/TextField';


export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name : data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    });
  };

    return (
<Paper 
      sx={{
        position: 'relative',
        backgroundColor: '#dedede',
        color: 'black',
      }}
    >
            <Box
            sx={{
              position: 'relative',
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
              Contact us
            </Typography>

            <Divider/>

            <Box component="form"  onSubmit={handleSubmit}     sx={{
        display: 'flex',
        flexDirection: 'column', p:5}} noValidate autoComplete="off">

            <TextField id="name"  required name= "name" label="Name" variant="outlined" margin="dense" />
            <TextField id="email" required name = "email" label="Email" autoComplete="email" variant="outlined" margin="dense"/>
            
            <TextField
                id="message"
                label="Message"
                placeholder="Any doubts.. or any issues..."
                name ="message"
                required
                multiline
                rows={4}
                margin="dense"
            />
            <Button variant="contained" type="submit">Submit</Button>
            </Box>

         


            
        </Box>
    </Paper>
    )
}