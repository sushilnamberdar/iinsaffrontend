import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Component/RegisterLogin/Registration';
import Navbar from './Component/Navbar';
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
import UserDashboard from './Component/User/UserDashboard';
import Leads from './Component/User/Leads';
import RelevantLeads from './Component/User/ReleventLeads';
import PendingLeads from './Component/User/PandingLeads'
import AcceptedLeads from './Component/User/AcceptedLeads';
import CompletedLeads from './Component/User/CompletedLeads';
import UserContactUs from './Component/User/UserContectus';
import Conferences from './Component/User/Conferences';
import PendingConferences from './Component/User/PendingConferences';
import AcceptedConferences from './Component/User/AcceptedConferences';
import CompletedConferences from './Component/User/ CompletedConferences';
import LeadsEarnings from './Component/User/LeadsEarnings';
import ConferencesEarnings from './Component/User/ConferencesEarnings';
import PaymentWithdraw from './Component/User/PaymentWithdraw';
import WithdrawalHistory from './Component/User/WithdrawlHistory';
import UserProfile from './Component/User/UserProfile';
import Settings from './Component/User/Settings';

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
          <Route path='/userDashboard' element={<UserDashboard/>}/>
          <Route path='/userleads' element={<Leads/>} />
          <Route path='/userreleventleads' element={<RelevantLeads/>}/>
          <Route path='/userpendingleads' element={<PendingLeads/>} />
          <Route path='/useracceptedleads' element={<AcceptedLeads/>} />
          <Route path='/usercompletedleads' element={<CompletedLeads/>} />
          <Route path='/usercontect' element={<UserContactUs/>} />
          <Route path='/userconfrences' element={<Conferences/>} />
          <Route path='/userpandingconfrences' element={<PendingConferences/>} />
          <Route path='/useracceptedconferences' element={<AcceptedConferences/>} />
          <Route path='/usercompletedconfrences' element={<CompletedConferences/>} />
          <Route path='/userleadsearning' element={<LeadsEarnings/>} />
          <Route path='/userconfrancesearning' element={<ConferencesEarnings/>} />
          <Route path='/usewithdrawrequest' element={<PaymentWithdraw/>} />
          <Route path='/withdrawalhistory' element={<WithdrawalHistory/>} />
          <Route path='/userprofile' element={<UserProfile/>} />
          <Route path='/usersetting'  element={<Settings/>} />
        </Routes>
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
