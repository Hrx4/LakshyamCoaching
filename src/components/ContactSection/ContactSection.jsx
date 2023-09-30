import React from "react";
 // Create a SectionHeading component
import ContactForm from "../ContactForm/ContactFormB";
import ContactInfo from "../ContactInfo/ContactInfo";
import SectionHeading from "../SectionHeading/SectionHeading";
import './ContactSection.css'
const ContactSection = () => {
  return (
    <section className="section contact" data-section="section6" style={{backgroundColor:"rgb(23, 34, 56)"}}>
      <div className="container">
        <SectionHeading title="Let’s Keep In Touch" />

        <div className="row" style={{justifyContent:"center"}}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
