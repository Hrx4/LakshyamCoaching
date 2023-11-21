import React from "react";
import { Button } from "@mui/material";

const AllBanner = () => {
    return (
        <>
            <div className='table-scroll' style={{ width: "100%", overflowX: "scroll", overflowY: "scroll", padding: 10, height: "100vh" }}>
                <table >
                    <thead>
                        <tr >
                            <th style={{ border: "1px solid black", padding: 5 }}>Banner Link</th>
                            <th style={{ border: "1px solid black", padding: 5 }}>Banner Image</th>
                            <th style={{ border: "1px solid black", padding: 5 }}>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td style={{border:"1px solid black" , padding:5}}>
              </td>
              <td style={{border:"1px solid black" , padding:5}}>
              </td>

              <td style={{border:"1px solid black" , padding:5}}>
                <Button style={{marginBottom:5}} variant='contained' color='error' size='small' >
                  Delete
                </Button>
                <Button style={{marginBottom:5}} variant='contained' color='success' size='small' >
                  Update
                </Button>
              </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllBanner;