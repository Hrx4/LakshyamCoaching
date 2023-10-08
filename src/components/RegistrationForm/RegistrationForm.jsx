import React, { useState } from "react";
import './RegistrationForm.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import backend from '../../backend';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          contactPhone : formData.phoneNumber,
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
        toast.warning('All fields Required', {
          position: toast.POSITION.TOP_CENTER
      });
      }
    } catch (err) {
      console.log(err);
    }
    
    console.log("Submitted Data:", formData);

      setFormData({
      name: "",
      email: "",
      phoneNumber:"",
      message: "",
    });
  };

  return (
    <div className="right-content">
                <ToastContainer/>
      <div className="top-content">
        <h6>
          Register your seat and get immediate access to Lakhsyam courses
        </h6>
      </div>
      <form id="contact" onSubmit={handleSubmit}>
        <div className="row">
          <div className="fieldset-container">
            <fieldset className="fieldset">
              <input 
                style={{color:"black"}}
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
                value={formData.name}
                onChange={handleChange}
              />
            </fieldset>
          </div>
          <div className="fieldset-container">
            <fieldset className="fieldset">
              <input
                style={{color:"black"}}              
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required=""
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>
          </div>
          <div className="fieldset-container">
            <fieldset className="fieldset">
              <input
                style={{color:"black"}}
                name="phoneNumber"
                type="tel"
                className="form-control"
                id="phone-number"
                placeholder="Your Phone Number"
                required=""
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </fieldset>
          </div>
          <div className="fieldset-container">
            <fieldset className="fieldset">
              <input
              style={{color:"black"}}
                name="message"
                type="message"
                className="form-control"
                id="message"
                placeholder="Your Message"
                required=""
                value={formData.message}
                onChange={handleChange}
              />
            </fieldset>
          </div>
          <div className="fieldset-container">
            <fieldset className="fieldset">
              <button type="submit" id="form-submit" className="button">
                Get it now
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
