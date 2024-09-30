import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Component/RegisterLogin/Registration';
import Navbar from './Component/homepage/Navbar';
import Hero from './Component/homepage/Hero';
import TopHeader from './Component/homepage/TopHeader';
import Footer from './Component/Footer';
import Login from './Component/RegisterLogin/Login';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import Faqs from './Component/Faqs';
import ScrollToTop from './ScrollToTop';
import TreamsAndCondition from './Component/PrivacyLinks/TreamsAndCondition';
import PrivacyPolicy from './Component/PrivacyLinks/PrivacyPolicy';
import RefundPolicy from './Component/PrivacyLinks/RefundPolicy';
import Desclamer from './Component/PrivacyLinks/Desclamer';

function App() {
  return (
    <>
      <TopHeader />
      <ScrollToTop/>
      <Navbar />
      {/* <Router> */}
        <Routes>
          
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/privacy' element={<TreamsAndCondition/>} />
          <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
          <Route path='/refundpolicy' element={<RefundPolicy/>} />
          <Route path='/desclamer' element={<Desclamer/>} />
        </Routes>
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
