import React, {useState, useRef} from "react";
import SnavBar from "../Admin/SnavBar";
import StudentProfile from "./StudentProfile";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";
import TrackPayment from "./TrackPayment";
import DuePayment from "./DuePayment";


const StudentPanel = () =>{
  const ref = useRef();
  const [noteView, setNoteView] = useState("studentprofile");
  const [slideOpen, setSlideOpen] = useState(false);
  const handleStudentProfile = async () => {
    setNoteView("studentprofile");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    
  };
  const handleStudentTrackPayment = () =>{
    setNoteView("studenttrackpayment");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  }
  const handleStudentDuePayment = () =>{
    setNoteView("due");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
  }
  const btnclicked = () => {
    if (!slideOpen) {
      ref.current.classList.remove("slider__close");
      ref.current.classList.add("slider__open");
      setSlideOpen(true);
    } else {
      ref.current.classList.add("slider__close");
      ref.current.classList.remove("slider__open");
      setSlideOpen(false);
    }
  };
    return(
        <>
            <SnavBar Handler="Hi Student!" />
            <div
        className="super-container"
        style={{
          display: "flex",
          backgroundColor: "rgba(22,34,57,0.85)",
          color: "white",
          height: "100vh",
        }}
      >
        <button
          className="hide__btn"
          style={{ position: "absolute", marginTop: 5 }}
          onClick={btnclicked}
        >
          {!slideOpen ? (
            <DoubleArrowIcon fontSize="small" />
          ) : (
            <ClearIcon fontSize="small" />
          )}
        </button>

        <div
         ref={ref}
          id="super-choose"
          className="super-choose"
          style={{ display: "flex", overflowY: "scroll" }}
        >
          <div
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
            onClick={handleStudentProfile}
          >
            ▶ Profile
          </div>
          <div
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
            onClick={handleStudentTrackPayment}
          >
            ▶ Track Payment
          </div>
          <div
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
            onClick={handleStudentDuePayment}

          >
            ▶ Due Payment
          </div>
          
          </div>
          <div
          style={{
            height: "98%",
            width: "100%",
            display: "flex",
            marginBottom: 20,
            overflowY: "scroll",
          }}
        >
          {noteView === "studentprofile" ? <StudentProfile/> : null}
          {noteView === "studenttrackpayment" ? <TrackPayment/> : null}
          {noteView === "due" ? <DuePayment/> : null}

        </div>
          
      </div>
        </>
    )
}

export default  StudentPanel;