import React from "react";


const SubCheckbox = ({studentSubjects , setStudentSubjects}) =>{
    
    const handleCheck = (e)=>{
        
        (e.target.checked)?
    (setStudentSubjects ([...studentSubjects , e.target.value])):
    (
        setStudentSubjects( [...studentSubjects.filter(item => item !== e.target.value)])
    )
    console.log('====================================');
    console.log(studentSubjects);
    console.log('====================================');
    }


    return(
        <div className="checkbox-container" style={{margin:15, paddingLeft:25}}>
        <label className="checkbox" style={{marginRight:10}} > 
            <input type="checkbox" name="subject" value="English" onClick={(e)=>handleCheck(e)}/> English
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Hindi" onClick={(e)=>handleCheck(e)}/> Hindi
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Mathematics" onClick={(e)=>handleCheck(e)}/> Mathematics
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Science" onClick={(e)=>handleCheck(e)}/> Science
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Social Science" onClick={(e)=>handleCheck(e)}/> Social Science
        </label>
    </div>


    )
}

export default SubCheckbox;