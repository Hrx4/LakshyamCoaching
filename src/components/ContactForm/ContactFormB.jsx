import React, { useState } from "react";
import './ContactForm.css'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // You can perform additional actions here, such as sending the data to a server.

    // Optionally, you can clear the form fields after submission.
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="col-md-6">
      <form id="contact" onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div className="row" style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
          <div className="col-md-5">
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

          <div className="col-md-5">
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

          <div className="col-md-10">
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
