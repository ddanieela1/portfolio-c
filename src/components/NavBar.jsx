import {useState,useEffect} from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState('false');


  const scroll = () => {
    const section = document.querySelector( '#skill', '#proj-pane', '#about' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };


    return (
      <Router>
      <Navbar expand="lg" id="nav-bar" className={scrolled ? "scrolled": ""}>
      <Container className="navbar">
        <Navbar.Brand href="#home">
          <img src = {'/logo.png'} alt = 'logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

           
            <Nav.Link href="#home" id='nav-home' className= {activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}><img id='home-nav' className= {activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}   />Home</Nav.Link>

        
            <Nav.Link href="#projects" className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()}><img id='projects-nav' className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()}   />Projects</Nav.Link>


            <Nav.Link href="#skills" className= {activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()}><img id='skills-nav' className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()}   />Skills</Nav.Link>


          </Nav>
          <span className = "navbar-text">
            <div className = "social-icon">
              <a href="https://www.linkedin.com/in/daniela-villanueva-111413248/" ><img src={'/linkedin.svg'} alt="linked-in" /></a>
              <a href="https://github.com/ddanieela1"><img src={'/github.svg'} alt="github" /></a>
            </div>

            <HashLink to="#about">
            <button className ="social-button" onClick={() => console.log("clicked")}><span>About Me</span></button>
            </HashLink>

            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )
}