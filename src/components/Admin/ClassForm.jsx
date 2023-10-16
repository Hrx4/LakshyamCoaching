import React from "react";
import "./ClassForm.css";

const ClassForm = () => {
  return (
    <div className="classform">
      <form>
        <div>
          <h1 style={{ fontSize: "30px" }}>ADD CLASS</h1>
          <label>Class Name</label>
          <br/>
          <input style={{width:"70%"}} type="text" placeholder="Enter classroom name"></input>
          <br />
          <button style={{ marginTop: "15px" }} type="submit">
            Submit
          </button>
        </div>
      </form>
      <br/>
      <div>
        <table border="1">
          <h1 style={{ fontSize: "30px", paddingLeft:"15px" }}>All Classrooms</h1>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>3</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>4</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>5</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>6</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>7</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>8</td>
            <td>CBSE Board All Subjects</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ClassForm;
