import React from 'react';
import { MenuData } from './MenuData';
import "../components/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">
                  Bradley Jordan Winson
                </h1>
                <ul className='nav-menu'>
                  {MenuData.map((item, index)=>{
                    return(
                      <li key={index}>
                        <Link className={item.cName} to={item.url}>
                          <i className={item.icon}></i>
                          {item.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
