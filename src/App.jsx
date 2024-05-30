// import logo from './logo.svg';
import './styles/App.css';
import './styles/NavBarStyles.css';
import './styles/HomePage.css';
import './styles/Carousels.css';
import './styles/StudentHoverStyle.css';
import './styles/Footer.css';
import './styles/AcademicCalendar.css';
import './styles/CourseCurriculum.css';
import './styles/DuePayment.css';
import './styles/DropDown.css'
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';
import LogIn from './pages/LogIn'
import AboutUs from './pages/AboutUs';
import AcademicCalendar from './pages/AcademicCalendar';
import CourseCurriculum from './pages/CourseCurriculum';
import CourseMaterials from './pages/CourseMaterials';
import DuePayment from './pages/DuePayment';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Header from './Components/Header';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <LogIn />
    },
    {
      path: 'HomePage',
      element: <HomePage />
    },
    {
      path: 'AboutUs',
      element: <AboutUs />
    },
    {
      path: 'AcademicCalendar',
      element: <AcademicCalendar />
    },
    {
      path: 'CourseCurriculum',
      element: <CourseCurriculum />
    },
    {
      path: 'CourseMaterials',
      element: <CourseMaterials />
    },
    {
      path: 'DuePayment',
      element: <DuePayment />
    },
  
    // {
    //   path: '',
    //   element:
    // }
  ])
}

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       {/* <LogIn /> */}
//       {/* <NavBar /> */}
//       <HomePage />
//       {/* <Carousels /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
