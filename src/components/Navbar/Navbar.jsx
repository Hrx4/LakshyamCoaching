import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import lakshyamLogo from './lakshyamlogo.png';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
    <header className="main-header clearfix">
      <div className="logo">
        <Link to="/">
          <img
            src={lakshyamLogo }
            alt="logo"
            height="60px"
            width="60px"
            
          />
        </Link>
      </div>
      <div onClick={()=>{setMenuOpen(!menuOpen)}} className="menu-link">
        <MenuIcon fontSize='large' color='success' />
      </div>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/freetutorial">Free Tutorial</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to={'/login'} style={{ backgroundColor: '#3fe503dd' }}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    {
      (menuOpen)?
      (
        <div className='nav-toggle' style={{height:500 , width:'100%' , backgroundColor:'rgba(22,34,57,1)',position:"static" }}>
          <ul className="main-menu1" style={{height:400 , display:"flex" , justifyContent:"space-evenly" , flexDirection:"column" , alignItems:"center" , listStyle:"none" , textDecoration:"none"}}>
            <li >
              <Link style={{textDecoration:"none" , fontSize:20 , color:"white"}} to="/">Home</Link>
            </li>
            <li>
              <Link style={{textDecoration:"none" , fontSize:20 , color:"white"}}  to="/about">About Us</Link>
            </li>
            <li>
              <Link style={{textDecoration:"none" , fontSize:20 , color:"white"}}  to="/courses">Courses</Link>
            </li>
            <li>
              <Link style={{textDecoration:"none" , fontSize:20 , color:"white"}}  to="/freetutorial">Free Tutorial</Link>
            </li>
            <li>
              <Link style={{textDecoration:"none" , fontSize:20 , color:"white"}}  to="/contact">Contact</Link>
            </li>
            <li>
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