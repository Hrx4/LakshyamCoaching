import React, { useState } from "react";
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="right-content">
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
