import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Animation from "../components/Animation";
import BasePage from "../components/BasePage";
import CurrencyTable from "../components/CurrencyTable";


function format2Number(number) {

    return number.toString().padStart(2, '0');
}
function getTime() {
    const time = new Date();
    return format2Number(time.getHours()) + " : " + format2Number(time.getMinutes()) ;
}

function getDate() {
    const time = new Date();
    return time.getFullYear() + "." + format2Number(time.getMonth()) + "." + format2Number(time.getDate()) ;
}

const Home = () => {
    const [time, setTime] = useState(getTime());
    const [date, setDate] = useState(getDate())

    setTimeout(() => {
        setTime(getTime())
    }, 30000);

    return (<BasePage>
        <Box>
            <Grid>
               <Animation/>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <h1>DATE</h1>
                    <h1>DATE</h1>
                </Grid>

                <Grid item md={3} sx={{
                    textAlign: 'left'
                }}>
                   <h1> {date}</h1>
                </Grid>
                <Grid item md={3}>
                   <h1> {time}</h1>
                </Grid>
                <Grid item md={3}>
                    <h1>TIME</h1>
                    <h1>TEMPS</h1>
                </Grid>
            </Grid> 

           <CurrencyTable/> 
        </Box>
    </BasePage>);
}
 
export default Home;