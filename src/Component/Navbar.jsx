import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './images/iinsaf.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import profilepng from './images/profile.png';

// Import icons
import { FaCaretDown, FaUser, FaCog, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa'; // For React Icons

function CollapsibleExample() {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken'));
  }, []); // Add empty dependency array to run only on mount

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={{ position: 'sticky', top: 0, zIndex: 20 }} className="bg-body-tertiary">
      <Container className='w-[80%]'>
        <Navbar.Brand as={Link} to={'/'}>
          <img className='h-10 w-30' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex lg:items-center lg:justify-center w-full">
            <Nav.Link as={Link} to={'/'} className="nav-link-underline text-xl">Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'} className="nav-link-underline text-xl">About</Nav.Link>
            <Nav.Link as={Link} to={'/faqs'} className="nav-link-underline text-xl">Faqs</Nav.Link>
            <Nav.Link as={Link} to={'/contact'} className="nav-link-underline text-xl">Contact</Nav.Link>
          </Nav>
          <Nav>
            <div className='flex lg:justify-center'>
              {!isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to={'/login'} className="px-4 nav-link-shine flex items-center justify-center !rounded-3xl bg-[#007CFB] text-white">Reporters</Nav.Link>
                  <Nav.Link as={Link} to={'/login'} eventKey={2} className="px-4 nav-link-shine ml-2 flex items-center justify-center !rounded-3xl bg-[#007CFB] text-white">Advertisers</Nav.Link>
                </>
              ) : (
                <Dropdown align="end" className="position-relative">
                  <Dropdown.Toggle 
                    className="border-0 bg-transparent p-0 d-flex align-items-center" 
                    style={{ outline: 'none' }}
                    id="profile-dropdown" 
                    onMouseEnter={e => e.currentTarget.click()}
                  >
                    <img src={profilepng} alt="User Icon" className="h-10 w-10" />
                    <FaCaretDown className="ml-1" /> {/* Dropdown Arrow Icon */}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/userprofile" className="d-flex align-items-center">
                      <FaUser className="mr-2" /> My Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/userdashboard' className="d-flex align-items-center">
                      <FaCog className="mr-2" /> Account Setting
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/userdashboard' className="d-flex align-items-center">
                      <FaTachometerAlt className="mr-2" /> Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout} className="d-flex align-items-center">
                      <FaSignOutAlt className="mr-2" /> Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
