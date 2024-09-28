import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/iinsaf.png';

function CollapsibleExample() {
  return (
   
    <Navbar collapseOnSelect expand="lg" style={{ position: 'sticky', top: 0, zIndex: 20 }}
    className="bg-body-tertiary" >
      <Container className='w-[80%]'>
        <Navbar.Brand href="/">
          <img className='h-14 w-40' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex lg:items-center lg:justify-center w-full">
            <Nav.Link href="#features" className="nav-link-underline text-xl">Home</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link-underline text-xl">About</Nav.Link>
            <Nav.Link href="#action/3.1" className="nav-link-underline text-xl">Faqs</Nav.Link>
            <Nav.Link href="#action/3.2" className="nav-link-underline text-xl">Contact</Nav.Link>
          </Nav>
          <Nav>
            <div className='flex lg:justify-center'>
              <Nav.Link href="#deets" className="px-4 nav-link-shine flex items-center justify-center !rounded-3xl bg-[#007CFB] text-white">Reporters</Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="px-4 nav-link-shine ml-2 flex items-center justify-center !rounded-3xl bg-[#007CFB] text-white">Advertisers</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
