import React, { useState } from "react";
import backend from "../../backend";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";

const AddBanner = () => {
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
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
        if (files[0].type === "image/jpeg" || files[0].type === "image/png")
          setImage(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${backend}popup/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          popupImage: image,
          popupLink: link,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setImage("");
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
            <label>Banner Link :</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Banner Image:</label>
            <input type="file" accept="image/*" onChange={uploadFiles} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddBanner;
