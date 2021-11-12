import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

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
            Need Rs 4,000 for Medicines
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
          Need Rs 60,000 just for fun
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
          Need Rs 5,000 for an eye checkup
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
           Need Rs 50,000 For the Operation
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