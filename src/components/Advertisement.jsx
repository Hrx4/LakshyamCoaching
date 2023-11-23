import React from "react";
import './Advertisement.css';

const Advertisement = () => {
    return (
        <>
            
            <div class="Adcontainer">
            <div style={{float:'left',marginTop:100, marginBottom:100}}>
                <div class="advertisementBox" style={{ marginBottom:45}}>
                    {/* <h2 className="adH" style={{fontSize:45}}>Advertisement</h2> */}
                    <h3 className="adH" style={{fontSize:45, fontWeight:'bolder'}}>India's Most Loved Educational Platform!</h3>
                    <p className="adP" style={{fontSize:30, lineHeight: 1.5, paddingBottom:15,textAlign:'center'}}>With Lakshyam Coaching, Begin your journey to success.</p>
                    <div style={{ textAlign:"center"}} className="adFeatures">
                    <div>
                    <div className="subAdFeatures" style={{float:'left', fontSize:30,fontWeight:'bolder'}}>Happy Students<br/><div style={{textAlign:'center',paddingTop:15}}>10M+</div></div><div className="subAdFeatures" style={{float:'left', fontSize:30,fontWeight:'bolder'}}>Video lectures<br/><div  style={{textAlign:'center',paddingTop:15}}>31000+</div></div><div style={{float:'left', fontSize:30,fontWeight:'bolder'}} className="subAdFeatures">Mock Test<br/><div  style={{textAlign:'center',paddingTop:15}}>25000+</div></div><div style={{float:'left', fontSize:30, fontWeight:'bolder'}} className="subAdFeatures">Questions<br/><div  style={{textAlign:'center',paddingTop:15}}>8L+</div></div>
                    </div>
                    </div>
                </div>
                </div>
            
            </div>

        </>
    )
}

export default Advertisement;