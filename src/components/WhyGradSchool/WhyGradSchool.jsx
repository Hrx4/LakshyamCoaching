import React , {useState} from 'react'
// import './css/flex-slider.css';
// import './css/fontawesome.css';
// import './css/lightbox.css';
// import './css/owl.css';
// import './css/templatemo-grad-school.css';

import image1 from './imageChoose/choose-us-image-01.png'
import image2 from './imageChoose/choose-us-image-02.png'
import image3 from './imageChoose/choose-us-image-03.png'


export default function WhyGradSchool() {

  const [aboutContent, setAboutContent] = useState('a')

const pressable = (e)=>{
  e.preventDefault();
  setAboutContent('a')
}
const pressable1 = (e)=>{
  e.preventDefault();
  setAboutContent('b')
}
const pressable2 = (e)=>{
  e.preventDefault();
  setAboutContent('c')
}
  return (
    <>
      <section className="section why-us" data-section="section2" style={{backgroundColor:"rgb(23, 34, 56)"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div  className="section-heading">
            <h2>Why choose Grad School?</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div id='tabs'>
            <ul style={{display:"flex", justifyContent:"space-evenly" }}>
              <li><a style={{textDecoration:"none" , fontSize:20 , color:"white"}}  href='/' onClick={pressable}>Best Education</a></li>
              <li><a style={{textDecoration:"none" , fontSize:20 , color:"white"}} href='/' onClick={pressable1}>Expert Faculty</a></li>
              <li><a style={{textDecoration:"none" , fontSize:20 , color:"white"}} href='/' onClick={pressable2}>Personalized Attention</a></li>
            </ul>
            <section className='tabs-content'>
              {
                (aboutContent==='a')? (
                  <article style={{marginTop:50, marginBottom:60 }} id='tabs-1'>
                <div className="row">
                  <div className="col-md-6">
                    <img src={image1} alt=""/>
                  </div>
                  <div className="col-md-6" style={{display:"flex" , flexDirection:"column" , justifyContent:"space-evenly"}}>
                    <h4 style={{color:"white" ,fontSize:35}}>Best Education</h4>
                    <p style={{color:"white" , fontSize:16}}>Welcome to Lakshyam Coaching, the premier institute dedicated to shaping the future of aspiring students in their journey towards success in competitive exams.

                    At Lakshyam Coaching, we specialize in providing comprehensive coaching and guidance for various entrance examinations, including JEE Mains & Advance, NEET, Olympiads etc.</p>
                  </div>
                </div>
              </article>
                ): null
              }
              {
                (aboutContent==='b') ? (
                  <article style={{marginTop:50, marginBottom:60 }} id='tabs-2'>
                <div className="row">
                  <div className="col-md-6">
                  <img src={image2} alt=""/>
                  </div>
                  <div className="col-md-6" style={{display:"flex" , flexDirection:"column" , justifyContent:"space-evenly"}} >
                    <h4 style={{color:"white",fontSize:35}}>Expert Faculty</h4>
                    <p style={{color:"white" , fontSize:16}}>We have a team of young, highly qualified and experienced faculty members who are experts in their respective domains. Our faculty members possess a deep understanding of the subjects they teach and employ effective teaching methodologies to ensure conceptual clarity and application-based learning.</p> 
                    
                  </div>
                </div>
              </article>
                ): null
              }
              {
                (aboutContent==='c')? (
                  <article style={{marginTop:50, marginBottom:60 }} id='tabs-3'>
                <div className="row">
                  <div className="col-md-6">
                  <img src={image3} alt=""/>
                  </div>
                  <div className="col-md-6" style={{display:"flex" , flexDirection:"column" , justifyContent:"space-evenly"}}>
                    <h4 style={{color:"white" ,fontSize:35}}>Personalized Attention</h4>
                    <p style={{color:"white" , fontSize:16}}>We understand that each student has unique strengths and weaknesses. Therefore, we emphasize personalized attention and provide individual support to help students overcome their challenges. Our faculty members are always available to address students' queries, provide guidance, and offer extra assistance whenever required.</p>
                  </div>
                </div>
              </article>
                ): null
              }
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
