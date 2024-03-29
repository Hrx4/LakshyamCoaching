import React, { useState } from "react";
import "./NotificationAndBanner.css";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "./WhyGradSchool/imageChoose/1.png";
import Banner2 from "./WhyGradSchool/imageChoose/2.png";
import Banner3 from "./WhyGradSchool/imageChoose/3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Divider, Modal } from "@mui/material";
import gif from "./blink.gif";

const NotificationAndBanner = ({ noticeList, setNoticeList }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const customModal = (noticeTitle, noticeDescription) => {
    setTitle(noticeTitle);
    setDescription(noticeDescription);
    setModal(true);
  };

  const images = [Banner1, Banner2, Banner3];

  return (
    <>
      <div className="Ncontainer" style={{ paddingTop: 25, paddingBottom: 0 }}>
        <div className="carouselImage" style={{ float: "left", width: "45%" }}>
          <Carousel autoPlay infiniteLoop interval={3000}>
            <div>
              <img src={images[0]} alt="" />
            </div>
            <div>
              <img src={images[1]} alt="" />
            </div>
            <div>
              <img src={images[2]} alt="" />
            </div>
          </Carousel>
        </div>
        <div style={{ float: "left" }}>
          <div
            className="notificationBox"
            style={{ marginLeft: 50, marginBottom: 45 }}
          >
            <div
              style={{
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              News and Notifications
            </div>
            <ul >
              {noticeList?.map((item, index) =>
                item.noticeLink ? (
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={item.noticeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li
                      style={{
                        paddingBottom: 17,
                        fontSize: 15,
                        display: "flex",
                        gap:10,
                      }}
                      className="list__item"
                    >
                      {item?.noticeTitle}
                      <div style={{ height: 30, width: 30 }}>
                        <img
                          src={gif}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                    </li>
                  </a>
                ) : (
                  <li
                  className="list__item"
                    style={{ paddingBottom: 17 ,display: "flex",
                        gap:10,}}
                    onClick={() =>
                      customModal(item.noticeTitle, item.noticeDetails)
                    }
                  >
                    {item?.noticeTitle}
                     <div style={{ height: 30, width: 30 }}>
                        <img
                          src={gif}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div> 
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <Modal
        open={modal}
        onClose={() => setModal(false)}
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
            height: "40vh",
            bgcolor: "rgba(22, 34, 57, 1)",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 style={{ color: "white" }}>{title}</h2>
          <Divider
            orientation="horizontal"
            style={{ height: 1, backgroundColor: "white" }}
          />
          <div style={{ color: "white", marginTop: 10 }}>{description}</div>
        </Box>
      </Modal>
    </>
  );
};

export default NotificationAndBanner;
