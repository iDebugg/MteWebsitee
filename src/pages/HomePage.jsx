import React from 'react';
import NavBar from './NavBar.jsx';
import HomePageBg from '../assets/img/What Does a Mechatronics Technician Do in their Everyday Duties_ 1.png';
import MechatCrcle from '../assets/img/mems_deiagram 1.png';
import HODframe from '../assets/img/frame-01 1.png';
import StudentHover from './StudentHover.jsx';
import faqIMG from '../assets/img/FAQ.png';

const HomePage = () => {
  return (
    <>
      <div className="HomeDesign">
        <NavBar />

        <div className="whatsMechatrBgBigScreen">
          <div>
            <img src={MechatCrcle} alt="" className="MechatCrcleImg" />
          </div>
          <div className="whatsMechatWRdDiv">
            <h2 className="whatsMechat">What is Mechatronics?</h2>
            <h5 className="whatsMechatDEfntn">
              Mechatronics In Its Simplest Form, Is A Branch Engineering That
              Adopts Electrical And Mechanical Engineering Principles To Create
              Computer Controlled Systems{' '}
            </h5>
          </div>
        </div>

        <div className="whatsMechatrBg">
          <img src={MechatCrcle} alt="" className="MechatCrcleImg" />
          <h2 className="whatsMechat">What is Mechatronics?</h2>
          <h5 className="whatsMechatDEfntn">
            Mechatronics In Its Simplest Form, Is A Branch Engineering That
            Adopts Electrical And Mechanical Engineering Principles To Create
            Computer Controlled Systems{' '}
          </h5>
        </div>

        <div className="MeetTheHODBigScreen">
          <div>
            <h2 className="meetTheHOD1">Meet The HOD</h2>
            <h5 className="meetTheHODWord1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
          </div>
          <div>
            <img src={HODframe} alt="" className="MechatCrcleImg" />
          </div>
        </div>

        <div className="MeetTheHOD">
          <img src={HODframe} alt="" className="MechatCrcleImg" />
          <h2 className="meetTheHOD">Meet The HOD</h2>
          <h5 className="meetTheHODWord">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h5>
        </div>

        <div className="exectvs">
          <h2 className="pstToPrsntExe">Past To Present Executives</h2>
          <h4 className="pstToPrsntExeWrd">
            We Present To You A Galleria Of Our Executives And Their Amazing
            Achievements In Office, Spanning Through 2015-2024 Till Date
          </h4>
        </div>
        <div className="studentOrganztn">
          <h2 className="studentOrganztnText">Student Organization</h2>
          <h4 className="studentOrganztnText2">
            The Student Body Is Committed To Leading In Academics, Games, And
            Innovations, Aiming For Pride In Their Achievements With Their Teams
            And Organizations, And They Won't Back Down.
          </h4>
          <div>
            <StudentHover />
          </div>
        </div>
        <div className="FaqDiv">
          <img src={faqIMG} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
