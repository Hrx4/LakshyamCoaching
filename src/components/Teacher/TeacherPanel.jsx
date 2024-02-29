import React, {useState, useRef} from "react";
import SnavBar from "../Admin/SnavBar";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";
import TeacherProfile from "./TeacherProfile";
import TeacherAddNote from "./TeacherAddNote";
import AskQuery from "./AskQuery";
import AskLeave from "./AskLeave";


const TeacherPanel = () =>{
  const ref = useRef();
  const [noteView, setNoteView] = useState("teacherprofile");
const [slideOpen, setSlideOpen] = useState(false);
const handleTeacherProfile = async () => {
  setNoteView("teacherprofile");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};
const handleAddNote = async () => {
  setNoteView("addnote");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};
const handleAskQuery = async () => {
  setNoteView("askquery");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};
const handleAskLeave = async () => {
  setNoteView("leave");
  ref.current.classList.add("slider__close");
  ref.current.classList.remove("slider__open");
  setSlideOpen(false);
};


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
        <SnavBar Handler="Hi Teacher!"/>
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
            onClick={handleTeacherProfile}
          >
            ▶ Profile
          </div>
          <div
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
            onClick={handleAddNote}
          >
            ▶ Add Notes
          </div>
          <div
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
            onClick={handleAskQuery}
          >
            ▶ Ask Query
          </div>
          <div
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
            onClick={handleAskLeave}
          >
            ▶ Ask Leave
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
          {noteView === "teacherprofile" ? <TeacherProfile/> : null}
          {noteView === "addnote" ? <TeacherAddNote/> : null}
          {noteView === "askquery" ? <AskQuery/> : null}
          {noteView === "leave" ? <AskLeave/> : null}

          
        </div>
          
      </div>
        </>
    )
}

export default  TeacherPanel;