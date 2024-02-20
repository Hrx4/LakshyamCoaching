import React, { useState } from "react";
import backend from "../../backend";
import { Box, Button, CircularProgress, Modal } from "@mui/material";
import { ToastContainer } from "react-toastify";

const AllBanner = ({ bannerList, setBannerList }) => {
  const [modal, setModal] = useState(false);
  const [updateId, setUpdateId] = useState("");
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
        if (
          files[0].type === "image/jpeg" ||
          files[0].type === "image/jpg" ||
          files[0].type === "image/png"
        )
          setImage(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleCustomerClose = () => setModal(false);

  const CustomerModalOpen = (id, popupLink, popupImage) => {
    const key = id;
    setUpdateId(key);
    setLink(popupLink);
    setImage(popupImage);
    setModal(true);
  };

  const handleDelete = async (id) => {
    const key = JSON.parse(id);
    console.log("====================================");
    console.log(key, id);
    console.log("====================================");

    try {
      const response = await fetch(`${backend}popup/${key}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      await response.json();
      console.log("====================================");
      console.log(response);
      console.log("====================================");

      setBannerList([...bannerList.filter((item) => item._id !== id)]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateList = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}popup/${updateId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          popupLink: link,
          popupImage: image,
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
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <ToastContainer />
      <div
        className="table-scroll"
        style={{
          width: "100%",
          overflowX: "scroll",
          overflowY: "scroll",
          padding: 10,
          height: "100vh",
        }}
      >
        <table>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: 5 }}>
                Banner Link
              </th>
              <th style={{ border: "1px solid black", padding: 5 }}>
                Banner Image
              </th>
              <th style={{ border: "1px solid black", padding: 5 }}>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {bannerList.map((item, index) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.popupLink}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.popupImage}
                </td>

                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button
                    style={{ marginBottom: 5 }}
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(JSON.stringify(item._id))}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ marginBottom: 5 }}
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() =>
                      CustomerModalOpen(
                        item._id,
                        item.popupLink,
                        item.popupImage
                      )
                    }
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={modal}
        onClose={handleCustomerClose}
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
            <form onSubmit={updateList}>
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
        </Box>
      </Modal>
    </>
  );
};

export default AllBanner;
