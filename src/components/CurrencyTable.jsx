import { Box } from "@mui/system";
import countries from "./CountryCurrency";
const CurrencyTable = () => {

    return (<Box>


        <table className="table">
           
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <Box sx={{
                            textAlign: "center",
                            fontFamily: "Helvetica",
                            fontWeight: 800,
                        }}>
                            <h1 style={{
                                letterSpacing: "12px"
                            }} >WE BUY AT</h1>
                            <h1  style={{
                                color: 'rgb(7, 142, 226)'
                            }}>NOUS ACHETONS A</h1>
                        </Box>
                    </th>
                    <th className="table_buy">
                    <Box sx={{
                            textAlign: "center",
                            fontFamily: "Helvetica",
                            fontWeight: 800,
                        }}>
                            <h1 style={{
                                letterSpacing: "12px"
                            }} >WE SELL AT</h1>
                            <h1 style={{
                                color: 'rgb(7, 142, 226)'
                            }}>NOUS VENDONS A</h1>
                        </Box>
                       
                    </th>
                </tr>
            </thead>
            <tbody>
              
                {countries.map(e => (
                 <tr>
                      <td >
                            <div className="currencyName">
                            <div className={"currency-flag currency-flag-" + e.name.toLowerCase()}></div>
                            <div className="titleMoney"> {e.name}</div>
                           </div>
                        </td>
                        <td>
                            <div style={{
                                textAlign: "center",
                            }}>
                            <span className="montant">
                            {Math.floor(Math.random() * 10000000)}
                            </span>
                            </div>
                            
                        </td>
                        <td>
                            <div style={{
                                textAlign: "center",
                            }}>
                            <span className="montant">
                              {Math.floor(Math.random() * 10000000)}
                            </span>
                            </div>
                        </td>
                  </tr>

                ))}

              
            </tbody>
        </table>
        
    </Box> );
}
 
export default CurrencyTable;