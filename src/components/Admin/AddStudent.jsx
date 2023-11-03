import React from "react";
import './AddStudent.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import SubCheckbox from './SubCheckbox';
const AddStudent = () => {
  

  return (
    <div className="add-form">
      <from>
        <div className="form-part">
            <h2 className="studentHeading">Student Details</h2>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Student Enrollment No.</label><br/>
            <input type="text" className="student__field" required />
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Student Name</label><br/>
            <input type="text" className="student__field" required/>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Class</label><br/>
            <select className="student__field" required>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
              <option>IX</option>
              <option>X</option>
              <option>XI</option>
              <option>XII</option>
            </select>
          </div>

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Board</label><br/>
            <select className="student__field" required>
              <option>ICSE</option>
              <option>CBSE</option>
              <option>WBBSE</option>
              <option>WBCHSE</option>
            </select>
          </div>

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Course Name</label><br/>
            {/*<select  className="student__field" style={{  height: 40 }} type="text" required>
             <option disabled selected>Select Your Course</option>
              <option value="CBSE Board All Subjects">
                CBSE Board All Subjects
              </option>
              <option value="ICSE Board All Subjects">
                ICSE Board All Subjects
              </option>
              <option value="Class 11 CBSE Boards + CUET">
                Class 11 CBSE Boards + CUET
              </option>
              <option value="Class 11 ICSE Boards + CUET">
                Class 11 ICSE Boards + CUET
              </option>
              <option value="Class 12 CBSE Boards + CUET">
                Class 12 CBSE Boards + CUET
              </option>
              <option value="Class 12 ICSE Boards + CUET">
                Class 12 ICSE Boards + CUET
              </option>
              <option value="JEE Mains ">JEE Mains </option>
              <option value="NEET ">NEET </option>
              <option value="Foundation Course JEE IIT / NEET">
                Foundation Course JEE IIT / NEET
              </option>
              <option value="Commerce Board + CUET">
                Commerce Board + CUET
              </option>
              <option value="CA Foundation">CA Foundation</option>
            </select> */}
            <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:'60%', backgroundColor:'white'}} className="student__field">
        <InputLabel  style={{color:'black'}}>Select Your Course</InputLabel>
        <Select
          
          // value={courseForPay}
          label=""
          // onChange={(e) => setCourseForPay(e.target.value)}
          style={{color:'black'}}

        >
          <MenuItem  value="CBSE Board All Subjects"> CBSE Board All Subjects</MenuItem>
          <MenuItem value="ICSE Board All Subjects">
                ICSE Board All Subjects
                </MenuItem>
                <MenuItem value="Class 11 CBSE Boards + CUET">
                Class 11 CBSE Boards + CUET
                </MenuItem>
                <MenuItem value="Class 11 ICSE Boards + CUET">
                Class 11 ICSE Boards + CUET
                </MenuItem>
                <MenuItem value="Class 12 CBSE Boards + CUET">
                Class 12 CBSE Boards + CUET
                </MenuItem>
                <MenuItem value="Class 12 ICSE Boards + CUET">
                Class 12 ICSE Boards + CUET
                </MenuItem>
                <MenuItem value="JEE Mains ">JEE Mains </MenuItem>
                <MenuItem value="NEET ">NEET </MenuItem>
                <MenuItem value="Foundation Course JEE IIT / NEET">
                Foundation Course JEE IIT / NEET
                </MenuItem>
                <MenuItem value="Commerce Board + CUET">Commerce Board + CUET</MenuItem>
                <MenuItem value="CA Foundation">CA Foundation</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Choose Subject</label><br/>
          </div>
         {
        <SubCheckbox/>
         }
        

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Email</label><br/>
            <input type="text" className="student__field" />
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Phone no.</label><br/>
            <input type="text" className="student__field" required/>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Address</label><br/>
            <input type="text" className="student__field" required/>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Payment Type</label><br/>
            <select className="student__field" required>
                <option>Monthly Payment</option>
                <option>Quarterly Payment</option>
                <option>Yearly Payment</option>
            </select>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Date Of Birth</label><br/>
            <input type="text" className="student__field" required/>
          </div>
          <div style={{marginLeft:40}}>
          <label for="photo" style={{marginRight:10, marginTop:10}}>Upload a Photo</label><br/>
        <input type="file" name="photo" accept="image/*" style={{width:'40%', marginRight:10}} required/>
          </div>
        </div>
        <div className="form-part">
            <h2 className="guardianHeading">Guardian Details</h2>
            <div className="Guardian">
                <label style={{marginRight:'10px',marginTop:10}}>Name</label><br/>
                <input type="text" className="student__field" required />
            </div>
            <div className="Guardian">
            <label style={{marginRight:'10px', marginTop:10}}>Phone no.</label><br/>
            <input type="text" className="student__field" required/>
          </div>
          <div className="Guardian">
            <label style={{marginRight:'10px', marginTop:10}}>Email</label><br/>
            <input type="text" className="student__field" />
          </div>
          <div className="Guardian">
            <label style={{marginRight:10, marginTop:10}}>Address</label><br/>
            <input type="text" className="student__field" required/>
          </div>
          <div className="Guardian">
            <button style={{marginTop:15}}>Submit</button>
          </div>
        </div>
      </from>
    </div>
  );
};

export default AddStudent;
