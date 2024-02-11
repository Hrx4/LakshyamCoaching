import React, { useState } from "react";
import "./PaymentHistoryTab.css";
import { Button, Box, Modal } from "@mui/material";
import logo from "./invoiceLogo.png";
const PaymentHistoryTab = ({ admissionList, paymentList, studentList }) => {
  const data = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augast",
    "September",
    "October",
    "November",
    "December",
  ];

  const [open, setOpen] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDetails, setinvoiceDetails] = useState({});
  const date = new Date().toISOString().split("T")[0];
  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="table-scroll"
      style={{
        marginTop: 40,
        overflowX: "scroll",
        overflowY: "scroll",
        width: "100%",
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #000",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th
              style={{
                border: "1px solid #000",
                padding: "8px",
                width: "25px",
              }}
            >
              ID
            </th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Year</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>
              Payment Month
            </th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>
              Payment Fee
            </th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>
              Paid Month
            </th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentList?.map((item, index) =>
            item.paidMonth !== null ? (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
              >
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {item.year}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {data[item.paymentMonth]}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {item.paymentFee}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {data[item.paidMonth]}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {item.paidDate}
                </td>
                <td className="actionButtons">
                  {" "}
                  <button
                    className="actionButton"
                    onClick={() => {
                      setinvoiceDetails(item);
                      setInvoiceNo(`LC${studentList?.studentEnrollment}`)
                      setOpen(true);
                    }}
                  >
                    View Invoice
                  </button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>

      <Modal
        open={open}
        onClose={handleClose}
        style={{
          height: "100vh",
          width: "100%",
          marginTop: "auto",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 570,
              height: 620,
              bgcolor: "background.paper",
              // boxShadow: 24,
              p: 4,
            }}
          >
            <img
              src={logo}
              alt="orijeen logo"
              style={{
                width: "80px",
                height: "auto",
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
            />
            <h4
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Lakshyam Coaching
            </h4>
            <h4
              style={{
                position: "absolute",
                top: "30px",
                right: "15px",
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Invoice
            </h4>
            <p style={{ position: "absolute", top: "80px", left: 10 }}>From</p>
            <p
              style={{
                position: "absolute",
                top: "100px",
                fontWeight: "bold",
                left: 10,
              }}
            >
              Lakshyam Coaching
            </p>
            <span style={{ position: "absolute", top: "80px", right: "120px" }}>
              invoice no.
            </span>
            <span
              style={{
                position: "absolute",
                top: "80px",
                right: "10px",
                fontWeight: "bold",
              }}
            >
              {invoiceNo}
            </span>
            <span
              style={{ position: "absolute", top: "100px", right: "110px" }}
            >
              invoice date
            </span>
            <span
              style={{
                position: "absolute",
                top: "100px",
                right: "10px",
                fontWeight: "bold",
              }}
            >
              {date}
            </span>
            <div
              style={{
                position: "absolute",
                top: "140px",
                right: "20px",
                textAlign: "right",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Bill to</span>
              <br />
              <span>{studentList?.studentName}</span>
              <p style={{ marginBottom: "0rem" }}>
                {studentList?.studentEmail}
              </p>
              <p style={{ marginBottom: "0rem" }}>{studentList?.fatherNo}</p>
              <p style={{ marginBottom: "0rem" }}>
                {studentList?.studentAddress}
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "280px",
                right: "0px",
                padding: 10,
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: " collapse",
                  marginTop: "20px",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "rgb(22,34,57,0.95)",
                      }}
                      className="bgColor"
                    >
                      Student Name
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "rgb(22,34,57,0.95)",
                      }}
                      className="bgColor"
                    >
                      Payment Month
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "rgb(22,34,57,0.95)",
                      }}
                      className="bgColor"
                    >
                      Date
                    </th>
                    {/* <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "rgb(22,34,57,0.95)",
                    }}
                    className="bgColor"
                  >
                    Payment Type
                  </th> */}
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "rgb(22,34,57,0.95)",
                      }}
                      className="bgColor"
                    >
                      Amount
                    </th>
                    <th
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "rgb(22,34,57,0.95)",
                      }}
                      className="bgColor"
                    >
                      Paid Month
                    </th>
                    {/* <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "rgb(22,34,57,0.95)",
                    }}
                    className="bgColor"
                  >
                    Total Amount
                  </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr key={invoiceDetails._id}>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      {studentList?.studentName}
                    </td>
                    <td
                      style={{
                        border: " 1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      {data[invoiceDetails?.paymentMonth]}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      {invoiceDetails?.paidDate}
                    </td>
                    {/* <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      {item?.paymentType}
                    </td> */}
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      {studentList?.monthlyIncome}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      {data[invoiceDetails?.paidMonth]}
                    </td>
                    {/* <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      {paymentList[0]?.lastIncomeMoney}
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ position: "absolute", top: "500px", left: "20px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>Note</p>
              <p>Thank you from Lakshyam Coaching</p>
            </div>

            <div id="button">
              <Button
                onClick={handleClose}
                variant="outlined"
                color="error"
                style={{ position: "absolute", bottom: "30px", left: "20px" }}
              >
                Close
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handlePrint}
                style={{ position: "absolute", bottom: "30px", right: "20px" }}
              >
                Print Document
              </Button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentHistoryTab;
