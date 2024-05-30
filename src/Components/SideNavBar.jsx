import React from 'react'
import NAMTESLogo from '../assets/img/Logomarkk.png';
import { NavLink } from 'react-router-dom';

function sideNavBar() {
  return (
    <nav className='sidebar close'>
    <header>
        <div className='image-text'>
            <span className='image'>
              <NavLink to="/HomePage">
                <img src={NAMTESLogo} />
                </NavLink>
            </span>
            <div className="text header-text">
              <span className="name">NAMTES</span>
            </div>
        </div>
        
    </header>
    <div className="menu-bar">
      <div className="menu">
        <hr />
        <ul className="menu-links">
          <li className="nav-link">
          <NavLink className="nav-menu-link" to="/HomePage">
          <i class="fa-solid fa-house  icon"></i>
            <span className="text nav-text">Home</span>

          </NavLink>
          
           
          </li>

          <li className="nav-link">
          <NavLink className="nav-menu-link" to="/AcademicCalendar">
            <i class="fa-solid fa-calendar icon"></i>
            <span className="text nav-text">Academic Calendar</span>
            </NavLink>
          </li>

          <li className="nav-link">
          <NavLink className="nav-menu-link" to="/CourseCurriculum">
            <i class="fa-solid fa-book icon"></i>
            <span className="text nav-text">Course Curriculum</span>
            </NavLink>
          </li>

          <li className="nav-link">
          <NavLink className="nav-menu-link" to="/CourseMaterials">
            <i class="fa-solid fa-file-zipper icon"></i>
            <span className="text nav-text">Course Materials</span>
            </NavLink>
          </li>

          <li className="nav-link">
          <NavLink className="nav-menu-link" to="/DuePayment">
            <i class="fa-solid fa-receipt icon"></i>
            <span className="text nav-text">Due Payments</span>
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
      <div className="bottom-content">
      <li className="nav-link">
           <NavLink to="/">
            <i class="fa-solid fa-right-from-bracket icon"></i>
            <span className="text nav-text">Log Out</span>
            </NavLink>
          </li>
      </div>
    </div>
</nav>
  )
}

export default sideNavBar