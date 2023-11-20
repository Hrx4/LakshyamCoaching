import React, { useState } from "react";
import './NotificationAndBanner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from './WhyGradSchool/imageChoose/choose-us-image-01.png';
import Banner2 from './WhyGradSchool/imageChoose/choose-us-image-02.png';
import Banner3 from './WhyGradSchool/imageChoose/choose-us-image-03.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const NotificationAndBanner = () => {
 
    const [currentImageIndex, setCurrentImageIndex] = useState(2);
    const nextImage = () => {
        setCurrentImageIndex((image) => (image + 1) % images.length)
    
    };
    const prevImage = () => {
        setCurrentImageIndex((image) =>
            (image === 0) ? images.length - 1 : image - 1
        );
        
    };
    
    const images = [
        Banner1 , Banner2 , Banner3 

    ];

    return (

        <>

            <div className="Ncontainer" style={{paddingTop:95}}>
                <div className="carouselImage" style={{ float: 'left', width:'65%' }}>


                    {/* <img className='sectionImage' src={images[currentImageIndex]} style={{marginLeft:'65px', width:'90%'}} alt="" />
                    <span className="arrow prev" onClick={prevImage}  style={{cursor:'pointer', fontSize:'45px',color:'red'}}>&#10094;</span>
                    <span className="arrow next" onclick={nextImage} style={{cursor:'pointer',fontSize:'45px',color:'red'}}>&#10095;</span> */}

                    <Carousel>
                <div>
                    <img src={images[0]} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={images[1]} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={images[2]} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
                </div>
                <div style={{ float: 'left' }}>
                    <div className="notificationBox" style={{ marginLeft: 50, marginBottom: 45 }}>
                        <h2 className="nfH" style={{ fontSize: 35, fontWeight: 'bold' }}>Notification</h2>
                        {/* <p className="nfP" style={{fontSize:30}}>Your notification content goes here.</p> */}
                        <ul>
                            <li style={{paddingBottom:12}}>JEE Main 2024 | Step by Step Process of Application form | Document Required Exit Policy</li>
                            <li >Easy Transfer / Exit Policy for Students </li>
                            <li style={{paddingBottom:12}}>Winter Carnival for Class 5th to 9th at Kota </li>
                            <li style={{paddingBottom:12}}>RMO 2023 Paper Solutions are now available NMTC 2023</li>
                            <li style={{paddingBottom:12}}>Your Ultimate Guidance Series to Excel in JEE 2024</li>
                            <li style={{paddingBottom:12}}>JEE Main 2024 | Step by Step Process of Application form | Document Required Exit Policy</li>
                            <li style={{paddingBottom:12}}>Easy Transfer / Exit Policy for Students </li>
                            <li style={{paddingBottom:12}}>Winter Carnival for Class 5th to 9th at Kota </li>
                            <li style={{paddingBottom:12}}>RMO 2023 Paper Solutions are now available NMTC 2023</li>
                            <li style={{paddingBottom:12}}>Your Ultimate Guidance Series to Excel in JEE 2024</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NotificationAndBanner;