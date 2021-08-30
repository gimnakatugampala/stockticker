import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'


export const TopLosers = ({TopLosersAPI,losers,setlosers,isLoading}) => {

    useEffect(() => {
        TopLosersAPI()
        .then(data => setlosers(data))
    })

    return (
        <div>
            <h1>Top Losers</h1>

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
                    losers?.map((loser,index) =>(
                            <tr key={index}>
                            <td style={{fontWeight:'bold',color:'#0d6efd'}}>{loser.ticker}</td>
                            <td>{loser.companyName}</td>
                            <td style={{fontWeight:'bolder'}}>${loser.price}</td>
                            <td className={Math.sign(loser.changes) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>$ {parseInt(loser.changes).toFixed(2)}</td>
                            <td className={Math.sign(loser.changesPercentage) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{parseInt(loser.changesPercentage).toFixed(2)}%</td>
                             </tr>
                        ))
                    }
              
               
                </tbody>
                </Table>
            
        </div>
    )
}

export default TopLosers

