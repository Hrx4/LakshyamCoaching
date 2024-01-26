import React from "react";


const TrackPayment = () =>{

    return (
        <>
        <h1 style={{ marginLeft: 15, display: "flex" }}  className="dHeading">Track Your Payment</h1>
        <div
          style={{
            position: "absolute",
            top:"20%",
            left:"13%",
            width: "70%",
            overflowX: "scroll",
            overflowY: "scroll",
            padding: 10,
            height: "100vh",

          }}
          className="payment-table"
        >
          <table>
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    width: "25px",
                  }}
                >
                  ID
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Year
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Month
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Payment Type
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Paid
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Date
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              
                <tr >
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                 
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                
                  </td>
                  <td className="actionButtons">
                    {" "}
                    <button className="actionButton">View Invoice</button>
                  </td>
                </tr>
        
            </tbody>
          </table>
        </div>
        </>
    )
}

export default TrackPayment;