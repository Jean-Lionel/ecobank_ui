import * as React from 'react';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import useFetchDataWithPagination from '../../utility/useFetchDataWithPagination';


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const { data } = useFetchDataWithPagination("devises");
  const [devises, setDevises] = React.useState();


  React.useEffect(() => {
    if (data?.data) {
      setDevises(data?.data)
    }
    
    return () => {
      
    };
  }, [data]);
  
  return (
    <React.Fragment>
    <Title>Les derniers prix</Title>
    <Table size="small">
    <TableHead>
    <TableRow>
    <TableCell>Drapeau</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Pays</TableCell>
    <TableCell>Nous achetons à</TableCell>
    <TableCell align="right">Nous vendons à </TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {devises && devises.map((row) => (
      <TableRow key={row.id}>
        <TableCell>
          <span className={"currency-flag currency-flag-" + row.name.toLowerCase()}></span>
        </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.country}</TableCell>
      <TableCell>{row.paymentMethod}</TableCell>
      <TableCell align="right"></TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
      See more orders
      </Link>
      </React.Fragment>
      );
    }
    