import React from "react";


const StudentInfo = () =>{
    return(
        <div style={{marginTop:150}}>
            <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #000'}}>
        <tr style={{backgroundColor: '#f2f2f2'}}>
            <th style={{border: '1px solid #000', padding: '8px'}}>Id</th>
            <th style={{border: '1px solid #000', padding: '8px'}} >Name</th>
            <th style={{border: '1px solid #000', padding: '8px'}}>Action</th>
        </tr>
        <tr>
            <td style={{border: '1px solid #000', padding: '8px'}}>1</td>
            <td style={{cursor:'pointer', border: '1px solid #000', padding: '8px', }}>Pamela</td>
            <td style={{border: '1px solid #000', padding: '8px', }}><button>Edit</button>   <button style={{backgroundColor:'red'}}>Delete</button></td>
        </tr>
        
    </table>
        </div>
    )
}

export default StudentInfo;