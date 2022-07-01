import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Animation from "../components/Animation";
import BasePage from "../components/BasePage";
import CurrencyTable from "../components/CurrencyTable";
import FooterHome from "../components/FooterHome";

function format2Number(number) {

    return number.toString().padStart(2, '0');
}
function getTime() {
    const time = new Date();
    return format2Number(time.getHours()) + " : " + format2Number(time.getMinutes()) + " : " + format2Number(time.getSeconds());
}

function getDate() {
    const time = new Date();
    return time.getFullYear() + "." + format2Number(time.getMonth()) + "." + format2Number(time.getDate());
}

const Home = () => {
    const [time, setTime] = useState(0);
    const [date, setDate] = useState(getDate())
    const [exemple, setExemple] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(() => {
                //importconsole.log("je suis cool")
                return getTime();
             })
        }, 1000);
        return () => {
            //clearTimeout();
        };
    }, []);

    
    return (<BasePage>
        <Box>
            <Grid>
                {/* <h1>
                    {exemple}
                </h1> */}
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
                <Grid item md={4}>
                <Animation/>
                </Grid>
                <Grid item md={
                    4
                }>
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
            <CurrencyTable /> 
            {/* <Grid container spacing={2}>
                <Grid item md={6}>
               <CurrencyTable /> 
                </Grid>
               

            </Grid> */}
           <FooterHome/> 
        </Box>
    </BasePage>);
}
 
export default Home;