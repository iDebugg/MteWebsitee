import React from 'react'
import SideNavBar from '../Components/SideNavBar';

function CourseCurriculum() {
  return (
  

    <div className='academicCalendarBody'>
    <SideNavBar />div
        <div className="home">
          <div>


            <div className='acdmcCrdSrchFilt'>
              <h2 className='acadCarText'>Course Curriculum</h2> <span><i class="fa-solid fa-magnifying-glass academIcon"></i> <i class="fa-solid fa-filter academIcon"></i></span>
            </div>

            <div className='eventsDates'>
              <h4 className='eventsDatesText'>Course</h4> <h4 className='eventsDatesText'>Units</h4>
            </div>

            <div className='elemntMath'>
            <div><h4 className='elemntMathText'>Elementary Mathematics I</h4>
            <h4 className='elemntMathText11'>CODE: MTH 101</h4>
            <h4 className='elemntMathText11'>Status: Compulsory</h4></div>
            <div className='elemntMathText1Div'><h4 className='elemntMathText1'>3</h4></div>
            </div>

            <div className='elemntMath'>
            <div><h4 className='elemntMathText'>Elementary Mathematics III</h4>
            <h4 className='elemntMathText11'>CODE: MTH 103</h4>
            <h4 className='elemntMathText11'>Status: Compulsory</h4></div>
            <div className='elemntMathText1Div'><h4 className='elemntMathText1'>3</h4></div>
            </div>

            <div className='elemntMath'>
            <div><h4 className='elemntMathText'>General Physics I</h4>
            <h4 className='elemntMathText11'>CODE: PHY 101</h4>
            <h4 className='elemntMathText11'>Status: Compulsory</h4></div>
            <div className='elemntMathText1Div'><h4 className='elemntMathText1'>3</h4></div>
            </div>

          


            </div>

            <div>
              <div className='firstSmstrDiv'>
                <h3 className='summaryText'>First Semester</h3>
                <div style={{display:"flex", gap:"100px"}}>
                  <div>
                    <h3 className='totalUnitsLevel'>Levels</h3>
                    <h4 className='levels'>100 Level</h4>
                    <h4 className='levels'>200 Level</h4>
                    <h4 className='levels'>300 Level</h4>
                    <h4 className='levels'>400 Level</h4>
                    <h4 className='levels'>500 Level</h4>
                  </div>

                  <div>
                    <h3 className='totalUnitsLevel'>Total Unit</h3>
                    <div className='units'><h4>23</h4></div>
                    <div className='units'><h4>20</h4></div>
                    <div className='units'><h4>22</h4></div>
                    <div className='units'><h4>22</h4></div>
                    <div className='units'><h4>20</h4></div>
                  </div>
                </div>
              </div>

              <div className='firstSmstrDiv'>
                <h3 className='summaryText'>Second Semester</h3>
                <div style={{display:"flex", gap:"100px"}}>
                  <div>
                    <h3 className='totalUnitsLevel'>Levels</h3>
                    <h4 className='levels'>100 Level</h4>
                    <h4 className='levels'>200 Level</h4>
                    <h4 className='levels'>300 Level</h4>
                    <h4 className='levels'>400 Level</h4>
                    <h4 className='levels'>500 Level</h4>
                  </div>

                  <div>
                    <h3 className='totalUnitsLevel'>Total Unit</h3>
                    <div className='units'><h4>21</h4></div>
                    <div className='units'><h4>22</h4></div>
                    <div className='units'><h4>23</h4></div>
                    <div className='units'><h4>6</h4></div>
                    <div className='units'><h4>21</h4></div>
                  </div>
                </div>
              </div>
        
        
          
        
        </div>
          </div>

        
        
    </div>
  )
}

export default CourseCurriculum