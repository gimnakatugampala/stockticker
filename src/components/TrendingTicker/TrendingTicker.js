import React, { useEffect ,useState} from 'react'
import Table from 'react-bootstrap/Table'

import './styles.css'

const TrendingTicker = ({TrendingTickerAPI,isLoading}) => {

    const [trending, settrending] = useState([])

    useEffect(() =>{

        TrendingTickerAPI()
        .then(data => {
            settrending(data.finance.result[0].quotes)
            console.log(data)
        })
    })

    return (
        <div>
            <h1>Trending Ticker</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>($)Last Price</th>
                    <th>Change</th>
                    <th>%Change</th>
                    </tr>
                </thead>
                <tbody>
                {isLoading ? (
                <div className="spinner-border text-primary m-auto" role="status"></div>
               ) : trending?.map((trend ,index)=> (
                <tr key={index}>
                <td style={{fontWeight:'bold',color:'#0d6efd'}}>{trend.symbol}</td>
                <td>{trend.shortName}</td>
                <td style={{fontWeight:'bolder'}}>$ {trend.regularMarketPreviousClose.toFixed(2)}</td>
                <td className={Math.sign(trend.regularMarketChange) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{trend.regularMarketChange.toFixed(3)}</td>
                <td className={Math.sign(trend.regularMarketChangePercent) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{trend.regularMarketChangePercent.toFixed(2) } %</td>
                 </tr>
               ))}
               
                </tbody>
                </Table>
        </div>
    )
}

export default TrendingTicker
