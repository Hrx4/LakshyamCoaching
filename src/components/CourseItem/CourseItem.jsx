import React, { useState } from "react";
import "./CourseItem.css";
import { Box, Modal } from "@mui/material";
//import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";
import { Link } from "react-router-dom";

const CourseItem = ({ imgSrc, title, description }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNum, setPhNum] = useState("");
  const [wclass, setWClass] = useState("class IV");
  const [course, setCourse] = useState("CBSE Board All Subjects");
  const [addmsg, setAddMsg] = useState("");
  const [modal, setModal] = useState(false);

  const CustomerInfoOpen = (name, email, phNum, wclass, course, addmsg) => {
    // const key = id
    setName(name);
    setEmail(email);
    setPhNum(phNum);
    setWClass(wclass);
    setCourse(course);
    setAddMsg(addmsg);
    setModal(true);
  };
  const onClose = () => {
    setModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${backend}apply/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applyName: name,
          applyEmail: email,
          applyPhone: phNum,
          applyClass: wclass,
          applyCourse: course,
          applyMessage: addmsg,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.log("Some error occured");
        toast.warning("All fields Required", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      console.log(err);
    }

    console.log("Submitted Data:");

    setName("");
    setEmail("");
    setPhNum("");
    setWClass("class IV");
    setCourse("CBSE Board All Subjects");
    setAddMsg("");
  };
  return (
    <>
      <div className="item">
        <img src={imgSrc} alt={title} />
        <div className="down-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div
            className="text-button-pay"
            style={{ display: "flex", justifyContent: "space-between" , marginTop:1 }}
          >
            <div
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                fontWeight : "bold"
              }}
              onClick={() =>
                CustomerInfoOpen(name, email, phNum, wclass, course, addmsg)
              }
            >
              Apply Now <i className="fa fa-angle-double-right"></i>
            </div>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                fontSize: 16,
              }}
              to={"/freetutorial"}
            >
              Free Notes
            </Link>
          </div>
        </div>
      </div>

      <Modal
        open={modal}
        onClose={onClose}
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
            // bgcolor: 'background.paper',
            bgcolor: "rgb(22,34,57,0.95)",
            color: "white",
            border: "2px solid #000",
            //border: "none",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <div
            style={{ width: "auto", border: "none" }}
            className="form-container"
          >
            <h1 style={{ fontSize: 25, fontWeight: "bold" }}>
              Apply for Lakshyam Courses
            </h1>
            <IconButton
              edge="end"
              color="inherit"
              onClick={onClose}
              aria-label="close"
              style={{ position: "absolute", top: "8px", right: "8px" }}
            >
              <CloseIcon />
            </IconButton>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name*</label>
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>&nbsp;
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label>Phone No.*</label>
                <br />
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  value={phNum}
                  onChange={(e) => setPhNum(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ marginRight: 10 }}>Class*</label>
                <br />
                <select
                  type="text"
                  value={wclass}
                  onChange={(e) => setWClass(e.target.value)}
                  required
                >
                  <option value="class IV">class IV</option>
                  <option value="class V">class V</option>
                  <option value="class VI">class VI</option>
                  <option value="class VII">class VII</option>
                  <option value="class VIII">class VIII</option>
                  <option value="class IX">class IX</option>
                  <option value="class X">class X</option>
                  <option value="class XI">class XI</option>
                  <option value="class XII">class XII</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ marginRight: 10 }}>Course*</label>
                <br />
                <select
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                >
                  <option value="CBSE Board All Subjects">
                    CBSE Board All Subjects
                  </option>
                  <option value="ICSE Board All Subjects">
                    ICSE Board All Subjects
                  </option>
                  <option value="Class 11 CBSE Boards + CUET">
                    Class 11 CBSE Boards + CUET
                  </option>
                  <option value="Class 11 ICSE Boards + CUET">
                    Class 11 ICSE Boards + CUET
                  </option>
                  <option value="Class 12 CBSE Boards + CUET">
                    Class 12 CBSE Boards + CUET
                  </option>
                  <option value="Class 12 ICSE Boards + CUET">
                    Class 12 ICSE Boards + CUET
                  </option>
                  <option value="JEE Mains ">JEE Mains </option>
                  <option value="NEET ">NEET </option>
                  <option value="Foundation Course JEE IIT / NEET">
                    Foundation Course JEE IIT / NEET
                  </option>
                  <option value="Commerce Board + CUET">
                    Commerce Board + CUET
                  </option>
                  <option value="CA Foundation">CA Foundation</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea
                  value={addmsg}
                  onChange={(e) => {
                    setAddMsg(e.target.value);
                  }}
                  rows="6"
                  cols="37"
                  placeholder="Add Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "rgba(63, 229, 3, 0.867)" }}
              >
                Apply Now
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CourseItem;
