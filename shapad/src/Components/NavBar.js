import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navBrand from '../assets/1000265214 2 (1).png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
const Bar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/start-a-project');
    };

    const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
    return (
        <Navbar className='px-0 px-sm-5' expand="lg" sticky="top" expanded={expanded} style={{backgroundColor:'black'}}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={navBrand} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          >
            {/* Conditional rendering based on 'expanded' state */}
            {expanded ? (
              <i className="bi bi-x-lg text-white"></i> // "X" icon when expanded
            ) : (
              <i className="bi bi-list text-white"></i> // Hamburger icon when collapsed
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white navlink">
              <Nav.Link as={Link} to="/" className="text-white pt-0 pt-sm-4">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-0 mx-sm-5 pt-0 pt-sm-4 text-white">
                About
              </Nav.Link>
              <Nav.Link
                href="https://forms.gle/rreGvfcvCwTgcwx17"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-0 pt-sm-4 me-0 me-sm-5 text-white"
              >
                Join Us
              </Nav.Link>
              <div className="mt-2">
                <button className="btn1" onClick={handleClick}>
                  Start a project
                  <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Bar;