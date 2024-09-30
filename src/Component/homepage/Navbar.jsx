import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/iinsaf.png';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
   
    <Navbar collapseOnSelect expand="lg" style={{ position: 'sticky', top: 0, zIndex: 20 }}
    className="bg-body-tertiary " >
      <Container className='w-[80%]'>
        <Navbar.Brand as={Link} to={'/'}>
          <img className='h-10   w-30' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex lg:items-center lg:justify-center w-full">
            <Nav.Link as={Link} to={'/'} className="nav-link-underline text-xl">Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'} className="nav-link-underline text-xl">About</Nav.Link>
            <Nav.Link as={Link} to={'/faqs'}  className="nav-link-underline text-xl">Faqs</Nav.Link>
            <Nav.Link  as={Link} to={'/contact'} className="nav-link-underline text-xl">Contact</Nav.Link>
          </Nav>
          <Nav>
            <div className='flex lg:justify-center'>
              <Nav.Link as={Link} to={'/login'} className="px-4 nav-link-shine flex items-center justify-center !rounded-3xl bg-[#007CFB] text-white">Reporters</Nav.Link>
              <Nav.Link as={Link} to={'/login'} eventKey={2}  className="px-4 nav-link-shine ml-2 flex items-center justify-center !rounded-3xl bg-[#007CFB] text-white">Advertisers</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
