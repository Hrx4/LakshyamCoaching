import React from "react";

const AskQuery = () =>{
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
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
            />
          </div><div className="form-group">
            <label>Phone no:</label>
            <input
              type="number"
            />
          </div><div className="form-group">
            <label>Message:</label>
            <input
              type="text"
             
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default AskQuery;