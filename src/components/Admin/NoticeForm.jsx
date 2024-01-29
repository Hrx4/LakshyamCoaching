import React, { useState } from "react";
import "./Form.css"; // Import your CSS file
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";

function NoticeForm() {
  // Define state variables for form inputs
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [link, setLink] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)

    // Handle form submission here (e.g., send the data to the server)
    try {
      const res = await fetch(`${backend}notice/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noticeTitle: title,
          noticeDetails: details,
          noticeLink: link,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setTitle("");
        setDetails("");
        setLink("");
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
      <ToastContainer />

      <div
        className="form-container"
        style={{ marginTop: 60, marginBottom: 50 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Details :</label>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Link :</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NoticeForm;
