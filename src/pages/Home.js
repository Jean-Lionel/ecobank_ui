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
               
            </Grid>
            <Grid container spacing={1}>
                <Grid item md={1}>
                    <Box
                        sx={
                            {
                                background: "rgb(138, 134, 134)",
                            }
                        }
                    >
                        <Box sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            
                         }} >DATE</Box>
                        <Box sx={{
                             fontSize: '24px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color : 'rgb(7, 142, 226)'
                         }}>DATE</Box>
                    </Box>
                </Grid>
                <Grid item md={2} >
                    <Box
                        sx={
                            {
                                paddingTop: '16px',
                                width: 'auto'
                            }
                        }
                        >
                  
                        <span className="dateShow">
                        {date} 
                    </span>
                    </Box>

                </Grid>
                <Grid item md={6}>
                <Animation/>
                </Grid>
                <Grid item md={2}>
                    <Box sx={{
                        textAlign: 'right',
                        paddingTop: '16px',
                    }}>
                        <span className="timeRight">
                        {time}
                        </span>
                    </Box>
                   
                </Grid>
                <Grid item md={1}>
                <Box
                        sx={
                            {
                                background: "rgb(138, 134, 134)",
                            }
                        }
                    >
                        <Box sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            letterSpacing: '8px'
                            
                         }} >TIME</Box>
                        <Box sx={{
                             fontSize: '24px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color : 'rgb(7, 142, 226)'
                         }}>TEMPS</Box>
                    </Box>
                </Grid>
            </Grid> 

           <CurrencyTable/> 
        </Box>
    </BasePage>);
}
 
export default Home;