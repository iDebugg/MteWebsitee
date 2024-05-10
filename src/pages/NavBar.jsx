import React, { Component } from 'react';
import LogoNav from '../assets/img/Logomark.svg';
import MenuBtn from '../assets/img/Menu Button.png';
import CancelBtn from '../assets/img/Cancel Button.png';
import HomeBgd from '../assets/img/HomeBackground.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuIcon } from '../assets/Icons/MenuIcon';

class NavBar extends Component {
  state = { clikcked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="HomeDesign">
          <nav>
            <a href="index.html">
              <img src={LogoNav} alt="" className="LogoNavImg" />
            </a>
            <div>
              <ul
                id="navbar"
                className={this.state.clicked ? '#navbar active' : '#navbar'}
              >
                <li>
                  <a className="active" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="index.html">About Us</a>
                </li>
                <li>
                  <a href="index.html">Testimonials</a>
                </li>
                <li>
                  <a href="index.html">Student Organization</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">FAQ</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Academic Calendar</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Course Curriculum</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Educational Material</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Due Payments</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Easy Build Ideas</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Students Achievement</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Outtings & Research</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Virtual Tour</a>
                </li>
                <li className="Hidden">
                  <a href="index.html">Download NAMTES App</a>
                </li>
              </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={
                  this.state.clicked ? "fas fa-times size='2xl'" : 'fas fa-bars'
                }
              ></i>
            </div>
          </nav>

          <div className="DiscTomorText">
            <h2 style={{ marginBottom: '10px' }}>
              Discover Tomorrow's Innovations today
            </h2>
            <h4 style={{ fontWeight: '300' }}>
              Welcome To Mechatronics Engineering Excellence!
            </h4>
            <button className="DscvrMoreBtn">Discover More</button>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
