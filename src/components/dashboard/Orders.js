import * as React from 'react';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import useFetchDataWithPagination from '../../utility/useFetchDataWithPagination';
import usePostData from '../../utility/usePostData';
import { Button, Grid } from '@mui/material';


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const { data,  refreshSearch} = useFetchDataWithPagination("devises");
  const { error, isLoading, submitData} = usePostData();
  const [devises, setDevises] = React.useState();
  const [selectElement, setSelectElement] = React.useState(0);
  const [buy, setBuy] = React.useState(null);
  const [sell, setSell] = React.useState(null);
  const [level, setLevel] = React.useState(null);

  React.useEffect(() => {
    if (data?.data) {
      setDevises(data?.data)
    }
    
    return () => {
      
    };
  }, [data]);
  

  const updateValue = (e) => {
    e.preventDefault();
   // alert("Bonjour je suis un Millionnaire")
    const data = {
      devise_id : selectElement,
      buy_at : buy ,
      sell_at :sell ,
      level : level,
    }

    submitData("devise_prices", data)
    if (!error) {
      setSelectElement(0)
      setBuy("")
      setSell("")
    }
    refreshSearch()
  }

  const searchValues = (search) => {
    if (data?.data) {
      const searchV = data?.data.filter(el => JSON.stringify(el).toLowerCase().includes(search.toLowerCase()))
      setDevises(searchV)
    }
  }
  
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Title>Les derniers prix </Title>
        </Grid>
        <Grid item md={6}>
          <Title><input placeholder='Rechercher' onChange={(e) => searchValues(e.target.value)}/> </Title>
        </Grid>
      </Grid>
      
    <Table size="small">
    <TableHead>
    <TableRow>
    <TableCell>Drapeau</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Pays</TableCell>
    <TableCell>Nous achetons à</TableCell>
    <TableCell align="right">Nous vendons à </TableCell>
    <TableCell>Level </TableCell>
    <TableCell>Action </TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
          {devises && devises.map((row , index) => (
      <>
      <TableRow key={row.id}>
        <TableCell>
          <span className={"currency-flag currency-flag-" + row.name.toLowerCase()}></span>
        </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.country}</TableCell>
     
                <TableCell align="right">{row?.buy_at}</TableCell>
                <TableCell align="right">{row?.sell_at}</TableCell>
                <TableCell>{++index}</TableCell>
        <TableCell align="right">
                  <Button onClick={() => setSelectElement(row.id)} >  Update</Button>
                 
        </TableCell>
      </TableRow>
              {(selectElement === row.id) &&
                <TableRow key={row.name}>
                <TableCell colSpan={3}>{ new Date().toLocaleString() }</TableCell>
                <TableCell>
                  <input type="number" onChange={(e)=> setBuy(e.target.value)}/>
                </TableCell>
                <TableCell>
                <input type="number" onChange={(e)=> setSell(e.target.value)}/>
                </TableCell>
                <TableCell>
                <input type="number" onChange={(e)=> setLevel(e.target.value)}/>
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small" onClick={updateValue}>Modifier</Button>
                  {isLoading && <span> Wait ... </span>}
                </TableCell>

               
          </TableRow>}
      </> 
      ))}
      </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
      See more orders
      </Link>
      </React.Fragment>
      );
    }
    