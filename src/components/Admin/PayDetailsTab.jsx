import React, { useState } from "react";
import PaymentHistoryTab from "./PaymentHistoryTab";

const PayDetailsTab = ({studentPayList , setStudentPayList}) =>{
    const [payHistory, setPayHistory] = useState();
    const PayHistoryTab = () =>{
        setPayHistory('PaymentHistory');

    }
    return(
        <div style={{marginTop:150}}>
        <div >
            <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #000'}}>
            <thead>
        <tr style={{backgroundColor: '#f2f2f2'}}>
            <th style={{border: '1px solid #000', padding: '8px'}}>Id</th>
            <th style={{border: '1px solid #000', padding: '8px'}} >Name</th>
            <th style={{border: '1px solid #000', padding: '8px'}}>Action</th>
        </tr>
        </thead>

        {
            studentPayList.map(
            (item,index) => (
                <tr style={{border:"1px solid black", padding:5}} key={item._id}>
                    <td style={{border: '1px solid #000', padding: '8px'}}>{index+1}</td>
                    <td style={{border: '1px solid #000', padding: '8px'}}>{item.studentName}</td>
                    <td style={{border: '1px solid #000', padding: '8px' }}><button>Add Payment</button>   <button onClick={PayHistoryTab(item.studentEnrollment)}>View Payments</button></td>
                </tr>
            ))
        }
        
        
    </table>
        </div>
        {
        (payHistory==='PaymentHistory')?
        <PaymentHistoryTab/>:
        null
      }
    </div>
    )
}

export default PayDetailsTab;