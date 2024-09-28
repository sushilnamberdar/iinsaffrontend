import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Registration from './Component/RegisterLogin/Registration';
import Navbar from './Component/homepage/Navbar'
import Hero from './Component/homepage/Hero';
import TopHeader from './Component/homepage/TopHeader'
import Footer from './Component/Footer';
function App() {
  return (
    <>
    <TopHeader/>
    <Navbar/>
    <Router>   
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
