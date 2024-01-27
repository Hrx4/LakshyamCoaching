import React, { useEffect, useState } from 'react'
import backend from '../../backend'

const Birthday = () => {

    const [teacherList, setTeacherList] = useState([])
    const [studentList, setStudentList] = useState([])

useEffect(() => {
  const list = async()=>{

    try {
        const response = await fetch(`${backend}bday/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
  
        const resJson = await response.json();
  
        if (response.status === 200) {
          setStudentList(resJson.studentList);
          setTeacherList(resJson.teacherList);

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
  list()
}, [])

  return (
    <>

    </>
  )
}

export default Birthday