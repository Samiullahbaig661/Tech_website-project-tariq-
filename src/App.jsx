import './App.css'
import TechNavbar from './Components/navbar'

import { Routes, Route } from 'react-router-dom';

import Home from './Pages/home'
import AboutUs from './Pages/about_us';
import Contact from './Pages/constact_s';
import Services from './Pages/services';
import NotFound from './Pages/not_found';
import Footer from './Components/footer';
import TechLandingPage from './Components/testingpagelanding';
// import DevelopmentProcessV3 from './components/DevelopmentProcessV3';



function App() {
  return (
    <>
    <TechNavbar/>

    {/* <DevelopmentProcessV3/> */}
    <Routes>
      <Route path = "/"  element = {<Home/>} /> 
      <Route path = "/services"  element = {<Services/>} />
      <Route path = "/about" element = {<AboutUs/>} />
      <Route path = "/contact" element = {<Contact/>} />
      <Route path = "*" element = {<NotFound/>} />  
    </Routes>
    <footer>
      <Footer/>
    </footer>

    </>
  )
}

export default App
