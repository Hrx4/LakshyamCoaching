import React from "react";

const ContactInfo = () => {
  return (
    <div className="col-md-4">
      <p style={{ color: "white", fontSize: "16px", fontWeight: 600 }}>
        Call At <br />
        <a href="tel:+91 8001100314"> <span style={{ color: "#3fe503dd" }}>+91 8001100314</span></a>
      </p>

      <p style={{ color: "white", fontSize: "16px", fontWeight: 600 }}>
        Mail At <br />
        <a href=" mailto:Lakshyam.office0799@gmail.com"><span style={{ color: "#3fe503dd" }}>Lakshyam.office0799@gmail.com</span></a> 
      </p>

      <p style={{ color: "white", fontSize: "16px", fontWeight: 600 }}>
        59, Ram Gulam Singh Road, opp. Durga Mandir, Ushagram, Asansol, West Bengal 713303
      </p>
      <p style={{ color: "white", fontSize: "16px", fontWeight: 600 }}>
        Hari Gopal Complex, Beside Signature Hotel, Ushagram, Asansol, West Bengal 713303
      </p>
    </div>
  );
};

export default ContactInfo;
