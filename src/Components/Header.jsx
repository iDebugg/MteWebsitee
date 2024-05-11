import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NAMTESLogo from '../assets/img/NAMTES Logo.png';
import PropTypes from 'prop-types'

const MobileMenuIcon = ({ handleToggle, active }) => (
  <div
    onClick={handleToggle}
    className="flex-col cursor-pointer bg-secondary rounded-[50%] w-[50px] h-[50px] flex items-center justify-center p-[1rem]"
  >
    <span
      className={` ${
        active ? 'h-[.12rem]' : 'h-[.18rem]'
      } w-[1.2rem] bg-white duration-[.3s] ease-in-out rounded-[12rem] ${
        active ? 'translate-y-[.15rem] rotate-45' : ''
      }`}
    />
    <span
      className={`w-[1.2rem] h-[.18rem] ml-1 bg-white rounded-[12rem] ${
        active ? 'opacity-0 my-0' : 'opacity-100 my-[.3rem]'
      }`}
    />
    <span
      className={`${
        active ? 'h-[.12rem]' : 'h-[.18rem]'
      } w-[1.2rem] bg-white duration-[.3s] ease-in-out rounded-[12rem] ${
        active ? '-translate-y-[.15rem] -rotate-45' : ''
      }`}
    />
  </div>
);

MobileMenuIcon.propTypes = {
  handleToggle: PropTypes.func,
  active: PropTypes.bool,
}

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setOpenNavbar((prev) => !prev);
    setActive((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        <nav className="fixed top-[2rem] z-50 left-[10%] flex justify-between  items-center py-[12px] px-[16px] w-[80%] rounded-[50px] mx-auto bg-gray-100">
          <a href="/">
            <img src={NAMTESLogo} alt="NAMTES LOGO" />
          </a>

          <div className="hidden md:flex gap-[20px] ">
            <NavLink className="nav-menu-link">Home</NavLink>
            <NavLink className="nav-menu-link">About us</NavLink>
            <NavLink className="nav-menu-link">Testimonials</NavLink>
            <NavLink className="nav-menu-link">Student Organisation</NavLink>
            <NavLink className="nav-menu-link">FAQ</NavLink>
          </div>

          {/* <div className=""> */}
          <MobileMenuIcon active={active} handleToggle={handleToggle} />
          {/* </div> */}
        </nav>
      </div>

      {openNavbar ? <HeaderMenu active={active} /> : null}
    </>
  );
};

export default Header;

const HeaderMenu = ({ active }) => {
  return (
    <>
      <div className="relative">
        <div data-aos={`${active ? 'fade-down' : 'fade-up'}`} data-aos-duration='1000' className="fixed bg-primary h-full w-full z-10 transform duration-[11s] ease-in-out">
          <div className="flex flex-col">
            <NavLink className="nav-menu-link">Home</NavLink>
            <NavLink className="nav-menu-link">About us</NavLink>
            <NavLink className="nav-menu-link">Testimonials</NavLink>
            <NavLink className="nav-menu-link">Student Organisation</NavLink>
            <NavLink className="nav-menu-link">FAQ</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

HeaderMenu.propTypes = {
  active: PropTypes.bool
}
