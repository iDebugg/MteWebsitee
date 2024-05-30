import React from 'react'
import SideNavBar from '../Components/SideNavBar';

function CourseMaterials() {
  return (
    <div className='academicCalendarBody'>
    <SideNavBar />div
        <div className="home">
          <div>


            <div className='acdmcCrdSrchFilt'>
              <h2 className='acadCarText'>Course Materials</h2> <span><i class="fa-solid fa-magnifying-glass academIcon"></i> <i class="fa-solid fa-filter academIcon"></i></span>
            </div>

            <div className='eventsDates1'>
              <h4 className='eventsDatesText'>Course</h4> <h4 className='eventsDatesText'>Download</h4>
            </div>

            <div className='elemntMath1'>
            <div>
                <div style={{display:"flex"}}>
                    <div><i class="fa-solid fa-file-pdf pdf"></i></div>
                <div><h4 className='elemntMathText'>Elementary Mathematics I</h4>
            <h4 className='elemntMathText11'>CODE: MTH 101</h4>
            <h4 className='elemntMathText11'>Status: Compulsory</h4></div>
                
                </div>
            </div>
            <div className='elemntMathText1Div'><h4 className='elemntMathText1'><i class="fa-solid fa-circle-down" style={{fontSize:"27px"}}></i></h4></div>
            </div>

          
            <div className='elemntMath1'>
            <div>
                <div style={{display:"flex"}}>
                    <div><i class="fa-solid fa-file-pdf pdf"></i></div>
                <div><h4 className='elemntMathText'>Elementary Mathematics III</h4>
            <h4 className='elemntMathText11'>CODE: MTH 103</h4>
            <h4 className='elemntMathText11'>Status: Compulsory</h4></div>
                
                </div>
            </div>
            <div className='elemntMathText1Div'><h4 className='elemntMathText1'><i class="fa-solid fa-circle-down" style={{fontSize:"27px"}}></i></h4></div>
            </div>

            <div className='elemntMath1'>
            <div>
                <div style={{display:"flex"}}>
                    <div><i class="fa-solid fa-file-pdf pdf"></i></div>
                <div><h4 className='elemntMathText'>General Physics I</h4>
            <h4 className='elemntMathText11'>CODE: PHY 101</h4>
            <h4 className='elemntMathText11'>Status: Compulsory</h4></div>
                
                </div>
            </div>
            <div className='elemntMathText1Div'><h4 className='elemntMathText1'><i class="fa-solid fa-circle-down" style={{fontSize:"27px"}}></i></h4></div>
            </div>

            <div className='elemntMath1'>
            <div>
                <div style={{display:"flex"}}>
                    <div><i class="fa-solid fa-file-pdf pdf"></i></div>
                <div><h4 className='elemntMathText'>Elementary Mathematics I</h4>
            <h4 className='elemntMathText11'>CODE: MTH 101</h4>
            <h4 className='elemntMathText11'>Status: Compulsory</h4></div>
                
                </div>
            </div>
            <div className='elemntMathText1Div'><h4 className='elemntMathText1'><i class="fa-solid fa-circle-down" style={{fontSize:"27px"}}></i></h4></div>
            </div>
            

        
            </div>

            <div>
            <div className='documntsWrd'>
            <i class="fa-solid fa-file-pdf pdf"></i>
                <h2 style={{color:"white"}}>Documents</h2>
              </div>

              <div className='videosPlay'>
              <i class="fa-solid fa-play play"></i>
                <h2 style={{color:"#09645B"}}>Videos</h2>
              </div>
        
        
          
        
        </div>
          </div>

        
        
    </div>
  )
}

export default CourseMaterials