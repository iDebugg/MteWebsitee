import React from 'react'
import SideNavBar from '../Components/SideNavBar';
import DropDown from '../Components/LevelDropDown';
import SemesterDropDown from '../Components/SemesterDropDown';

function DuePayment() {
  return (
    <div className='academicCalendarBody'>
    <SideNavBar />
        <div className="home" style={{width:"1580px"}}>
          <div>


            <div className='acdmcCrdSrchFilt'>
              <h2 className='acadCarText'>Due Payment</h2> 
            </div>
            <div className='duePymntFormDiv'>
                <h4 style={{color:"#908E96", fontWeight:"500", fontSize:"17px", lineHeight:"30px", letterSpacing:"0.4px"}}>Kindly fill the form</h4>
                <h4 style={{color:"#C5C5C5", fontWeight:"500", fontSize:"16px", fontStyle:"italic", width:"450px", lineHeight:"20px", letterSpacing:"0.4px"}}>Please note that the due payment is <span className='nGN'> NGN 3000 </span> and will be paid immediately the form has been filled</h4>
            </div>

            <div className='firstAndLastNmeDiv'>
                <div>
                    <h3 style={{color:"#908E96", fontWeight:"500", fontSize:"17px", lineHeight:"40px", letterSpacing:"0.4px"}}>First Name</h3>
                    <input type="text" required className='firstNameInput'/>
        
                </div>
                <div>
                    <h3 style={{color:"#908E96", fontWeight:"500", fontSize:"17px", lineHeight:"40px", letterSpacing:"0.4px"}}>Last Name</h3>
                    <input type="text" required className='firstNameInput'/>
        
                </div>
            </div>
            <div>
            <h3 style={{color:"#908E96", fontWeight:"500", fontSize:"17px", lineHeight:"40px", letterSpacing:"0.4px"}}>Matric Number</h3>
            <input type="text" required className='matricNoInput' />
            </div>

            <div className='levelandsenester'>
            <DropDown /> <SemesterDropDown />
            <div>
                <h2 className='dropdown-label'>Session</h2>
                <h2 className='session-label'>2023/2024</h2>
            </div>

            </div>
            <div className='narrationDiv'>
                <h2 className='dropdown-label'>Narration</h2>
                <textarea name="" id="" placeholder='I have paid for this semester’s dues. My phone number is +8123456789'></textarea>
            </div>

            <button className='PayBtn'>Pay</button>

        
           

        
            </div>
            <div className='paymentHistoryDiv'>

                <div className='paymntHistoryWrd'>
                    <h3> <i class="fa-solid fa-clock-rotate-left" style={{marginRight:"15px"}}></i>Payment History</h3>

                    <h4>Your History Is Emptry</h4>
                </div>

            </div>

            
          </div>

          
          

        
        
    </div>
  )
}

export default DuePayment