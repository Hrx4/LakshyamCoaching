import React from "react";
import "./Footer.css"

// CopyrightText component
const CopyrightText = () => (
  <p>
    <i className="fa fa-copyright"></i> Copyright 2023 by Lakshyam Coaching | Design:{" "}
    <a href="https://teatechsolution.com" rel="sponsored" target="_parent">
      TTS
    </a>
    <br />
  </p>
);

// Footer component
const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <CopyrightText />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
