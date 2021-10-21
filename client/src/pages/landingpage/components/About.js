import React , {useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Collapse, Divider } from '@mui/material';




export default function About() {

    const [open , setOpen]  = useState(false);
    const [buttonText, setButtonText] = useState("Read More ...");

    function ButtonText(){
        if(open){
            setButtonText("Read More ...")
            setOpen(!open)
        }
        else{
            setButtonText("Read Less ...")
            setOpen(!open)
        }
    }


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
              p: { xs: 5, md: 8 },
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
              Major problems faced by senior citizens in India
            </Typography>

            <Divider/>
            <Typography sx = {{pt:  2}} variant="h6" color="inherit" paragraph>
            The elderly population in India is one of the fastest-growing in the world. At present India is considered as the second-largest global population of ageing citizens. It is expected that the present number will further increase by 2050. Nevertheless, India lacks the basic infrastructure and expertise to support the health and welfare of the elderly.
            </Typography>
            <Typography  variant="h6"  color="inherit" paragraph>
            According to various surveys across the country for most Indian senior citizens the biggest concerns that are prevailing are Healthcare costs, lack of financial support and seclusion. In addition to this most of the aged people are not accorded the dignity of care they deserve. So caretaker for elderly is utmost important nowadays.
            </Typography>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Typography variant="h5"  color="inherit" paragraph>Physical Infrastructure</Typography>
                <Typography variant="h6"  color="inherit" paragraph>
                    Lack of physical infrastructure forms the major deterrent to providing comfort to the aged. There are just a few purpose-built care homes or public ramps that available for older citizens who are unable to move, like those who need wheelchair access. Presently, with increasing longevity and debilitating chronic diseases, many of the elder citizens will need better access to physical infrastructure in the coming years. This scenario is applicable in both their own homes and in public spaces, like roads and malls.
                </Typography>

                <Typography variant="h5"  color="inherit" paragraph>Lack of Financial Support</Typography>
                <Typography variant="h6"  color="inherit" paragraph>
                    Furthermore, there is little public or private financial support for the elderly. Various research shows that the majority of the Indians who are working only a few of them are eligible for the pension. Generally, senior health insurance has very low penetration and has extremely poor pay-out history. Nevertheless, health costs keep rising in old age.
                </Typography>

                <Typography variant="h5"  color="inherit" paragraph>Lack of Emergency Response Infrastructure</Typography>
                <Typography variant="h6"  color="inherit" paragraph>
                    The emergency response infrastructure for senior citizens is quite ill-developed in India, including the availability of public ambulances for hospitalization. One of the major fears for most senior citizens living alone is how to go about accessing an emergency facility if required, especially at night. With more elderly care services available now, it is somewhat making their life easier.   
                </Typography>

                <Typography variant="h5"  color="inherit" paragraph>Lack of Companionship</Typography>
                <Typography  variant="h6"  color="inherit" paragraph>
                    Most senior citizens who probably live alone suffer due to lack of companionship sometimes exacerbated by lack of mobility due to ill health. Loneliness and isolation are definitely a major concern among elderly Indians who are above the age of 60. Isolation basically can result in gradual depression and other mental disorders in the elderly. When you try to develop a strong bond with older parents and involve them in your life it could be quite beneficial for all.
                </Typography>
                <Typography variant="h6"  color="inherit" paragraph>
                    It is soon that India’s demographic dividend of being a ‘young’ country will turn into a demographic nightmare if the infrastructure and services are not developed fast enough for our elderly. Elderly care services will play an increasingly important role in bridging the massive gap between the investments and expertise needed and what is available from public and NGO sources.
                </Typography>
            
            
            </Collapse>
            <Button color="primary" onClick={ButtonText}>{buttonText}</Button>
        </Box>
    </Paper>
    )
}