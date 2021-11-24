import React from 'react'
import {format} from 'date-fns'
import axios from "axios";
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const SeverityPillRoot = styled('span')(({ theme, ownerState }) => {
  const backgroundColor = theme.palette[ownerState.color].main;
  const color = theme.palette[ownerState.color].contrastText;

  return {
    alignItems: 'center',
    backgroundColor,
    borderRadius: 12,
    color,
    cursor: 'default',
    display: 'inline-flex',
    flexGrow: 0,
    flexShrink: 0,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 2,
    fontWeight: 600,
    justifyContent: 'center',
    letterSpacing: 0.5,
    minWidth: 20,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  };
});

const SeverityPill = (props) => {
  const { color = 'primary', children, ...other } = props;

  const ownerState = { color };

  return (
    <SeverityPillRoot
      ownerState={ownerState}
      {...other}
    >
      {children}
    </SeverityPillRoot>
  );
};

SeverityPill.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'info',
    'warning',
    'success'
  ])
};


const orders = [
  {
    id: uuid(),
    ref: 'Senior Citizen 1',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'Senior Citizen 2',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'accepted'
  },
  {
    id: uuid(),
    ref: 'Senior Citizen 3',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'rejected'
  },
  {
    id: uuid(),
    ref: 'Senior Citizen 4',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'Senior Citizen 5',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'accepted'
  },
  {
    id: uuid(),
    ref: 'Senior Citizen 6',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'rejected'
  }
];





const History = (props) => {

  const [data, setData] = React.useState([]);
  const [updated , setUpdated] = React.useState(false)
  //const [loading , setLoading] = React.useState(false)
  const [fetching , setFetching] = React.useState(true)
  const [error , setError] =   React.useState(false)

  React.useEffect(async () => {
    
    setError(false);
    setFetching(true);

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
      const volunter = props.data.email;

      await axios.post(
        "/api/volunter/getHistory",
        {
          volunter
        },
        config
      ).then(function(response) {
        setError(false);
        setFetching(false);
        setData(response.data.history)
        return response;
      })
      .catch(function(error) {
        setError(true);
        setFetching(false);
        console.log(error);
      });
      console.log(data);
  }, [])


  return (
    <Card {...props}>
      <CardHeader title="Latest Requests" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  phone
                </TableCell>

                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow
                  hover
                  key={d._id}
                >
         
                  <TableCell>
                    {d.name}
                  </TableCell>
                  <TableCell>
                    {d.email}
                  </TableCell>
                  <TableCell>
                    {d.phone}
                  </TableCell>
                  <TableCell>
                    {d.date}
                  </TableCell>
      
                 
                  <TableCell>
                    <SeverityPill
                      color={(d.status === '1' && 'success')
                      || (d.status === '-1' && 'error')
                      || 'warning'}
                    >
                      {(d.status === '1' && 'Accepted')
                      || (d.status === '-1' && 'Rejected')
                      || 'Pending'}
                    </SeverityPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}
export default History