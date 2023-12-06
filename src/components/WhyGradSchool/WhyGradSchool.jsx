import React , {useState} from 'react'
// import './css/flex-slider.css';
// import './css/fontawesome.css';
// import './css/lightbox.css';
// import './css/owl.css';
// import './css/templatemo-grad-school.css';
import './WhyGradSchool.css'
import image1 from './imageChoose/1.png'
import image2 from './imageChoose/2.png'
import image3 from './imageChoose/3.png'


export default function WhyGradSchool() {

  

  const data = 
  [
    {
      heading:"Best Education",
      main:"Welcome to Lakshyam Coaching, the premier institute dedicated to shaping the future of aspiring students in their journey towards success in competitive exams. At Lakshyam Coaching, we specialize in providing comprehensive coaching and guidance for various entrance examinations, including JEE Mains & Advance, NEET, Olympiads etc.",
      image:image1
    },
    {
      heading:"Expert Faculty",
      main:"We have a team of young, highly qualified and experienced faculty members who are experts in their respective domains. Our faculty members possess a deep understanding of the subjects they teach and employ effective teaching methodologies to ensure conceptual clarity and application-based learning.",
      image:image2
    },
    {
      heading:"Personalized Attention",
      main:"We understand that each student has unique strengths and weaknesses. Therefore, we emphasize personalized attention and provide individual support to help students overcome their challenges. Our faculty members are always available to address students' queries, provide guidance, and offer extra assistance whenever required.",
      image:image3
    }
  ]

  const [heading, setHeading] = useState(data[0].heading)
  const [mainContent, setMainContent] = useState(data[0].main)
  const [imageContent, setImageContent] = useState(data[0].image)
const pressable = (e)=>{
  e.preventDefault();
  setHeading(data[0].heading);
  setMainContent(data[0].main)
  setImageContent(data[0].image)
}
const pressable1 = (e)=>{
  e.preventDefault();
  setHeading(data[1].heading);
  setMainContent(data[1].main)
  setImageContent(data[1].image)

}
const pressable2 = (e)=>{
  e.preventDefault();
  setHeading(data[2].heading);
  setMainContent(data[2].main)
  setImageContent(data[2].image)
}
  return (
    <>
      <section className="section-why-us" data-section="section2" style={{}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div  className="section-heading" style={{marginBottom:30}}>
            <h2 style={{marginTop:30}}>Why choose Lakshyam Coaching?</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div id='tabs'>
            <ul style={{display:"flex", justifyContent:"space-evenly" }}>
              <li><a className={({isActive})=>{return isActive? "active_class":""}} style={{textDecoration:"none" , fontSize:20 , color:"white"}}  href='/' onClick={pressable}>Best Education</a></li>
              <li><a className={({isActive})=>{return isActive? "active_class":""}} style={{textDecoration:"none" , fontSize:20 , color:"white"}} href='/' onClick={pressable1}>Expert Faculty</a></li>
              <li><a className={({isActive})=>{return isActive? "active_class":""}} style={{textDecoration:"none" , fontSize:20 , color:"white"}} href='/' onClick={pressable2}>Personalized Attention</a></li>
            </ul>
            <section className='tabs-content'>
              <article style={{marginTop:50, marginBottom:60 }} id='tabs-1'>
                <div className="row"> 
                  <div className="col-md-6">
                    <img className='section__image' style={{height:"100%" , width:"100%"}} src={imageContent} alt=""/>
                  </div>
                  <div className="col-md-6" style={{display:"flex" , flexDirection:"column" , justifyContent:"space-evenly"}}>
                    <h4 style={{color:"white" ,fontSize:35}}>{heading}</h4>
                    <p style={{color:"white" , fontSize:16}}>{mainContent}</p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
