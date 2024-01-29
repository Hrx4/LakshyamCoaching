import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import "./Table.css";
import "./Form.css";
import backend from "../../backend";
const NoticeTable = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [link, setLink] = useState("");
  const [modal, setModal] = useState(false);
  const [updateId, setUpdateId] = useState("");

  const handleCustomerClose = () => setModal(false);

  const CustomerModalOpen = (id, noticeTitle, noticeDetails, noticeLink) => {
    const key = id;
    setUpdateId(key);
    setTitle(noticeTitle);
    setDetails(noticeDetails);
    setLink(noticeLink);
    setModal(true);
  };

  const handleDelete = async (id) => {
    const key = JSON.parse(id);
    console.log("====================================");
    console.log(key, id);
    console.log("====================================");

    try {
      const response = await fetch(`${backend}notice/${key}`, {
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

      props.setNoticeList([
        ...props.noticeList.filter((item) => item._id !== id),
      ]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateList = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}notice/${updateId}`, {
        method: "PUT",
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
          <tbody>
            {
              <tr>
                <th style={{ border: "1px solid black", padding: 5 }}>Title</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Details
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>Link</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Buttons
                </th>
              </tr>
            }
            {props.noticeList.map((item) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.noticeTitle}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.noticeDetails}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.noticeLink}
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
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() =>
                      CustomerModalOpen(
                        item._id,
                        item.noticeTitle,
                        item.noticeDetails,
                        item.noticeLink
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
                <label>Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Details:</label>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Link:</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default NoticeTable;
