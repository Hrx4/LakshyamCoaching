import React, { useState } from "react";
import backend from "../../backend";

const AskQuery = () =>{

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${backend}contact/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactName: formData.name,
          contactEmail: formData.email,
          contactPhone: formData.phone,
          contactMessage: formData.message,
          contactPerson : "teacher"
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        console.log("Some error occured");
        alert("All field required")
      }
    } catch (err) {
      console.log(err);
    }

    console.log("Submitted Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

    return (
        <>
        <div
        className="form-container"
        style={{ marginTop: 60, marginBottom: 50 }}
      >
        <form >
          <div className="form-group">
            <label>Name:</label>
            <input
            value={formData.name}
            onChange={(e)=>setFormData(...formData , {name :  e.target.value })}

              type="text"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
            value={formData.email}
            onChange={(e)=>setFormData(...formData , {email :  e.target.value })}

              type="text"
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <input
            value={formData.message}
            onChange={(e)=>setFormData(...formData , {message :  e.target.value })}
              type="text"
             
            />
          </div>
          <div className="form-group">
            <label>Phone no:</label>
            <input
            value={formData.phone}
            onChange={(e)=>setFormData(...formData , {phone :  e.target.value })}
              type="number"
            />
          </div>

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
        </>
    )
}

export default AskQuery;