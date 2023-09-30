import React, { useState } from 'react';
import './Form.css'; // Import your CSS file
import { ToastContainer, toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import backend from '../../backend';

function NoteForm() {
  // Define state variables for form inputs
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [classValue, setClassValue] = useState('');
  const [batch, setBatch] = useState('');
  const [image, setImage] = useState('');
  const [pdf, setPdf] = useState('');
  const [course, setCourse] = useState('');
  const [loading, setLoading] = useState(false)


  const uploadFiles = async(e ) => {
    const {files} = e.target
    setLoading(true)
    const data = new FormData();
            data.append("file" , files[0]);
            data.append("upload_preset" , "solardealership");
            data.append("cloud_name" , "dkm3nxmk5")
            await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload" , {
              method:"post",
              body:data,
            }).then((res) => res.json())
            .then((data)=> {
                if(files[0].type==='application/pdf')
                    setPdf(data.url)
                if(files[0].type === "image/jpeg" || files[0].type === "image/png")
                    setImage(data.url)
               console.log('====================================');
               console.log(data.url);
               console.log('====================================');
            })
            .catch((err) => {
              console.log(err);
            });
            setLoading(false)
  }

  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    // setLoading(true)

    // Handle form submission here (e.g., send the data to the server)
    console.log({ title, subject, classValue, batch, image, pdf, course });
    try {
      const res = await fetch(`${backend}getnote/`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            noteTitle :title, 
            noteSubject :subject, 
            noteClass :classValue, 
            noteBatch :batch , 
            noteImage :image , 
            notePdf :pdf, 
            noteCourse :course
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    toast.success('Form submitted', {
      position: toast.POSITION.TOP_CENTER
  });
  // setLoading(false)

  };
  

  return (
    <>
    {loading ? <div className="loader" style={{color:"black"}}> 
  Please Wait Your File is Uploading......
  <CircularProgress/>
  </div> : null}
  <ToastContainer/>

      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Class:</label>
          <input type="text" value={classValue} onChange={(e) => setClassValue(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Batch:</label>
          <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={uploadFiles} />
        </div>

        <div className="form-group">
          <label>PDF:</label>
          <input type="file" accept=".pdf" onChange={uploadFiles} />
        </div>

        <div className="form-group">
          <label>Course:</label>
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default NoteForm;
