import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'


const Cryptocurrencies = ({TrendingTickerAPI,cryptos,setcryptos,isLoading}) => {

    useEffect(() =>{
        TrendingTickerAPI()
        .then(data => setcryptos(data.finance.result[0].quotes.filter(quote => quote.quoteType === 'CRYPTOCURRENCY')))
    })

    return (
        <div>
            <h1>Cryptocurrencies</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>($) Last Price</th>
                    <th>($) Change</th>
                    <th>%Change</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading?(
                        <div className="spinner-border text-primary m-auto" role="status"></div>
                    ):
                    cryptos?.map((cryto,index) =>(
                            <tr key={index}>
                            <td style={{fontWeight:'bold',color:'#0d6efd'}}>{cryto.symbol}</td>
                            <td>{cryto.shortName}</td>
                            <td style={{fontWeight:'bolder'}}>$ {cryto.regularMarketPreviousClose.toFixed(2)}</td>
                            <td className={Math.sign(cryto.regularMarketChange) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{cryto.regularMarketChange.toFixed(3)}</td>
                            <td className={Math.sign(cryto.regularMarketChangePercent) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{cryto.regularMarketChangePercent.toFixed(2) } %</td>
                             </tr>
                        ))
                    }
              
               
                </tbody>
                </Table>
        </div>
    )
}

export default Cryptocurrencies
