import React from "react";
import "./PaymentHistoryTab.css";

const PaymentHistoryTab = ({ admissionList, paymentList }) => {
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
                  <button className="actionButton">View Invoice</button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryTab;
