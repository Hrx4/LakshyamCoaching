import React from "react";
import './PaymentHistoryTab.css';

const PaymentHistoryTab = () =>{
    return(
        <div style={{marginTop:100}}>
            <table className="PHT" style={{borderCollapse: 'collapse', width:'100%', border: '1px solid #000'}}>
                <thead >
                    <tr style={{backgroundColor: '#f2f2f2'}}>
                        <th style={{border: '1px solid #000', padding: '8px', width:'25px'}}>ID</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Year</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Month</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Payment Type</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Paid</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Date</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody >


                    <tr >
                        <td style={{border: '1px solid #000', padding: '8px'}}>1</td>
                        <td style={{border: '1px solid #000', padding: '8px'}}>2023</td>
                        <td style={{border: '1px solid #000', padding: '8px'}}>October</td>
                        <td style={{border: '1px solid #000', padding: '8px'}}>Monthly</td>
                        <td style={{border: '1px solid #000', padding: '8px'}}>800</td>
                        <td style={{border: '1px solid #000', padding: '8px'}}>06-10-2023</td>
                        <td className="actionButtons"><button className="actionButton">View Details</button> <button className="actionButton">View Invoice</button></td>
                    </tr>
                    </tbody>
                
            </table>
        </div>
    )
}

export default PaymentHistoryTab;