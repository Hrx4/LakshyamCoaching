import React from "react";


const SubCheckbox = () =>{
    return(
        <div className="checkbox-container" style={{margin:15, paddingLeft:25}}>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="English"/> English
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Hindi"/> Hindi
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Mathematics"/> Mathematics
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Science"/> Science
        </label>
        <label className="checkbox" style={{marginRight:10}}>
            <input type="checkbox" name="subject" value="Social Science"/> Social Science
        </label>
    </div>







    )
}

export default SubCheckbox;