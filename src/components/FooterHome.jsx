import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const FooterHome = () => {
    return (<Box>
        <div style={{
            textAlign: 'center',
            margin: '4px',
        }}>
            <span style={{
                fontSize: '24px',
                fontFamily: 'arial',
                fontWeight: 'bold',
                backgroundColor: 'grey',
                display: 'inline-block',
                padding: '0 10px'
            }}>
                EXCHANGES RATES
            </span>
        </div>
        <div style={{
            textAlign: 'center',
            margin: '4px',
        }}>
            <span style={{
                fontSize: '24px',
                fontFamily: 'arial',
                fontWeight: 'bold',
                letterSpacing: '2px',
                color: 'rgb(7, 142, 226)',
                display: 'inline-block',
                padding: '10px 0'
            }}>
                TAUX DE CHANGE
            </span>
        </div>

        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/login">Login</Link>
    </Box> );
}
 
export default FooterHome;