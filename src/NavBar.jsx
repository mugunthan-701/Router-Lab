import React from 'react'
import { GoHeartFill } from "react-icons/go";
import './App.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <nav id='nav-app'>

   <Link to='/Home'>  <div>KALVIUM <span><GoHeartFill fill='red' /></span></div></Link> 
        <div id='detail'>
            <Link to='/Home'><p>Home</p></Link>
           <Link to='/About'> <p>About</p></Link>
           <Link to='/Contact'><p>Contact</p></Link>
        </div>
    </nav>
    </>
      

  )
}

export default NavBar