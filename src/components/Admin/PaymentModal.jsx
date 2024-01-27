import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import backend from "../../backend";

const PaymentModal = ({ modalOpen, setModalOpen, paymentList, paymentId }) => {
  // useEffect(() => {
  //     setModalOpen(true)
  // }, [])

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
    "Ovtober",
    "November",
    "December",
  ];
  const [monthList, setMonthList] = useState([]);

  const handleCheck = (e, index) => {
    e.target.checked
      ? setMonthList([...monthList, index])
      : setMonthList([...monthList.filter((item) => item !== index)]);
    console.log("====================================");
    console.log(monthList);
    console.log("====================================");
  };

  const updateList = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}student/payment/${paymentId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          monthList: monthList,
        }),
      });

      const resJson = await response.json();
      console.log(resJson);
      if (response.status === 201) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", md: 500 },
            height: "70vh",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <div style={{ width: "auto" }} className="form-container">
            <div className="form-group">
              <label>
                Student Enrollment Id : {paymentList?.studentEnrollment}{" "}
              </label>
              <label>Student Courses : </label>
              <div>
                {"IIT-JEE/NEET -> " +
                  paymentList?.iitNeetCourse +
                  " , Subjects -> " +
                  paymentList?.iitNeetSub +
                  " , Fee ->" +
                  paymentList?.iitNeetFee}
              </div>
              <div>
                {"Schooling Solution -> " +
                  paymentList?.schoolingCourse +
                  " , Class -> " +
                  paymentList?.schoolingClass +
                  " , Subject -> " +
                  paymentList?.schoolingSub +
                  " , Fee ->" +
                  paymentList?.schoolingFee}
              </div>
              <div>
                {"Extra Curricular -> " +
                  paymentList?.extraSub +
                  " , Fee ->" +
                  paymentList?.iitNeetFee}
              </div>
            </div>
            <form onSubmit={(e) => updateList(e)}>
              {paymentList?.paymentDetails.map((item, index) => (
                <div className="form-group">
                  <label>{data[item.paymentMonth]}:</label>
                  {item.paidMonth !== null ? (
                    <input type="checkbox" checked={true} />
                  ) : (
                    <input
                      type="checkbox"
                      value={index}
                      onClick={(e) => handleCheck(e, index)}
                    />
                  )}
                </div>
              ))}

              <button type="submit">Submit</button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default PaymentModal;
