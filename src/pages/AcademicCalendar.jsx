import { useEffect } from 'react';
import Calendar from '../Components/Calendar';
import SideNavBar from '../Components/SideNavBar';
import image23 from '../assets/img/FAQ.png'



function AcademicCalendar() {

  useEffect (() => {
<div className='academicCalendarBody'>

<div>
  <h5 style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore reprehenderit voluptas, doloribus magnam soluta nostrum adipisci corrupti harum fugiat fugit aliquam voluptatibus ab. Laudantium id animi quibusdam sequi. Corrupti, culpa.</h5>
</div>

</div>
  });

 
  return (
    
    <div className='academicCalendarBody'>
    <SideNavBar />
        <div className="home">
          <div>


            <div className='acdmcCrdSrchFilt'>
              <h2 className='acadCarText'>Academic Calendar</h2> <span><i class="fa-solid fa-magnifying-glass academIcon"></i> <i class="fa-solid fa-filter academIcon"></i></span>
            </div>

            <div className='eventsDates'>
              <h4 className='eventsDatesText'>Events</h4> <h4 className='eventsDatesText'>Dates</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText'>Resumption/Registration for 2nd semester/ Lecture begins for all student</h4> <h4 className='resptnRegistrText1'>Tuesday 2nd , April 2024</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText11'>Student union week</h4> <h4 className='resptnRegistrText1'>Monday 20th - friday 24th, may 2024</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText'>Lecture ends for All students</h4> <h4 className='resptnRegistrText1'>Friday 14th, june 2024</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText11'>revision week</h4> <h4 className='resptnRegistrText1'>monday 17th - friday 21th, june 2024</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText'>2nd semester exam begins</h4> <h4 className='resptnRegistrText1'>monday 24th, june 2024</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText'>2nd semester exam ends</h4> <h4 className='resptnRegistrText1'>saturday 13th, july 2024</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText11'>marking/processing of results</h4> <h4 className='resptnRegistrText1'>monday 15th - friday 26th, july 2024</h4>
            </div>

            <div className='resptnRegistrr'>
              <h4 className='resptnRegistrText12'>BCS consideration of 2nd semester result</h4> <h4 className='resptnRegistrText1'>monday 29th - friday 2nd, Aug 2024</h4>
            </div>

            <div className='resptnRegistr'>
              <h4 className='resptnRegistrText12'>Senate consideration of 2nd senester result</h4> <h4 className='resptnRegistrText1'>wednesday 7th, August 2024</h4>
            </div>


            </div>

            <div>
        <Calendar />
        
          <h3 className='summaryText'>Summary of 2nd semester</h3>

          <div className='lectureWeeks'>
            <h3 className='lectureWeeksText1'>Lectures</h3>
            <h5>10 weeks</h5>
          </div>
          <div className='stntUnionWeeks'>
            <h3 className='lectureWeeksText1'>Student union week</h3>
            <h5>1 week</h5>
          </div>
          <div className='revsnWeeks'>
            <h3 className='lectureWeeksText1'>Revision</h3>
            <h5>1 week</h5>
          </div>
          <div className='emntnWeeks'>
            <h3 className='lectureWeeksText1'>Examination</h3>
            <h5>3 weeks</h5>
          </div>
        
        </div>
          </div>

        
        
    </div>
    
  )
}


export default AcademicCalendar;



