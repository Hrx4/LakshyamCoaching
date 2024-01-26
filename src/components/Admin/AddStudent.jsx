import React, { useEffect, useMemo, useState } from "react";
import "./AddStudent.css";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from "@mui/material";
import { ToastContainer} from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";
import { useParams } from "react-router-dom";

const AddStudent = () => {
  const Gender = ["Male", "Female"];
  const Compi = ["IIT-JEE", "NEET"];
  const Schooling = ["CBSE", "ICSE"];
  const admissionFeeStatus = ["YES", "NO"];
  const {id} = useParams()
  const officeList = (id==="superadmin") ? ["office 1", "office 2","office 3"] : 
  (id==="office1") ? ["office 1"] :
  (id==="office2") ? ["office 2"] :
  (id==="office3") ? ["office 3"] :[]

  const [iitNeetSub, setIitNeetSub] = useState([]);
  const [iitNeetFee , setIitNeetFee] = useState(0)
  const [schoolingSub, setSchoolingSub] = useState([]);
  const [schoolingFee , setSchoolingFee] = useState(0)
  const [extraSub, setExtraSub] = useState([]);
  const [extraFee , setExtraFee] = useState(0)
  const [monthlyIncome , setMonthlyIncome] = useState(0)
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    enrollment : "",
    office:"",
    photo : "",
    password : "",
    name: "",
    dob: "",
    gender: "",
    fatherName: "",
    fatherOccupassion: "",
    fatherNo: "",
    motherName: "",
    parentWp: "",
    emergencyNo: "",
    address: "",
    doj: "",
    blood: "",
    schoolName: "",
    lastClass: "",
    lastExam: "",
    iitNeetCourse: "",
    schoolingCourse : "",
    schoolingClass:"",
    iitNeetAdmission : "",
    schoolingAdmission : "",
    extraAdmission : "",

  });
  const uploadFiles = async (e) => {
    const { files } = e.target;
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "solardealership");
    data.append("cloud_name", "dkm3nxmk5");
    await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (files[0].type === "image/jpeg" || files[0].type === "image/png")
          // setImage(data.url);
          setFormData({ ...formData, photo: data.url });
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const Choose = ({ list }) => {
    return (
      <select
        name="gender"
        id="gender"
        value={formData.gender}
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };
  const Choose1 = ({ list }) => {
    return (
      <select
        name="iitNeetCourse"
        id="iitNeetCourse"
        value={formData.iitNeetCourse}
        onChange={(e) => {
          setFormData({ ...formData, iitNeetCourse: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  const Choose2 = ({ list }) => {
    return (
      <select
        name="schoolingCourse"
        id="schoolingCourse"
        value={formData.schoolingCourse}
        onChange={(e) => {
          setFormData({ ...formData, schoolingCourse: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };
  const Choose3 = ({ list }) => {
    return (
      <select
        name="schoolingClass"
        id="schoolingClass"
        value={formData.schoolingClass}
        onChange={(e) => {
          setFormData({ ...formData, schoolingClass: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };
  const Choose4 = ({ list }) => {
    return (
      <select
        name="iitNeetAdmission"
        id="iitNeetAdmission"
        value={formData.iitNeetAdmission}
        onChange={(e) => {
          setFormData({ ...formData, iitNeetAdmission: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };
  const Choose5 = ({ list }) => {
    return (
      <select
        name="schoolingAdmission"
        id="schoolingAdmission"
        value={formData.schoolingAdmission}
        onChange={(e) => {
          setFormData({ ...formData, schoolingAdmission: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };
  const Choose6 = ({ list }) => {
    return (
      <select
        name="extraAdmission"
        id="extraAdmission"
        value={formData.extraAdmission}
        onChange={(e) => {
          setFormData({ ...formData, extraAdmission: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };
  const Choose7 = ({ list }) => {
    return (
      <select
        name="office"
        id="office"
        value={formData.office}
        onChange={(e) => {
          setFormData({ ...formData, office: e.target.value });
        }}
      >
        <option value="" disabled="disabled">
          Choose
        </option>
        {list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    );
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setIitNeetSub(
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setSchoolingSub(
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setExtraSub(
      typeof value === "string" ? value.split(",") : value
    );
  };
  const schoolingClassList = useMemo(
    () =>
      formData.schoolingCourse === "CBSE"
        ? ["class 6", "class 7", "class 8" , "class 9" , "class 10" , "class 11 science" , "class 12 science" , "class 11 commerce" , "class 12 commerce"]
        : formData.schoolingCourse === "ICSE"
        ? ["class 6", "class 7", "class 8" , "class 9" , "class 10" ]
        : [],
    [formData.schoolingCourse]
  );

  const iitNeetSubList = useMemo(
    () =>
      formData.iitNeetCourse === "IIT-JEE"
        ? ["Physics", "Chemistry", "Math"]
        : formData.iitNeetCourse === "NEET"
        ? ["Physics", "Chemistry", "Biology"]
        : [],
    [formData.iitNeetCourse]
  );
  const extraSubList = ['Dance' , 'Guitar' , 'Singing' , 'Drawing']
  const schoolingSubList = useMemo(
    () =>
      
        // const {schoolingCourse , schoolingClass} = formData;
       ( formData.schoolingCourse==="CBSE"?       
          formData.schoolingClass==="class 6"? (["All Subject"] ) : 
          formData.schoolingClass==="class 7"? ["All Subject"] : 
          formData.schoolingClass==="class 8"?( ["All Subject" , "All Subject + Hindi/Bengali"] ) : 
          formData.schoolingClass==="class 9"?( ["All Subject" , "All Subject + Hindi/Bengali"] ) : 
          formData.schoolingClass==="class 10"?( ["All Subject" , "All Subject + Hindi/Bengali"] ) : 
          formData.schoolingClass==="class 11 science"?( ["physics" , "chemistry" , "math" , "biology" , "computer science" , "english"] ) : 
          formData.schoolingClass==="class 12 science"?( ["physics" , "chemistry" , "math" , "biology" , "computer science" , "english"] ) : 
          formData.schoolingClass==="class 11 commerce"?( ["Accountancy , bst , economics" , "Accountancy , bst , economics , english"] ) : 
          formData.schoolingClass==="class 12 commerce"?( ["Accountancy , bst , economics" , "Accountancy , bst , economics , english"] ) : 

          []
        :
        
          formData.schoolingClass==="class 6"? ["All Subject"] : 
          formData.schoolingClass==="class 7"? ["All Subject"] : 
          formData.schoolingClass==="class 8"? ["All Subject" , "All Subject + Hindi/Bengali"] : 
          formData.schoolingClass==="class 9"? ["All Subject" , "All Subject + Hindi/Bengali"] : 
          formData.schoolingClass==="class 10"? ["All Subject" , "All Subject + Hindi/Bengali"] : [] )
        
      ,
    [formData.schoolingCourse , formData.schoolingClass]
  );
  

  useEffect(()=>setSchoolingSub([]) ,
  [formData.schoolingCourse , formData.schoolingClass])

  useMemo(()=> setIitNeetFee(iitNeetSub.length * 600), [iitNeetSub])
    useMemo(()=> setExtraFee(extraSub.length * 500), [extraSub])

useMemo(()=> formData.schoolingCourse==="CBSE" 
? (formData.schoolingClass==="class 6" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1100) 
:(formData.schoolingClass==="class 7" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1300)
:(formData.schoolingClass==="class 8" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1500)
:(formData.schoolingClass==="class 8" && schoolingSub.includes("All Subject + Hindi/Bengali")) ? setSchoolingFee(1600)
:(formData.schoolingClass==="class 9" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1700)
:(formData.schoolingClass==="class 9" && schoolingSub.includes("All Subject + Hindi/Bengali")) ? setSchoolingFee(1900)
:(formData.schoolingClass==="class 10" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1700)
:(formData.schoolingClass==="class 10" && schoolingSub.includes("All Subject + Hindi/Bengali")) ? setSchoolingFee(1900)
:(formData.schoolingClass==="class 11 commerce" && schoolingSub.includes("Accountancy , bst , economics , english")) ? setSchoolingFee(1300)
:(formData.schoolingClass==="class 11 commerce" && schoolingSub.includes("Accountancy , bst , economics")) ? setSchoolingFee(1100)
:(formData.schoolingClass==="class 12 commerce" && schoolingSub.includes("Accountancy , bst , economics , english")) ? setSchoolingFee(1400)
:(formData.schoolingClass==="class 12 commerce" && schoolingSub.includes("Accountancy , bst , economics")) ? setSchoolingFee(1200)
:(formData.schoolingClass==="class 11 science" ) ? setSchoolingFee(schoolingSub.length*600)
:(formData.schoolingClass==="class 12 science")  ? setSchoolingFee(schoolingSub.length*600)
:setSchoolingFee(0):
(formData.schoolingClass==="class 6" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1500) 
:(formData.schoolingClass==="class 7" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1300)
:(formData.schoolingClass==="class 8" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1500)
:(formData.schoolingClass==="class 8" && schoolingSub.includes("All Subject + Hindi/Bengali")) ? setSchoolingFee(1600)
:(formData.schoolingClass==="class 9" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1700)
:(formData.schoolingClass==="class 9" && schoolingSub.includes("All Subject + Hindi/Bengali")) ? setSchoolingFee(1900)
:(formData.schoolingClass==="class 10" && schoolingSub.includes("All Subject")) ? setSchoolingFee(1700)
:(formData.schoolingClass==="class 10" && schoolingSub.includes("All Subject + Hindi/Bengali")) ? setSchoolingFee(1900)
:setSchoolingFee(0)

, [formData.schoolingClass , formData.schoolingCourse , schoolingSub])

const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
    const response = await fetch(`${backend}super/student/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentEnrollment: formData.enrollment,
        studentPassword : formData.password,
        studentOffice : formData.office,
        studentPhoto : formData.photo,
        studentName : formData.name,
    studentDob : formData.dob,
    studentGender : formData.gender,
    fatherName : formData.fatherName,
    fatherOccupassion : formData.fatherOccupassion,
    fatherNo: formData.fatherNo,
    motherName : formData.motherName,
    parentWp : formData.parentWp,
    emergencyNo :  formData.emergencyNo,
    studentAddress : formData.address,
    studentDoj : formData.doj,
    studentBlood : formData.blood,
    schoolName : formData.schoolName,
    lastClass : formData.lastClass,
    lastExam : formData.lastExam,
    iitNeetCourse :  formData.iitNeetCourse,
    schoolingCourse : formData.schoolingCourse,
    schoolingClass : formData.schoolingClass,
    iitNeetAdmission : formData.iitNeetAdmission,
    schoolingAdmission : formData.schoolingAdmission,
    extraAdmission : formData.extraAdmission,
    iitNeetFee : iitNeetFee,
    schoolingFee : schoolingFee,
    extraFee : extraFee,
    iitNeetSub : iitNeetSub,
    schoolingSub : schoolingSub,
    extraSub : extraSub,
    monthlyIncome : monthlyIncome
      })
    });

    const resJson = await response.json();

    if (response.status === 200) {
      alert("Form Submitted")
      // setIncome(resJson);
      console.log("====================================");
      console.log(resJson);
      console.log("====================================");
    } else {
      console.log("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  const date = new Date();
  const month = date.getMonth()
  let totalMonthlyFee = iitNeetFee + schoolingFee + extraFee;
  if (month >= 0 && month <= 2) {
    setMonthlyIncome(totalMonthlyFee * (3-month))
  }
  else{
    setMonthlyIncome((totalMonthlyFee * (12-month +3)) / (12-month))
  }

}, [iitNeetFee , schoolingFee , extraFee])


  return (
    <>
    {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <ToastContainer />
      <div style={{ width: "30%", marginLeft: "auto", marginRight: "auto" , paddingTop:30 , paddingBottom:30}}>
        <h2>Student Form</h2>

        <form style={{ gap: 10, display: "flex", flexDirection: "column" }}>
        <div>
            <label htmlFor="">Student Enrollment</label>
            <input
              type="text"
              value={formData.enrollment}
              onChange={(e) => {
                setFormData({ ...formData, enrollment: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Office : </label>
            <Choose7 list={officeList} />
          </div>
          <div>
            <label htmlFor="">Student Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Date of Birth</label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => {
                setFormData({ ...formData, dob: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Student Photo</label>
            <input type="file" accept="image/*" onChange={uploadFiles} />

          </div>
          
          <div>
            <label htmlFor="">Gender</label>
            <Choose list={Gender} data={"gender"} />
          </div>
          <div>
            <label htmlFor="">Father's Name</label>
            <input
              type="text"
              value={formData.fatherName}
              onChange={(e) => {
                setFormData({ ...formData, fatherName: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Father's Occupation</label>
            <input
              type="text"
              value={formData.fatherOccupassion}
              onChange={(e) => {
                setFormData({ ...formData, fatherOccupassion: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Father's Phone No.</label>
            <input
              type="text"
              value={formData.fatherNo}
              onChange={(e) => {
                setFormData({ ...formData, fatherNo: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Mother's Name</label>
            <input
              type="text"
              value={formData.motherName}
              onChange={(e) => {
                setFormData({ ...formData, motherName: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Parent Whatsapp no</label>
            <input
              type="text"
              value={formData.parentWp}
              onChange={(e) => {
                setFormData({ ...formData, parentWp: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Emergency contact no</label>
            <input
              type="text"
              value={formData.emergencyNo}
              onChange={(e) => {
                setFormData({ ...formData, emergencyNo: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Date of joining</label>
            <input
              type="date"
              value={formData.doj}
              onChange={(e) => {
                setFormData({ ...formData, doj: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Blood Group</label>
            <input
              type="text"
              value={formData.blood}
              onChange={(e) => {
                setFormData({ ...formData, blood: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Name of the school</label>
            <input
              type="text"
              value={formData.schoolName}
              onChange={(e) => {
                setFormData({ ...formData, schoolName: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Last class</label>
            <input
              type="text"
              value={formData.lastClass}
              onChange={(e) => {
                setFormData({ ...formData, lastClass: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Last Exam percentage</label>
            <input
              type="text"
              value={formData.lastExam}
              onChange={(e) => {
                setFormData({ ...formData, lastExam: e.target.value });
              }}
            />
          </div>
          <h2>IIT-JEE / NEET</h2>
          <div>
            <label htmlFor="">Select course</label>
            <Choose1 list={Compi} />
          </div>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel
              id="demo-multiple-checkbox-label"
              style={{ color: "white" }}
            >
              Select Subject
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple={true}
              value={iitNeetSub}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              // MenuProps={MenuProps}
              style={{ color: "white", border: "1px solid white" }}
            >
              {iitNeetSubList?.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={iitNeetSub.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>
            <label htmlFor="">Admission Fee :</label>
            <Choose4 list={admissionFeeStatus} />
          </div>
          <label htmlFor="">Total Fee</label>
          <input type="number" value={iitNeetFee} onChange={(e)=>setIitNeetFee(e.target.value)}/>

          <h2>Schooling Solution</h2>
          <div>
            <label htmlFor="">Select Board</label>
            <Choose2 list={Schooling}  />
          </div>
          
          <div>
            <label htmlFor="">Select class</label>
            <Choose3 list={schoolingClassList}  />
          </div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel
              id="demo-multiple-checkbox-label"
              style={{ color: "white" }}
            >
              Choose Subject
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={schoolingSub}
              onChange={handleChange1}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              // MenuProps={MenuProps}
              style={{ color: "white", border: "1px solid white" }}
            >
              {schoolingSubList?.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={schoolingSub.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>
            <label htmlFor="">Admission Fee :</label>
            <Choose5 list={admissionFeeStatus} />
          </div>
          <label htmlFor="">Total Fee</label>
          <input type="number" value={schoolingFee} onChange={(e)=>setSchoolingFee(e.target.value)}/>


          <h2>Extra Curricular</h2>
          
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel
              id="demo-multiple-checkbox-label"
              style={{ color: "white" }}
            >
              Select Course
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple={true}
              value={extraSub}
              onChange={handleChange2}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              // MenuProps={MenuProps}
              style={{ color: "white", border: "1px solid white" }}
            >
              {extraSubList?.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={extraSub.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
           <div>
            <label htmlFor="">Admission Fee :</label>
            <Choose6 list={admissionFeeStatus} />
          </div>
          <label htmlFor="">Total Fee</label>
          <input type="number" value={extraFee} onChange={(e)=>setExtraFee(e.target.value)}/>
          <h2>Total Monthly Income</h2>
          <input type="number" value={monthlyIncome} onChange={(e)=>setMonthlyIncome(e.target.value)} />

          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
