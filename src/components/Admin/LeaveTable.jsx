import React, { useEffect, useState } from 'react'
import backend from '../../backend';
const LeaveTable = () => {
    const [leaveRecords, setLeaveRecords] = useState([]);
    const updateList = async (id , status) => {
        try {
          const response = await fetch(`${backend}leave/${id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              leaveStatus: status,
              
            }),
          });
    
          const resJson = await response.json();
          console.log(resJson);
          if (response.status === 201) {
            console.log("fine");
            window.location.reload();
          } else {
            console.log("Some error occured");
            alert("Error Occured")
          }
        } catch (err) {
            alert("Error Occured")

          console.log(err);
        }
      };
    useEffect(() => {
        const getList = async () => {
          try {
            const response = await fetch(
              `${backend}leave/`,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            );
    
            const resJson = await response.json();
    
            console.log(resJson);
            setLeaveRecords(resJson);
          } catch (err) {
            console.log(err);
          }
        };
        getList();
      }, []);
  return (
    <>
        <div style={{ width: "100%",
            overflowX: "scroll",
            overflowY: "scroll",
            padding: 10,
            height: "100vh"}}>
        <table style={{ overflowX: "scroll" }}>
          <thead>
            <tr style={{textAlign:"center"}}>
              <th>Leave Date</th>
              <th>Leave Days</th>
              <th>PDF File</th>
              <th>Teacher Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.leaveDate}</td>
                <td>{record.leaveDays}</td>
                <td>{record.leavePdf ? record.leavePdf : ""}</td>
                <td>{record.teacherName}</td>
                {
                    record.leaveStatus==="Pending" ? 
                    (
                        <td>
                    <button onClick={()=>updateList(record._id , "Approve")}>Approve</button>
                    <button onClick={()=>updateList(record._id , "Dis Approve")} style={{marginLeft:5}}>Disapprove</button>
                </td>
                    ) : (<td> {record.leaveStatus}</td>)
                }
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </>
  )
}

export default LeaveTable