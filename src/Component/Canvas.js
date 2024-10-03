import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import dashboaboradpng from './images/dashboard.png'
import leadspng from './images/leads.png'
import relevendleadspng from './images/relavent_lead.png'
import acceptedleadspng from './images/al.png'
import completedleadspng from './images/clead.png'
import pendingleadspng from './images/pending.png'
import conferencespng from './User/icons/conferences.png'
import pendingconferencespng from './User/icons/pendingConferences.png'
import acceptedconferencespng from './User/icons/accepted_conf.png'
import completedconferencespng from './User/icons/completeconfo.png'
import leadearningpng from './User/icons/mhistory.png'
import conferenceearningpng from './User/icons/mhistory.png'
import withdrawalrequestpng from './User/icons/money-withdrawal.png'
import withdrawalhistory from './User/icons/withdrawalHistory.png'
import UserProfilepng from './User/icons/profile.png';
import settingpng from './User/icons/setting.png'
import logoutpng from './User/icons/switch.png'  

const Canvas = ({handleLogout ,handleCloseOffcanvas}) => {
  return (
    <Nav className="flex-column">
    <div className="flex-col  space-y-2 items-center justify-start  p-4 rounded-lg">
      <p className='text-gray-300'>Leads</p>
      <div className="flex items-center">
        <img src={dashboaboradpng} alt="Dashboard Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userdashboard'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={leadspng} alt="Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userleads'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Leads</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={relevendleadspng} alt="Relevant Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userreleventleads'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Relevant Leads</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={pendingleadspng} alt="Pending Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userpendingleads'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Pending Leads</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={acceptedleadspng} alt="Accepted Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/useracceptedleads'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Accepted Leads</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={completedleadspng} alt="Completed Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/usercompletedleads'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Completed Leads</Nav.Link>
      </div>

      <p className='text-gray-300'>Conferences</p>

      <div className="flex  items-center group">
        <img src={conferencespng} alt="Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userconfrences'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Conferences</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={pendingconferencespng} alt="Relevant Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userpandingconfrences'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Pending Conferences</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={acceptedconferencespng} alt="Pending Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/useracceptedconferences'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Accepted Conferences</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={completedconferencespng} alt="Accepted Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/usercompletedconfrences'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Completed Conferences</Nav.Link>
      </div>

      <p className='text-gray-300' >Payments</p>
      <div className="flex  items-center group">
        <img src={leadearningpng} alt="Relevant Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userleadsearning'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Leads Earning </Nav.Link>
      </div>


      <div className="flex  items-center group">
        <img src={conferenceearningpng} alt="Relevant Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userconfrancesearning'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Conference Earning </Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={withdrawalrequestpng} alt="Pending Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/usewithdrawrequest'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Withdrawal Requests</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={withdrawalhistory} alt="Accepted Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/withdrawalhistory'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Withdrawal History</Nav.Link>
      </div>

      <p className='text-gray-300'>Profile</p>

      <div className="flex  items-center group">
        <img src={UserProfilepng} alt="Relevant Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/userprofile'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Profile</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={settingpng} alt="Pending Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <Nav.Link as={Link} to={'/usersetting'} onClick={handleCloseOffcanvas} className="text-gray-700 hover:text-blue-600 transition-colors">Setting</Nav.Link>
      </div>

      <div className="flex  items-center group">
        <img src={logoutpng} alt="Accepted Leads Icon" className="h-5 w-5 transition-transform transform group-hover:scale-110" />
        <button onClick={handleLogout} className="text-gray-700  ml-4 hover:text-blue-600 transition-colors">LogOut</button>
      </div>

    </div>

  </Nav>
  )
}

export default Canvas
