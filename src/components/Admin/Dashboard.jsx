import React from "react";
import "./Dashboard.css";
import { FaAddressBook } from "react-icons//fa6";
import { FaCreativeCommonsBy } from "react-icons//fa6";
import { FaCreativeCommonsNc } from "react-icons//fa6";
import { FaCommentDollar } from "react-icons//fa6";
const Dashboard = () => {
  return (
    <div className="dContainer" style={{ marginTop: 40, margin: 20 }}>
      <h1 className="dHeading" style={{marginLeft:15}}>Dashboard</h1>
      <div className="dInnerContainer" style={{ display: "flex", margin:'20px' }}>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg" style={{backgroundColor:'#00c0ef '}}><FaAddressBook size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>TOTAL STUDENT</div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg" style={{backgroundColor:'#dd4b39'}}><FaCreativeCommonsBy size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>TOTAL TEACHER</div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg" style={{backgroundColor:'#00a65a'}} ><FaCommentDollar size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>MONTHLY INCOME</div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg" style={{backgroundColor:'#f39c12 '}}><FaCommentDollar size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>TOTAL INCOME</div>
          </div>
        </div>
      </div>
      <div className="dInnerContainer" style={{ display: "flex", margin:'20px'  }}>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg"  style={{backgroundColor:'#00c0ef '}}><FaCommentDollar size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>DAILY INCOME</div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg" style={{backgroundColor:'#dd4b39'}}><FaCreativeCommonsNc size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>MONTHLY DUE</div>
          </div>
         
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg" style={{backgroundColor:'#00a65a'}}><FaCreativeCommonsNc size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>DAILY DUE</div>
          </div>
        
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div className="half yellow-bg" style={{backgroundColor:'#f39c12 '}}><FaCreativeCommonsNc size={50}/></div>
            <div className="Dhalf dText" style={{color:'black'}}>TOTAL DUE</div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
