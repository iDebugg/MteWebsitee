import NAMTESlogo from '../assets/img/mems_deiagram 1.png';

function Footer() {
  return (
    <>
      <div className="FooterDiv">
        <img src={NAMTESlogo} alt="" className="namtesLogo" />
        <div className="FooterInfosDiv">
          <div className="FooterInfoss">
            <h3>National Association Of Mechatronics</h3>
            <h3>Engineering Students, Federal</h3>
            <h3>University Oye-Ekiti, Ikole Campus,</h3>
            <h3>Ikole-Ekiti State, Nigeria</h3>
          </div>

          <div className="FooterInfos">
            <h3>Home</h3>
            <h3>About Us</h3>
            <h3>Testimonials</h3>
            <h3>Achievements</h3>
          </div>

          <div className="FooterInfos">
            <h3>Course PDF</h3>
            <h3>Course Videos</h3>
            <h3>Easy Build Ideas</h3>
            <h3>Outings / Research</h3>
            <h3>Course Curriculum</h3>
          </div>

          <div className="FooterInfos">
            <h3>Virtual Tour</h3>
            <h3>Due Payment</h3>
            <h3>Student Spotlight</h3>
            <h3>Academic Calendar</h3>
            <h3>Download NAMTES App</h3>
          </div>
        </div>
        <div className="footer-icons">
          <i class="fa-brands fa-instagram fa-xl"></i>
          <i class="fa-brands fa-facebook-f fa-xl"></i>
          <i class="fa-brands fa-linkedin-in fa-xl"></i>
          <i class="fa-brands fa-twitter fa-xl"></i>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#09645B',
          color: 'white',
          paddingTop: '5px',
          paddingBottom: '15px',
        }}
      >
        <h4>NAMTES Website 2024</h4>
      </div>
    </>
  );
}

export default Footer;
