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
  Select,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";
import { useParams } from "react-router-dom";

const AddStudent = ({ studentDetails, setNoteView }) => {
  const Gender = ["Male", "Female"];
  const Compi = ["IIT-JEE", "NEET"];
  const Schooling = ["CBSE", "ICSE"];
  const admissionFeeStatus = ["YES", "NO"];
  const { id } = useParams();
  const officeList =
    id === "superadmin"
      ? ["office 1", "office 2", "office 3"]
      : id === "office1"
      ? ["office 1"]
      : id === "office2"
      ? ["office 2"]
      : id === "office3"
      ? ["office 3"]
      : [];

  let iitsubstate = studentDetails.iitNeetSub ? studentDetails.iitNeetSub : [];
  // let schoolingsubstate = JSON.stringify(studentDetails) !== JSON.stringify({})
  //   ? studentDetails.schoolingSub
  //   : "";
  let extrasubstate =
    JSON.stringify(studentDetails) !== JSON.stringify({})
      ? studentDetails.extraSub
      : [];

  const [iitNeetSub, setIitNeetSub] = useState(iitsubstate);
  const [iitNeetFee, setIitNeetFee] = useState(
    JSON.stringify(studentDetails) !== JSON.stringify({})
      ? studentDetails.iitNeetFee
      : 0
  );
  const [schoolingSub, setSchoolingSub] = useState(
    JSON.stringify(studentDetails) !== JSON.stringify({})
      ? studentDetails.schoolingSub
      : ""
  );
  const [schoolingFee, setSchoolingFee] = useState(
    JSON.stringify(studentDetails) !== JSON.stringify({})
      ? studentDetails.schoolingFee
      : 0
  );
  const [extraSub, setExtraSub] = useState(extrasubstate);
  const [extraFee, setExtraFee] = useState(
    JSON.stringify(studentDetails) !== JSON.stringify({})
      ? studentDetails.extraFee
      : 0
  );
  const [monthlyIncome, setMonthlyIncome] = useState(
    JSON.stringify(studentDetails) !== JSON.stringify({})
      ? studentDetails.monthlyIncome
      : 0
  );
  const [loading, setLoading] = useState(false);
  const [propsData1, setpropsData1] = useState(false);
  const [propsData2, setpropsData2] = useState(false);
  const [propsData3, setpropsData3] = useState(false);

  const [formData, setFormData] = useState(
    JSON.stringify(studentDetails) === JSON.stringify({})
      ? {
          enrollment: "",
          office: "",
          photo: "",
          password: "",
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
          schoolingCourse: "",
          schoolingClass: "",
          iitNeetAdmission: "",
          schoolingAdmission: "",
          extraAdmission: "",
        }
      : {
          enrollment: studentDetails.studentEnrollment,
          office: studentDetails.studentOffice,
          photo: studentDetails.studentPhoto,
          password: studentDetails.studentPassword,
          name: studentDetails.studentName,
          dob: studentDetails.studentDob,
          gender: studentDetails.studentGender,
          fatherName: studentDetails.fatherName,
          fatherOccupassion: studentDetails.fatherOccupassion,
          fatherNo: studentDetails.fatherNo,
          motherName: studentDetails.motherName,
          parentWp: studentDetails.parentWp,
          emergencyNo: studentDetails.emergencyNo,
          address: studentDetails.studentAddress,
          doj: studentDetails.studentDoj,
          blood: studentDetails.studentBlood,
          schoolName: studentDetails.schoolName,
          lastClass: studentDetails.lastClass,
          lastExam: studentDetails.lastExam,
          iitNeetCourse: studentDetails.iitNeetCourse,
          schoolingCourse: studentDetails.schoolingCourse,
          schoolingClass: studentDetails.schoolingClass,
          iitNeetAdmission: studentDetails.iitNeetAdmission,
          schoolingAdmission: studentDetails.schoolingAdmission,
          extraAdmission: studentDetails.extraAdmission,
        }
  );
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
        if (
          files[0].type === "image/jpeg" ||
          files[0].type === "image/jpg" ||
          files[0].type === "image/png"
        )
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
        required
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
  const Choose8 = ({ list }) => {
    return (
      <select
        name="schoolingClass"
        id="schoolingClass"
        value={schoolingSub}
        onChange={handleChange1}
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
    if (formData.doj === "") return alert("Please add Date of Joining First");
    setpropsData1(true);
    const {
      target: { value },
    } = event;
    setIitNeetSub(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange1 = (event) => {
    if (formData.doj === "") return alert("Please add Date of Joining First");
    setpropsData2(true);
    const {
      target: { value },
    } = event;
    setSchoolingSub(value);
    console.log(value);
  };
  const handleChange2 = (event) => {
    setpropsData3(true);
    if (formData.doj === "") return alert("Please add Date of Joining First");
    const {
      target: { value },
    } = event;
    setExtraSub(typeof value === "string" ? value.split(",") : value);
  };
  const schoolingClassList = useMemo(
    () =>
      formData.schoolingCourse === "CBSE"
        ? [
            "class 4",
            "class 5",
            "class 6",
            "class 7",
            "class 8",
            "class 9",
            "class 10",
            "class 11 science",
            "class 12 science",
            "class 11 commerce",
            "class 12 commerce",
          ]
        : formData.schoolingCourse === "ICSE"
        ? [
            "class 4",
            "class 5",
            "class 6",
            "class 7",
            "class 8",
            "class 9",
            "class 10",
          ]
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
  const extraSubList = ["Dance", "Guitar", "Singing", "Drawing"];
  const schoolingSubList = useMemo(
    () =>
      // const {schoolingCourse , schoolingClass} = formData;
      formData.schoolingCourse === "CBSE"
        ? formData.schoolingClass === "class 4"
          ? [
              "Eng , SST , Math , Science",
              "Eng , SST , Math , Science , Bengali",
              "Eng , SST , Math , Science , Hindi",
              "Eng , SST , Math , Science , Bengali +Hindi",
            ]
          : formData.schoolingClass === "class 5"
          ? [
              "Eng , SST , Math , Science",
              "Eng , SST , Math , Science , Bengali",
              "Eng , SST , Math , Science , Hindi",
              "Eng , SST , Math , Science , Bengali +Hindi",
            ]
          : formData.schoolingClass === "class 6"
          ? [
              "Eng , SST , Math , Science",
              "Eng , SST , Math , Science , Bengali",
              "Eng , SST , Math , Science , Hindi",
              "Eng , SST , Math , Science , Bengali +Hindi",
            ]
          : formData.schoolingClass === "class 7"
          ? [
              "Eng , SST , Math , Science",
              "Eng , SST , Math , Science , Bengali",
              "Eng , SST , Math , Science , Hindi",
              "Eng , SST , Math , Science , Bengali +Hindi",
            ]
          : formData.schoolingClass === "class 8"
          ? [
              "Eng , SST , Math , Science",
              "Eng , SST , Math , Science , Bengali",
              "Eng , SST , Math , Science , Hindi",
              "Eng , SST , Math , Science , Bengali +Hindi",
            ]
          : formData.schoolingClass === "class 9"
          ? [
              "Eng , SST , Math , Phy , Chem , Bio",
              "Eng , SST , Math , Phy , Chem , Bio , Bengali",
              "Eng , SST , Math , Phy , Chem , Bio , Hindi",
              "Eng , SST , Math , Phy , Chem , Bio , Bengali +Hindi",
            ]
          : formData.schoolingClass === "class 10"
          ? [
              "Eng , SST , Math , Phy , Chem , Bio",
              "Eng , SST , Math , Phy , Chem , Bio , Bengali",
              "Eng , SST , Math , Phy , Chem , Bio , Hindi",
              "Eng , SST , Math , Phy , Chem , Bio , Bengali +Hindi",
            ]
          : formData.schoolingClass === "class 11 science"
          ? [
              "physics , chemistry , math",
              "physics , chemistry , math , Comupter",
              "physics , chemistry , math , English",
              "physics , chemistry , math , Computer + English",
              "physics , chemistry , Bio",
              "physics , chemistry , Bio , Comupter",
              "physics , chemistry , Bio , English",
              "physics , chemistry , Bio , Computer + English",
              "physics , chemistry , math , Bio",
              "physics , chemistry , math , Bio , Comupter",
              "physics , chemistry , math , Bio , English",
              "physics , chemistry , math , Bio , Computer + English",
            ]
          : formData.schoolingClass === "class 12 science"
          ? [
              "physics , chemistry , math",
              "physics , chemistry , math , Comupter",
              "physics , chemistry , math , English",
              "physics , chemistry , math , Computer + English",
              "physics , chemistry , Bio",
              "physics , chemistry , Bio , Comupter",
              "physics , chemistry , Bio , English",
              "physics , chemistry , Bio , Computer + English",
              "physics , chemistry , math , Bio",
              "physics , chemistry , math , Bio , Comupter",
              "physics , chemistry , math , Bio , English",
              "physics , chemistry , math , Bio , Computer + English",
            ]
          : formData.schoolingClass === "class 11 commerce"
          ? [
              "Accountancy , bst , economics",
              "Accountancy , bst , economics , english",
              "Accountancy , bst , economics , Computer",
              "Accountancy , bst , economics , english + computer",
            ]
          : formData.schoolingClass === "class 12 commerce"
          ? [
              "Accountancy , bst , economics",
              "Accountancy , bst , economics , english",
              "Accountancy , bst , economics , Computer",
              "Accountancy , bst , economics , english + computer",
            ]
          : []
        : formData.schoolingClass === "class 4"
        ? [
            "Eng , SST , Math , Science",
            "Eng , SST , Math , Science , Bengali",
            "Eng , SST , Math , Science , Hindi",
            "Eng , SST , Math , Science , Bengali +Hindi",
          ]
        : formData.schoolingClass === "class 5"
        ? [
            "Eng , SST , Math , Science",
            "Eng , SST , Math , Science , Bengali",
            "Eng , SST , Math , Science , Hindi",
            "Eng , SST , Math , Science , Bengali +Hindi",
          ]
        : formData.schoolingClass === "class 6"
        ? [
            "Eng , SST , Math , Science",
            "Eng , SST , Math , Science , Bengali",
            "Eng , SST , Math , Science , Hindi",
            "Eng , SST , Math , Science , Bengali +Hindi",
          ]
        : formData.schoolingClass === "class 7"
        ? [
            "Eng , SST , Math , Science",
            "Eng , SST , Math , Science , Bengali",
            "Eng , SST , Math , Science , Hindi",
            "Eng , SST , Math , Science , Bengali +Hindi",
          ]
        : formData.schoolingClass === "class 8"
        ? [
            "Eng , SST , Math , Science",
            "Eng , SST , Math , Science , Bengali",
            "Eng , SST , Math , Science , Hindi",
            "Eng , SST , Math , Science , Bengali +Hindi",
          ]
        : formData.schoolingClass === "class 9"
        ? [
            "Eng , SST , Math , Phy , Chem , Bio",
            "Eng , SST , Math , Phy , Chem , Bio , Bengali",
            "Eng , SST , Math , Phy , Chem , Bio , Hindi",
            "Eng , SST , Math , Phy , Chem , Bio , Bengali +Hindi",
          ]
        : formData.schoolingClass === "class 10"
        ? [
            "Eng , SST , Math , Phy , Chem , Bio",
            "Eng , SST , Math , Phy , Chem , Bio , Bengali",
            "Eng , SST , Math , Phy , Chem , Bio , Hindi",
            "Eng , SST , Math , Phy , Chem , Bio , Bengali +Hindi",
          ]
        : [],

    [formData.schoolingCourse, formData.schoolingClass]
  );

  useMemo(() => {
    if (propsData1) setIitNeetFee(iitNeetSub.length * 600);
  }, [iitNeetSub, propsData1]);
  useMemo(() => {
    if (propsData3) setExtraFee(extraSub.length * 500);
  }, [extraSub, propsData3]);

  useMemo(() => {
    if (propsData2)
      formData.schoolingCourse === "CBSE" || formData.schoolingCourse === "ICSE"
        ? formData.schoolingClass === "class 4" &&
          schoolingSub === "Eng , SST , Math , Science"
          ? setSchoolingFee(1000)
          : formData.schoolingClass === "class 4" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali"
          ? setSchoolingFee(1200)
          : formData.schoolingClass === "class 4" &&
            schoolingSub === "Eng , SST , Math , Science , Hindi"
          ? setSchoolingFee(1200)
          : formData.schoolingClass === "class 4" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali +Hindi"
          ? setSchoolingFee(1300)
          : formData.schoolingClass === "class 5" &&
            schoolingSub === "Eng , SST , Math , Science"
          ? setSchoolingFee(1100)
          : formData.schoolingClass === "class 5" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali"
          ? setSchoolingFee(1300)
          : formData.schoolingClass === "class 5" &&
            schoolingSub === "Eng , SST , Math , Science , Hindi"
          ? setSchoolingFee(1300)
          : formData.schoolingClass === "class 5" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali +Hindi"
          ? setSchoolingFee(1400)
          : formData.schoolingClass === "class 6" &&
            schoolingSub === "Eng , SST , Math , Science"
          ? setSchoolingFee(1200)
          : formData.schoolingClass === "class 6" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali"
          ? setSchoolingFee(1400)
          : formData.schoolingClass === "class 6" &&
            schoolingSub === "Eng , SST , Math , Science , Hindi"
          ? setSchoolingFee(1400)
          : formData.schoolingClass === "class 6" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali +Hindi"
          ? setSchoolingFee(1500)
          : formData.schoolingClass === "class 7" &&
            schoolingSub === "Eng , SST , Math , Science"
          ? setSchoolingFee(1300)
          : formData.schoolingClass === "class 7" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali"
          ? setSchoolingFee(1500)
          : formData.schoolingClass === "class 7" &&
            schoolingSub === "Eng , SST , Math , Science , Hindi"
          ? setSchoolingFee(1500)
          : formData.schoolingClass === "class 7" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali +Hindi"
          ? setSchoolingFee(1600)
          : formData.schoolingClass === "class 8" &&
            schoolingSub === "Eng , SST , Math , Science"
          ? setSchoolingFee(1400)
          : formData.schoolingClass === "class 8" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali"
          ? setSchoolingFee(1600)
          : formData.schoolingClass === "class 8" &&
            schoolingSub === "Eng , SST , Math , Science , Hindi"
          ? setSchoolingFee(1600)
          : formData.schoolingClass === "class 8" &&
            schoolingSub === "Eng , SST , Math , Science , Bengali +Hindi"
          ? setSchoolingFee(1700)
          : formData.schoolingClass === "class 9" &&
            schoolingSub === "Eng , SST , Math , Phy , Chem , Bio"
          ? setSchoolingFee(1700)
          : formData.schoolingClass === "class 9" &&
            schoolingSub === "Eng , SST , Math , Phy , Chem , Bio , Bengali"
          ? setSchoolingFee(1900)
          : formData.schoolingClass === "class 9" &&
            schoolingSub === "Eng , SST , Math , Phy , Chem , Bio , Hindi"
          ? setSchoolingFee(1900)
          : formData.schoolingClass === "class 9" &&
            schoolingSub ===
              "Eng , SST , Math , Phy , Chem , Bio , Bengali +Hindi"
          ? setSchoolingFee(2000)
          : formData.schoolingClass === "class 10" &&
            schoolingSub === "Eng , SST , Math , Phy , Chem , Bio"
          ? setSchoolingFee(1700)
          : formData.schoolingClass === "class 10" &&
            schoolingSub === "Eng , SST , Math , Phy , Chem , Bio , Bengali"
          ? setSchoolingFee(1900)
          : formData.schoolingClass === "class 10" &&
            schoolingSub === "Eng , SST , Math , Phy , Chem , Bio , Hindi"
          ? setSchoolingFee(1900)
          : formData.schoolingClass === "class 10" &&
            schoolingSub ===
              "Eng , SST , Math , Phy , Chem , Bio , Bengali +Hindi"
          ? setSchoolingFee(2000)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , math"
          ? setSchoolingFee(2100)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , math , Comupter"
          ? setSchoolingFee(2600)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , math , English"
          ? setSchoolingFee(2600)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , math , Computer + English"
          ? setSchoolingFee(2900)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , Bio"
          ? setSchoolingFee(2100)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , Bio , Comupter"
          ? setSchoolingFee(2600)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , Bio , English"
          ? setSchoolingFee(2600)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , Bio , Computer + English"
          ? setSchoolingFee(2900)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , math , Bio"
          ? setSchoolingFee(2500)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , math , Bio , Comupter"
          ? setSchoolingFee(3000)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub === "physics , chemistry , math , Bio , English"
          ? setSchoolingFee(3000)
          : formData.schoolingClass === "class 11 science" &&
            schoolingSub ===
              "physics , chemistry , math , Bio , Computer + English"
          ? setSchoolingFee(3300)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , math"
          ? setSchoolingFee(2200)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , math , Comupter"
          ? setSchoolingFee(2700)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , math , English"
          ? setSchoolingFee(2700)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , math , Computer + English"
          ? setSchoolingFee(3000)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , Bio"
          ? setSchoolingFee(2200)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , Bio , Comupter"
          ? setSchoolingFee(2700)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , Bio , English"
          ? setSchoolingFee(2700)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , Bio , Computer + English"
          ? setSchoolingFee(3000)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , math , Bio"
          ? setSchoolingFee(2600)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , math , Bio , Comupter"
          ? setSchoolingFee(3100)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub === "physics , chemistry , math , Bio , English"
          ? setSchoolingFee(3100)
          : formData.schoolingClass === "class 12 science" &&
            schoolingSub ===
              "physics , chemistry , math , Bio , Computer + English"
          ? setSchoolingFee(3400)
          : formData.schoolingClass === "class 11 commerce" &&
            schoolingSub === "Accountancy , bst , economics"
          ? setSchoolingFee(1500)
          : formData.schoolingClass === "class 11 commerce" &&
            schoolingSub === "Accountancy , bst , economics , english"
          ? setSchoolingFee(2000)
          : formData.schoolingClass === "class 11 commerce" &&
            schoolingSub === "Accountancy , bst , economics , Computer"
          ? setSchoolingFee(2000)
          : formData.schoolingClass === "class 11 commerce" &&
            schoolingSub ===
              "Accountancy , bst , economics , english + computer"
          ? setSchoolingFee(2300)
          : formData.schoolingClass === "class 12 commerce" &&
            schoolingSub === "Accountancy , bst , economics"
          ? setSchoolingFee(1600)
          : formData.schoolingClass === "class 12 commerce" &&
            schoolingSub === "Accountancy , bst , economics , english"
          ? setSchoolingFee(2100)
          : formData.schoolingClass === "class 12 commerce" &&
            schoolingSub === "Accountancy , bst , economics , Computer"
          ? setSchoolingFee(2100)
          : formData.schoolingClass === "class 12 commerce" &&
            schoolingSub ===
              "Accountancy , bst , economics , english + computer"
          ? setSchoolingFee(2400)
          : setSchoolingFee(0)
        : setSchoolingFee(0);
  }, [
    formData.schoolingClass,
    formData.schoolingCourse,
    schoolingSub,
    propsData2,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}student/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEnrollment: formData.enrollment,
          studentPassword: formData.password,
          studentOffice: formData.office,
          studentPhoto: formData.photo,
          studentName: formData.name,
          studentDob: formData.dob,
          studentGender: formData.gender,
          fatherName: formData.fatherName,
          fatherOccupassion: formData.fatherOccupassion,
          fatherNo: formData.fatherNo,
          motherName: formData.motherName,
          parentWp: formData.parentWp,
          emergencyNo: formData.emergencyNo,
          studentAddress: formData.address,
          studentDoj: formData.doj,
          studentBlood: formData.blood,
          schoolName: formData.schoolName,
          lastClass: formData.lastClass,
          lastExam: formData.lastExam,
          iitNeetCourse: formData.iitNeetCourse,
          schoolingCourse: formData.schoolingCourse,
          schoolingClass: formData.schoolingClass,
          iitNeetAdmission: formData.iitNeetAdmission,
          schoolingAdmission: formData.schoolingAdmission,
          extraAdmission: formData.extraAdmission,
          iitNeetFee: iitNeetFee,
          schoolingFee: schoolingFee,
          extraFee: extraFee,
          iitNeetSub: iitNeetSub,
          schoolingSub: schoolingSub,
          extraSub: extraSub,
          monthlyIncome: monthlyIncome,
        }),
      });

      const resJson = await response.json();

      if (response.status === 200) {
        alert("Form Submitted");
        e.target.reset()
        setIitNeetFee(0);
        setSchoolingFee(0);
        setExtraFee(0);
        setIitNeetSub([]);
        setSchoolingSub([]);
        setExtraSub([]);
        setMonthlyIncome(0);
        setFormData({
          enrollment: "",
          office: "",
          photo: "",
          password: "",
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
          schoolingCourse: "",
          schoolingClass: "",
          iitNeetAdmission: "",
          schoolingAdmission: "",
          extraAdmission: "",
        });
        // setIncome(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      }
      else if(response.status===404){
        alert("Change Enrollment No")
      }
       else {
        alert("Error occured")
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // const extraChangeFee = extraSub===studentDetails.extraSub
    // const iitNeetChangeFee = iitNeetSub===studentDetails.iitNeetSub
    // const schoolingChangeFee = schoolingSub===studentDetails.extraSub

    try {
      const response = await fetch(`${backend}student/${studentDetails._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEnrollment: formData.enrollment,
          studentPassword: formData.password,
          studentOffice: formData.office,
          studentPhoto: formData.photo,
          studentName: formData.name,
          studentDob: formData.dob,
          studentGender: formData.gender,
          fatherName: formData.fatherName,
          fatherOccupassion: formData.fatherOccupassion,
          fatherNo: formData.fatherNo,
          motherName: formData.motherName,
          parentWp: formData.parentWp,
          emergencyNo: formData.emergencyNo,
          studentAddress: formData.address,
          studentDoj: formData.doj,
          studentBlood: formData.blood,
          schoolName: formData.schoolName,
          lastClass: formData.lastClass,
          lastExam: formData.lastExam,
          iitNeetCourse: formData.iitNeetCourse,
          schoolingCourse: formData.schoolingCourse,
          schoolingClass: formData.schoolingClass,
          iitNeetAdmission: formData.iitNeetAdmission,
          schoolingAdmission: formData.schoolingAdmission,
          extraAdmission: formData.extraAdmission,
          iitNeetFee: iitNeetFee,
          schoolingFee: schoolingFee,
          extraFee: extraFee,
          iitNeetSub: iitNeetSub,
          schoolingSub: schoolingSub,
          extraSub: extraSub,
          monthlyIncome: monthlyIncome,
        }),
      });

      const resJson = await response.json();

      if (response.status === 201) {
        alert("Form Submitted");
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
  };

  useEffect(() => {
    const date = new Date(formData.doj);
    const month = date.getMonth();
    let totalMonthlyFee =
      parseInt(iitNeetFee) + parseInt(schoolingFee) + parseInt(extraFee);
    if (propsData1 || propsData2 || propsData3) {
      if (month >= 0 && month <= 2) {
        setMonthlyIncome(totalMonthlyFee * (3 - month));
      } else {
        setMonthlyIncome((totalMonthlyFee * (12 - month + 3)) / (12 - month));
      }
    }
  }, [
    iitNeetFee,
    schoolingFee,
    extraFee,
    propsData1,
    propsData2,
    propsData3,
    formData.doj,
  ]);

  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <ToastContainer />
      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        {JSON.stringify(studentDetails) === JSON.stringify({}) ? null : (
          <div
            style={{ marginLeft: 10 }}
            onClick={() => setNoteView("allStudentForm")}
          >
            <ArrowBackIcon style={{ cursor: "pointer" }} />
          </div>
        )}
        {JSON.stringify(studentDetails) === JSON.stringify({}) ? (
          <h2 style={{ width: "30%", margin: "auto" }}>Student Form</h2>
        ) : (
          <h2 style={{ width: "30%", margin: "auto" }}>Update Student</h2>
        )}

        <form
          style={{
            gap: 10,
            display: "flex",
            flexDirection: "column",
            width: "30%",
            margin: "auto",
          }}
        >
          <div>
            <label htmlFor="">Student Enrollment</label>
            <input
              type="text"
              value={formData.enrollment}
              required
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
              required
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
              required
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
              required
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
          <input
            type="number"
            value={iitNeetFee}
            onChange={(e) => {
              setpropsData1(true);
              setIitNeetFee(e.target.value);
            }}
          />

          <h2>Schooling Solution</h2>
          <div>
            <label htmlFor="">Select Board</label>
            <Choose2 list={Schooling} />
          </div>

          <div>
            <label htmlFor="">Select class</label>
            <Choose3 list={schoolingClassList} />
          </div>

          <div>
            <label htmlFor="">Select Subject</label>
            <Choose8 list={schoolingSubList} />
          </div>

          <div>
            <label htmlFor="">Admission Fee :</label>
            <Choose5 list={admissionFeeStatus} />
          </div>
          <label htmlFor="">Total Fee</label>
          <input
            type="number"
            value={schoolingFee}
            onChange={(e) => {
              setpropsData2(true);
              setSchoolingFee(e.target.value);
            }}
          />

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
          <input
            type="number"
            value={extraFee}
            onChange={(e) => {
              setpropsData3(true);
              setExtraFee(e.target.value);
            }}
          />

          <h2>Total Monthly Income</h2>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => {
              console.log(monthlyIncome);
              setMonthlyIncome(parseInt(e.target.value));
            }}
          />
          {JSON.stringify(studentDetails) === JSON.stringify({}) ? (
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" onClick={handleUpdate}>
              Update
            </Button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddStudent;
