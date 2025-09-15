import React,{useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
// import SplashCursor from './SplashCursor'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Feature from './Components/Feature'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import Form from './Components/Form';
import LocomotiveScroll from 'locomotive-scroll';


export default function App() {


    useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy(); // cleanup jab component unmount ho
    };
  }, []);
  return (
    
    <div>
      {/* <SplashCursor/> */}
         {/* Navigation hamesha visible rahegi */}
      <Navbar />

      {/* Pages yaha load hongi without reload */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer/>
    </div>
  )
}
