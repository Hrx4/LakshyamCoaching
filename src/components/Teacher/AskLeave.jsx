import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";
const AskLeave = () => {
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveDays, setLeaveDays] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [leaveRecords, setLeaveRecords] = useState([]);
  const fetchStorage = JSON.parse(localStorage.getItem("lakshyamTeacher"));
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);

  const handleLeaveDateChange = (event) => {
    setLeaveDate(event.target.value);
  };

  const handleLeaveDaysChange = (event) => {
    setLeaveDays(event.target.value);
  };

  const uploadFiles = async (e) => {
    const { files } = e.target;
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "solardealership");
    data.append("cloud_name", "dkm3nxmk5");
    await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (files[0].type === "application/pdf") setPdfFile(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log("Leave Date:", leaveDate);
    console.log("Leave Days:", leaveDays);
    console.log("PDF File:", pdfFile);
    // Reset form fields

    try {
      const res = await fetch(`${backend}leave/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacherName: fetchStorage.teacherName,
          leaveDate: leaveDate,
          leaveDays: leaveDays,
          leavePdf: pdfFile,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        alert("Submitted");
        console.log("fine");
        setLeaveDate("");
        setLeaveDays("");
        setPdfFile(null);
        setCheck(!check);
      } else {
        console.log("Some error occured");
        alert("All field required");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch(
          `${backend}leave/${fetchStorage.teacherName}`,
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
  }, [check, fetchStorage.teacherName]);

  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <div style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}>
        <div
          style={{
            maxWidth: 500,
            height: 400,
            border: "1px solid white",
            padding: 20,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
          }}
        >
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="leaveDate">Leave Date:</label>
              <input
                type="date"
                id="leaveDate"
                value={leaveDate}
                onChange={handleLeaveDateChange}
                required
              />
            </div>
            <div>
              <label htmlFor="leaveDays">Leave Days:</label>
              <input
                type="number"
                id="leaveDays"
                value={leaveDays}
                onChange={handleLeaveDaysChange}
                required
              />
            </div>
            <div>
              <label htmlFor="pdfFile">PDF :</label>
              <input
                type="file"
                id="pdfFile"
                accept="application/pdf"
                onChange={uploadFiles}
                required
              />
            </div>
            <button style={{ marginTop: 20 }} type="submit">
              Submit
            </button>
          </form>
        </div>

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
                <td>{record.leaveStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
    </>
  );
};

export default AskLeave;
