import React, { useState } from "react";
import "./Form.css"; // Import your CSS file
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";

function NoteForm() {
  // Define state variables for form inputs
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Math");
  const [classValue, setClassValue] = useState("Class XI");
  const [batch, setBatch] = useState("Batch 1");
  const [image, setImage] = useState("");
  const [pdf, setPdf] = useState("");
  const [course, setCourse] = useState("JEE Main");
  const [loading, setLoading] = useState(false);

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
        if (files[0].type === "application/pdf") setPdf(data.url);
        if (files[0].type === "image/jpeg" || files[0].type === "image/png")
          setImage(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)

    // Handle form submission here (e.g., send the data to the server)
    console.log({ title, subject, classValue, batch, image, pdf, course });
    try {
      const res = await fetch(`${backend}super/getnote/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noteTitle: title,
          noteSubject: subject,
          noteClass: classValue,
          noteBatch: batch,
          noteImage: image,
          notePdf: pdf,
          noteCourse: course,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setTitle("");
        setImage("");
        setPdf("");
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("All field fill required", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Some error occured");
      }
    } catch (err) {
      toast.error("All field fill required", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }

    // setLoading(false)
  };

  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <ToastContainer />

      <div
        className="form-container"
        style={{ marginTop: 60, marginBottom: 50 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Note Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Subject:</label>
            <select
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="Math">Math</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Class:</label>
            <select
              type="text"
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
            >
              <option value="Class XI">Class XI</option>
              <option value="Class XII">Class XII</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Batch:</label>
            <select
              type="text"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            >
              <option value="Batch 1">Batch 1</option>
              <option value="Batch 2">Batch 2</option>
              <option value="Batch 3">Batch 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Note Thumbnail Image:</label>
            <input type="file" accept="image/*" onChange={uploadFiles} />
          </div>

          <div className="form-group">
            <label>Upload File:</label>
            <input type="file" accept=".pdf" onChange={uploadFiles} />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Course:</label>
            <select
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="JEE Main">JEE Main</option>
              <option value="WBJEE">WBJEE</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NoteForm;
