import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';
import lakshyamLogo from './lakshyamlogo.png';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation()

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log(location.pathname);
    };
  }, [location]);
  return (
    <div style={{position:"sticky" , top:0 , zIndex:100}}>
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}  `}>
      <div className="logo">
        <Link to="/" style={{fontSize:16 , display:"flex" , gap:8 , alignItems:"center"}}>
          <img
            src={lakshyamLogo }
            alt="logo"
            height="60px"
            width="60px"
            
          />
          Lakshyam Coaching
        </Link>
      </div>
      <div className='nav__list__part' style={{display:"flex" , alignItems:"center" }}>
      <div style={{marginLeft:"10rem"}} onClick={()=>{setMenuOpen(!menuOpen)}} className="menu-link">
        <MenuIcon fontSize='large'  style={{color:"rgba(63, 229, 3, 0.867)"}} />
      </div>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li>
            <Link to="/" style={location.pathname === "/" ?{ backgroundColor: '#3fe503dd' } : {}} >Home</Link>
          </li>
          <li>
            <Link to="/freetutorial" style={location.pathname === "/freetutorial" ?{ backgroundColor: '#3fe503dd' } : {}}>Study Material</Link>
          </li>
          <li>
            <Link to="/courses" style={location.pathname === "/courses" ?{ backgroundColor: '#3fe503dd' } : {}} >Courses</Link>
          </li>
          <li>
            <Link to="/gallery" style={location.pathname === "/gallery" ?{ backgroundColor: '#3fe503dd' } : {}} >Gallery</Link>
          </li>
          <li>
            <Link to="/about" style={location.pathname === "/about" ?{ backgroundColor: '#3fe503dd' } : {}} >About Us</Link>
          </li>
          <li>
            <Link to="/contact" style={location.pathname === "/contact" ?{ backgroundColor: '#3fe503dd' } : {}} >Contact</Link>
          </li>
          <li>
            <Link to={'/login'} style={{ backgroundColor: '#3fe503dd' }}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div onClick={handleNoticeTable}>
        <NotificationsActiveIcon style={{cursor:"pointer", marginLeft:"1rem"}} />
      </div> */}
      </div>
    </header>
    {
      (menuOpen)?
      (
        <div className='nav-toggle' style={{height:500 , width:'100%' , backgroundColor:'rgba(22,34,57,1)',position:"static" }}>
          <ul className="main-menu1" style={{height:400 , display:"flex" , justifyContent:"space-evenly" , flexDirection:"column" , alignItems:"center" , listStyle:"none" , textDecoration:"none"}}>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
              <Link style={location.pathname === "/" ?{ backgroundColor: '#3fe503dd',textDecoration:"none" , fontSize:20 , color:"white",padding:5 } : {textDecoration:"none" , fontSize:20 , color:"white"}} to="/">Home</Link>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
              <Link style={ location.pathname === "/freetutorial" ?{ backgroundColor: '#3fe503dd',textDecoration:"none" , fontSize:20 , color:"white",padding:5 } : {textDecoration:"none" , fontSize:20 , color:"white" }}  to="/freetutorial">Study Materials</Link>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
              <Link style={ location.pathname === "/courses" ?{ backgroundColor: '#3fe503dd',textDecoration:"none" , fontSize:20 , color:"white",padding:5 } : {textDecoration:"none" , fontSize:20 , color:"white"}}  to="/courses">Courses</Link>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
              <Link style={ location.pathname === "/gallery" ?{ backgroundColor: '#3fe503dd',textDecoration:"none" , fontSize:20 , color:"white",padding:5 } : {textDecoration:"none" , fontSize:20 , color:"white"}}  to="/gallery">Gallery</Link>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
              <Link style={ location.pathname === "/about" ?{ backgroundColor: '#3fe503dd',textDecoration:"none" , fontSize:20 , color:"white",padding:5 } : {textDecoration:"none" , fontSize:20 , color:"white"}}  to="/about">About Us</Link>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
              <Link style={ location.pathname === "/contact" ?{ backgroundColor: '#3fe503dd',textDecoration:"none" , fontSize:20 , color:"white",padding:5 } : {textDecoration:"none" , fontSize:20 , color:"white"}}  to="/contact">Contact</Link>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
              <Link style={{textDecoration:"none" , fontSize:20 , backgroundColor: '#3fe503dd' , padding:5 , color:'black'}}  to={'/login'} >
                Login
              </Link>
            </li>
          </ul>
        </div>
      ):
      null
    }
    </div>
  )
}

export default Navbar