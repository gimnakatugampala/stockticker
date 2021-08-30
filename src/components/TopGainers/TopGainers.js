import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'


export const TopGainers = ({TopGainersAPI,isLoading,setgainers,gainers}) => {

    useEffect(() => {
        TopGainersAPI()
        .then(data => setgainers(data))
    })

    return (
        <div>
            <h1>Top Gainers</h1>
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
                    gainers?.map((gainer,index) =>(
                            <tr key={index}>
                            <td style={{fontWeight:'bold',color:'#0d6efd'}}>{gainer.ticker}</td>
                            <td>{gainer.companyName}</td>
                            <td style={{fontWeight:'bolder'}}>${gainer.price}</td>
                            <td className={Math.sign(gainer.changes) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>$ {parseInt(gainer.changes).toFixed(2)}</td>
                            <td className={Math.sign(gainer.changesPercentage) === -1 ? 'text-danger' : 'text-success'} style={{fontWeight:'bold'}}>{parseInt(gainer.changesPercentage).toFixed(2)}%</td>
                             </tr>
                        ))
                    }
              
               
                </tbody>
                </Table>
        </div>
    )
}

export default TopGainers
