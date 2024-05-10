import logo from './logo.svg';
import './App.css';
import './NavBarStyles.css'
import './HomePage.css'
import './Carousels.css'
import './StudentHoverStyle.css'
import './Footer.css'
import LogIn from './Screens/LogIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import NavBar from './Screens/NavBar';
import HomePage from './Screens/HomePage';
import StudentHover from './Screens/StudentHover';
import Footer from './Screens/Footer';
import Carousels from './Screens/Carousels';



function App() {
  return (
    <div className="App">
     {/* <LogIn /> */}
     {/* <NavBar /> */}
     <HomePage />
    {/* <Carousels /> */}
     <Footer />
    
   
   
   
   
    </div>
  );
}

export default App;
