import { Box } from "@mui/system";
import React, { useEffect, useState } from "react"
import useFetchDataWithPagination from "../utility/useFetchDataWithPagination";
const CurrencyTable = React.memo(function () {
    
    const { data } = useFetchDataWithPagination("devises");
    
    const [donnes, setDonnes] = useState(null)

    useEffect(() => {
        if (data?.data) {
            setDonnes(data?.data)
        }
    }, [data])
  
    return (<Box>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        
                    </th>
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
              
                {donnes && donnes.map((e, index) => (
                 <tr key={index} className="">
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
                                    {
                                       e.buy_at
                                      
                                    }
                            </span>
                            </div>
                            
                        </td>
                        <td>
                            <div style={{
                                textAlign: "center",
                            }}>
                            <span className="montant">
                                   
                                    {
                                        e.sell_at
                                    }
                            </span>
                            </div>
                        </td>
                  </tr>

                ))}

              
            </tbody>
        </table>
        
    </Box> );
})
 
export default CurrencyTable;