import StudentHover from './StudentHover'
import MITCpic from '../assets/img/photo 1.png'
import MLCPic from '../assets/img/MLC-01 1.png'
import SynergyPic from '../assets/img/Team Synergy.png'
function StudentOrganization() {
  return (
    <div className="studentOrganztn">
          <h2 className="studentOrganztnText">Student Organization</h2>
          <h4 className="studentOrganztnText2">
            The Student Body Is Committed To Leading In Academics, Games, And
            Innovations, Aiming For Pride In Their Achievements With Their Teams
            And Organizations, And They Wont Back Down.
          </h4>
          {/* <div>
            <StudentHover />
          </div> */}
          
            <div className='MITC'>
              <div style={{display:"flex"}}>
                <img src={MITCpic} alt=""  className='MITCpic'/>
                <h3 className='MITCpicHeader'>Mechatronics Intelligence & Technology Club (FUOYE)</h3>
              </div>
              
              <h4 className='MITCpicWord'>Fostering our relationship with the whole faculty, MITC is our student body open to individuals who are interested in equipping themselves with the knowledge of various problem-solving tech skills, which includes but not limited to, embedded systems, programming, Internet of Things and more.</h4>
            </div>

            <div className='MITC'>
              <div style={{display:"flex"}}>
                <img src={MLCPic} alt=""  className='MITCpic'/>
                <h3 className='MITCpicHeader'>Mechatronics Ladies Club (FUOYE)</h3>
              </div>
              
              <h4 className='MITCpicWord'>A student-led organization devoted to providing a professional network and social community for female mechatronics engineering students through
                  •Mentorships •Networking & Opportunities •Career development •Intensive workshops •Challenges control •Online webinar •Seminars & Conferences •Exploration
                  Projecting a vibrant female engineering students to the intelligence community across the globe.</h4>
            </div>

            <div className='MITC'>
              <div style={{display:"flex"}}>
                <img src={SynergyPic} alt=""  className='MITCpic'/>
                <h3 className='MITCpicHeader' style={{marginLeft:"20px"}}>Team System</h3>
              </div>
              
              <h4 className='MITCpicWord'>Taking over the spotlight, our football team, Team Synergy is our evidence that beyond the pages of our books and the beams from our computer screens, we pour our hearts into other things we engage in, because success is our Key Performance Indicator.</h4>
            </div>
          </div>
        
  )
}

export default StudentOrganization