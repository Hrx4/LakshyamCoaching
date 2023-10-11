import React from 'react';
import TestiMonialsDetails from '../TestimonialsDetails.js/TestimonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from '../user-one.png';
import './Testimonials.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Aryan Tiwari',
            description: 'I loved it. Teachers are very professional, when you have a problem they are always ready to help you.This is magnificent academy with excellent teachers, small classrooms , small group of students, warm atmosphere and super friendly Teachers. In totality it helped me a lot and I would suggest the same to you all as well  " Do not Hesitate " Just Go for the best to come out as the best.. 😊😊 Thankyou Sooo much for everything "Lakshyam coaching"  centre.' ,
            //address: 'USA',
           // img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Somesh Das',
            description: 'Best schooling option under one roof.Teachers are very well qualified.the environment and the competition is very healthy.',
            //address: 'USA',
            //img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Hritik Kumar Paswan',
            description: 'Lakshyam coaching institute is a best tutorial place for science students for class 11th n 12th.',
            address: 'USA',
           // img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Pijush Kanti Roy',
            description: 'Best coaching institute in Asansol.',
            //address: 'USA',
            // img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div style={{ marginBottom:0}} className="container section-heading" >
                <h2 style={{color:"white"}} className="miniTitle text-center">TESTIMONIALS</h2>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            {/* <img class="img-circle" alt='imageify' /> */}

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;