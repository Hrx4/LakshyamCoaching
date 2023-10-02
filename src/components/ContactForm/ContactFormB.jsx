import React, { useState } from "react";
import './ContactForm.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import backend from '../../backend';


const ContactForm = ({ namePlaceholder, emailPlaceholder, messagePlaceholder }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${backend}contact/`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactName : formData.name , 
          contactEmail : formData.email , 
          contactMessage : formData.message
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        toast.success('Form submitted', {
          position: toast.POSITION.TOP_CENTER
      });
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    


    console.log("Submitted Data:", formData);

      setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
      <div className="col-md-6">
            <ToastContainer/>
      <form id="contact" onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div className="row" style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
          <div className="col-md-5 col-sm-10">
            <fieldset>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder={namePlaceholder || "Your Name"}
                required=""
                value={formData.name}
                onChange={handleChange}
              />
            </fieldset>
          </div>

          <div className="col-md-5 col-sm-10">
            <fieldset>
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                placeholder={emailPlaceholder || "Your Email"}
                required=""
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>
          </div>

          <div className="col-md-10 col-sm-10">
            <fieldset>
              <textarea
                name="message"
                rows="6"
                className="form-control"
                id="message"
                placeholder={messagePlaceholder || "Your message..."}
                required=""
                value={formData.message}
                onChange={handleChange}
                style={{margin:"auto"}}
              ></textarea>
            </fieldset>
          </div>

          <div className="col-md-10">
            <fieldset>
              <button type="submit" id="form-submit" className="button">
                Send Message Now
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
