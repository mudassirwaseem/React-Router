import React from 'react'
import {
 NavLink
  } from "react-router-dom";
function Navbar() {
    return (
        <div className="mt-4" style={{width:"90%",margin:"auto"}}>
               <nav style={{backgroundColor:"blue"}} className="navbar navbar-expand-lg ">
        <a style={{color:"white",fontSize:"25px",fontFamily:"inherit"}} className="navbar-brand" href="#" >React Router Assignment</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink style={{color:"white",margin:"30px",fontWeight:"bold",fontFamily:"inherit"}} to="/"> Home</NavLink>
            </li>
            <li className="nav-item active">
            <NavLink style={{color:"white",margin:"30px",fontWeight:"bold",fontFamily:"inherit"}} to="/Weatherapp"> WeatherApp</NavLink>
            </li>
            <li className="nav-item">
            <NavLink style={{color:"white",margin:"30px",fontWeight:"bold",fontFamily:"inherit"}} to="/Covid"> CovidApp</NavLink>
            </li>
           
          
          </ul>
         
        </div>
      </nav>
        </div>
    )
}

export default Navbar;
