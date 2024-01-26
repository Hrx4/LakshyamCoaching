import React from "react";


const TeacherAddNote = () =>{
    return (
        <>
         <div
        className="form-container"
        style={{ marginTop: 60, marginBottom: 50 }}
      >
        <form>
          <div className="form-group">
            <label>Note Title:</label>
            <input
              type="text"
            />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Subject:</label>
            <select
              type="text"
            >
              <option value="" selected disabled>
                Select Your Subject
              </option>
                <option>Physic</option>
                <option>Chemistry</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Class:</label>
            <select
              type="text"
            >
              <option value="" selected disabled>
                Select Your Class
              </option>
                <option >IX</option>
                <option >X</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Batch:</label>
            <select
              type="text"
             
            >
              <option value="Batch 1">Batch 1</option>
              <option value="Batch 2">Batch 2</option>
              <option value="Batch 3">Batch 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Upload File:</label>
            <input type="file" accept=".pdf"  />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Course:</label>
            <select
              type="text"
            >
              <option value="" selected disabled>
                Select Your Course
              </option>
              
                <option >
                  ABC
                </option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default TeacherAddNote;