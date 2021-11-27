import React from 'react'
import {format} from 'date-fns'
import axios from "axios";
import {  Divider,  Typography } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import LinearProgress from '@mui/material/LinearProgress';

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


const History = (props) => {

  const [data, setData] = React.useState([]);
  const [history , setHistory] = React.useState(false)
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
        if(response.data.history.length)  setHistory(true)
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
    <>
    {fetching ? <LinearProgress/> : <>
      
      {error ? <Typography> An unknown Error</Typography>  : <>
        {history ? <>
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
          </> : <Typography> No Requests found</Typography> } </> }</>}
    </>
  );
}
export default History