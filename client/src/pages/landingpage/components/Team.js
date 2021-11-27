import React,{useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Paper,Box, Container,Typography, Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function Team() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    


    return (
        <Paper 
      sx={{
        position: 'relative',
        color: 'inherit',
        backgroundSize: 'cover',

      }}
    >
        
        <Box

sx={{
    position: 'relative',
    p:5,
  }}
        
        >

<Container >

<Typography
              component="h1"
              variant="h5"
              align="center"
              color="inherit"
              gutterBottom
            >
              Our Team
            </Typography>
            <Divider/>

        <ImageList cols={matches? 4:2}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <Typography
              variant="h6"
              align="center"
              color="inherit"
              gutterBottom
              fontWeight={300}
            >
              {item.title}
            </Typography>

        </ImageListItem>
      ))}
    </ImageList>
    </Container>
        </Box>
        </Paper>


    );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      title: 'Vivek P',
    },
    {
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      title: 'Aditya I',
    },
    {
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      title: 'Goutam B',
    },
    {
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      title: 'Ravi K',
    }
];
