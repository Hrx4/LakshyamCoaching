import React from "react";

import RegistrationForm from "../RegistrationForm/RegistrationForm";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import './ComingSoonSection.css'

const ComingSoonSection = () => {
  return (
    <section className="section coming-soon"  data-section="section3">
      <div className="container">
        <div className="row container__part" >
          <div className="col-md-7 col-sm-12">
            <div className="continer centerIt">
              <h4>
                Take <em style={{fontSize:"30px"}}>any Lakshyam courses</em> and get 10% off for your next course
              </h4>
              <CountdownTimer />
            </div>
          </div>
          <div className="registration" style={{width:"auto"}}>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
