import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '.././components/Header/Header';
import Footer from '.././components/Footer/Footer';
import Home from '.././components/pages/Home/Home';
import Courses from '.././components/pages/Courses/Courses';
import Plans from '.././components/pages/Plans/Plans';
import AboutUs from '.././components/pages/AboutUs/AboutUs';
import Contact from '.././components/pages/ContactUs/Contact';
import Support from '.././components/pages/Support/Support';
import Login from '.././components/pages/Becomemember/Login';
function LayoutRoutes(){
    return(
        <Router>
    <Header/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/services" element={<Plans/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>
        <Footer/>
        </Router>
    )
}



export default LayoutRoutes