import MechatCrcle from '../assets/img/mems_deiagram 1.png';
import HODframe from '../assets/img/frame-01 1.png';
import Header from '../Components/Header.jsx';
import AboutUs from '../pages/AboutUs.jsx'
import StudentOrganization from '../pages/StudentOrganization.jsx';
import Faq from '../pages/Faq.jsx'
import Footer from '../pages/Footer.jsx'

const HomePage = () => {
  return (
    <>
     
       
     <Header />

        <div className="HomeDesign">
        
      
      <div className="DiscTomorText">
        <h2 style={{ marginBottom: '10px' }}>
          Discover Tomorrow's Innovations today
        </h2>
        <h4 className='welcomeToMechExce'>
          Welcome To Mechatronics Engineering Excellence!
        </h4>
        <button className="DscvrMoreBtn">Discover More</button>
      </div>
    </div>
        

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
        <AboutUs />

       

        <div className="exectvs">
          <h2 className="pstToPrsntExe">Past To Present Executives</h2>
          <h4 className="pstToPrsntExeWrd">
            We Present To You A Galleria Of Our Executives And Their Amazing
            Achievements In Office, Spanning Through 2015-2024 Till Date
          </h4>
        </div>

        <StudentOrganization />
    
        <Faq />

        


        <Footer />
       
      
    </>
  );
};

export default HomePage;
