import React from "react";
import "./SubjectDetails.css";

const SubjectDetails = () => {
  return (
    <div className="subjectdetails">
      <form style={{margin:"15px", padding:"15px", border:"2px solid #192655"}}>
        <div>
          <h1 style={{ fontSize: "30px" }}>SUBJECT DETAILS</h1>
          <label>Course Name</label>
          <br />
          <select type="text" style={{width:"70%"}} required >
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
            <option value="Commerce Board + CUET">Commerce Board + CUET</option>
            <option value="CA Foundation">CA Foundation</option>
          </select>
          <br /><br/>
          <label>Subject name</label><br/>
          <input style={{width:"70%"}} type="text" placeholder="Enter subject name" required></input>
          <br /><br/>
          <label>Teacher name</label><br/>
          <input style={{width:"70%"}} type="text" placeholder="Enter teacher name" required></input>
          <br /><br/>
          <label>Subject Fee</label><br/>
          <input style={{width:"70%"}} type="text" placeholder="Enter Subject Fee" required></input>
          <br/>
          <button style={{ marginTop: "15px" }} type="submit">
            Submit
          </button>
        </div>
      </form>
      <br />
      <br/>
      <div>
        <table border="1" style={{overflowX:"scroll"}}>
          <h1 style={{ fontSize: "30px", paddingLeft:"15px" }}>All Classrooms</h1>
          <tr>
            <th>Course Name</th>
            <th>Subject name</th>
            <th>Teacher name</th>
            <th>Subject Fee</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>3</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>4</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>5</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>6</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>7</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>8</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SubjectDetails;
