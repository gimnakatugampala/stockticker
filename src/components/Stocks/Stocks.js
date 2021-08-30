import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'


const Stocks = ({TrendingTickerAPI,stocks,setstocks,isLoading}) => {

    useEffect(() => {
        TrendingTickerAPI()
        .then(data => setstocks(data.finance.result[0].quotes.filter(quote => quote.quoteType === 'EQUITY')))
    })

    return (
        <div>
            <h1>Stocks</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Symbol</th>
                    <th>Company Name</th>
                    <th>($) Last Price</th>
                    <th>($) Change</th>
                    <th>%Change</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading?(
                        <div className="spinner-border text-primary m-auto" role="status"></div>
                    ):
                    stocks?.map((stock,index) =>(
                        <tr key={index}>
                        <td style={{fontWeight:'bold',color:'#0d6efd'}}>{stock.symbol}</td>
                        <td>{stock.shortName}</td>
                        <td style={{fontWeight:'bolder'}}>$ {stock.regularMarketPreviousClose.toFixed(2)}</td>
                        <td className={Math.sign(stock.regularMarketChange) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{stock.regularMarketChange.toFixed(3)}</td>
                        <td className={Math.sign(stock.regularMarketChangePercent) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{stock.regularMarketChangePercent.toFixed(2) } %</td>
                         </tr>
                    ))
                    }
              
               
                </tbody>
                </Table>
        </div>
    )
}

export default Stocks
