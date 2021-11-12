import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Senior Citizen 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Need a volunteer to take me for health checkup
          </Typography>
          <button>Accept</button>
          <button>Reject</button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Senior Citizen 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Need a volunteer to take me to Airport
          </Typography>
          <button>Accept</button>
          <button>Reject</button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Senior Citizen 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Need a volunteer to take me to Wonderland for roaming
          </Typography>
          <button>Accept</button>
          <button>Reject</button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Senior Citizen 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Need a volunteer to help me to see my health reports
          </Typography>
          <button>Accept</button>
          <button>Reject</button>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Issue of Senior Citizen 5 was not accepted</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}