import React, { useEffect, useState } from "react";
import PaymentHistoryTab from "./PaymentHistoryTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";
import PaymentModal from "./PaymentModal";

const PayDetailsTab = ({ studentPayList, setStudentPayList }) => {
  const [payHistory, setPayHistory] = useState();
  const [paymentList, setPaymentList] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  const [lastPaidMonth , setLastPaidMonth ] = useState();
  const [lastPaidYear , setLastPaidYear ] = useState();


  // const PayHistoryTab = (studentEnrollment) =>{

  const handleAllStudentTable = async (studentEnrollment) => {
    // e.preventDefault();
    try {
      const res = await fetch(`${backend}student/getpayment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: studentEnrollment,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setPaymentList(resJson);
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
    setPayHistory("PaymentHistory")
  };
  const handleAllStudentTable1 = async (studentEnrollment) => {
    // e.preventDefault();
    try {
      const res = await fetch(`${backend}student/getpayment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: studentEnrollment,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setPaymentList(resJson);
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
        const x= resJson[0].paymentDetails.length
        setLastPaidMonth(resJson[0].paymentDetails[x-1].paymentMonth)
        setLastPaidYear(resJson[0].paymentDetails[x-1].paymentYear)
        
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
    setPayHistory("PaymentModal")
    setModalOpen(true)
  };

  useEffect(() => {
    console.log(paymentList);
  }, [paymentList]);

  return (
    <>
      <ToastContainer />
      <div style={{ marginTop: 150 }}>
        <div>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              border: "1px solid #000",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ border: "1px solid #000", padding: "8px" }}>Id</th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Action
                </th>
              </tr>
            </thead>

            {studentPayList.map((item, index) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
              >
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {item.studentName}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  <button
                    onClick={() => {
                      handleAllStudentTable1(item.studentEnrollment);
                      // setPayHistory("PaymentModal")
                      // setModalOpen(true)
                    }}
                  >
                    Add Payment
                  </button>{" "}
                  <button
                    onClick={() =>
                      {handleAllStudentTable(item.studentEnrollment)
                      }
                    }
                  >
                    View Payments
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        {payHistory === "PaymentHistory" ? (
          <PaymentHistoryTab
            paymentList={paymentList}
            setPaymentList={setPaymentList}
          />
        ) : null}
      </div>
      {
        payHistory === "PaymentModal" ?
        (
          <PaymentModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        paymentList={paymentList}
        setPaymentList={setPaymentList}
        paymentId={paymentList[0].paymentId}
        lastPaidMonth={lastPaidMonth}
        lastPaidYear={lastPaidYear}
      />
      )
      :null
      }
    </>
  );
};

export default PayDetailsTab;