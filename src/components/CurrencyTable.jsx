import { Box } from "@mui/system";
import countries from "./CountryCurrency";
const CurrencyTable = () => {

    return (<Box>


        <table className="table">
           
            <thead>
                <tr>
                    <th></th>
                    <th className="table_buy">
                        <h2>WE BUY AT</h2>
                        <h2>NOUS ACHETONS A</h2>

                    </th>
                    <th className="table_buy">
                       <h2> WE SELL AT</h2>
                       <h2> NOUS VENDONS A</h2>
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
                            <div className="montant">
                            {Math.floor(Math.random() * 10000000)}
                            </div>
                        </td>
                        <td>
                            <div className="montant">
                            {Math.floor(Math.random() * 10000000)}
                            </div>
                        </td>
                  </tr>

                ))}

              
            </tbody>
        </table>
        
    </Box> );
}
 
export default CurrencyTable;