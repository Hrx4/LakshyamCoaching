import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { FaAddressBook } from "react-icons//fa6";
import { FaCreativeCommonsBy } from "react-icons//fa6";
import { FaCreativeCommonsNc } from "react-icons//fa6";
import { FaCommentDollar } from "react-icons//fa6";
import SubDashBoard from "./SubDashBoard";
import backend from "../../backend";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const [subDash, setSubDash] = useState("noteform");

  const handleMonthlyIncome = () => {
    setSubDash("MonthlyIncome");
  };

  const handleTotalIncome = () => {
    setSubDash("TotalIncome");
  };

  const handleMonthlyDue = () => {
    setSubDash("MonthlyDue");
  };

  const handleTotalDue = () => {
    setSubDash("TotalDue");
  };
  const list = ["all" , "office 1", "office 2", "office 3"]
  const [income, setIncome] = useState([]);
  const [office, setOffice] = useState("");

  const { id } = useParams();
  useEffect(() => {
    const incomeList = async () => {
      try {
        const response = await fetch(`${backend}student/getdashboard/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentOffice:
              id === "office1"
                ? "office 1"
                : id === "office2"
                ? "office 2"
                : id === "office3"
                ? "office 3"
                : id === "superadmin"
                ? office === "all" ? "" : office
                : "none",
          }),
        });

        const resJson = await response.json();

        if (response.status === 200) {
          setIncome(resJson);
          console.log("====================================");
          console.log(resJson);
          console.log("====================================");
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
    incomeList();
  }, [id , office]);

  return (
    <div
      className="dContainer"
      style={{ marginTop: 40, margin: 20, width: "100%" }}
    >
      <div style={{display:"flex" , justifyContent:"space-between"}}>
      <h1 className="dHeading" style={{ marginLeft: 15, display: "flex" }}>
        Dashboard
        
      </h1>
      {
        (id === "superadmin")  ? <select
          name="office"
          id="office"
          style={{height:"50%"}}
          value={office}
          onChange={(e) => {
            setOffice(e.target.value);
          }}
        >
          <option value="" disabled="disabled">
            Choose
          </option>
          {list.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select> : null

      }
      </div>
      
      <div
        className="dInnerContainer"
        style={{
          display: "flex",
          marginTop: "20px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#00c0ef " }}
            >
              <FaAddressBook size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              TOTAL STUDENT
              <div>{income?.totalStudent}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <FaCreativeCommonsBy size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              TOTAL TEACHER
              <div>{income?.totalTeacher}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#00a65a" }}
            >
              <FaCommentDollar size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={handleMonthlyIncome}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              MONTHLY INCOME
              <div>{income?.monthlyIncome}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dInnerContainer"
        style={{
          display: "flex",
          marginTop: "20px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <FaCreativeCommonsNc size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                flexDirection: "column",
              }}
              onClick={handleMonthlyDue}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              MONTHLY DUE
              <div>{income?.monthlyDue}</div>
            </div>
          </div>
        </div>

        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#f39c12 " }}
            >
              <FaCommentDollar size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={handleTotalIncome}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              TOTAL INCOME
              <div>{income?.totalIncome}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#f39c12 " }}
            >
              <FaCreativeCommonsNc size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                flexDirection: "column",
              }}
              onClick={handleTotalDue}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              TOTAL DUE
              <div>{income?.totalDue}</div>
            </div>
          </div>
        </div>
      </div>

      {subDash === "MonthlyIncome" ? (
        <SubDashBoard headingDash="Monthly Income" apiRoute="monthlyincome" office={office} />
      ) : null}
      {subDash === "TotalIncome" ? (
        <SubDashBoard headingDash="Total Income" apiRoute="totalincome" office={office} />
      ) : null}
      {subDash === "MonthlyDue" ? (
        <SubDashBoard headingDash="Monthly Due" apiRoute="monthlydue" office={office} />
      ) : null}
      {subDash === "TotalDue" ? (
        <SubDashBoard headingDash="Total Due" apiRoute="totaldue" office={office} />
      ) : null}
    </div>
  );
};

export default Dashboard;
