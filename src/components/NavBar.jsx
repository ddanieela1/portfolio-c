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
    const section = document.querySelector( '#skill', '#project' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };



    return (
      <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container className="navbar">
        <Navbar.Brand href="#home">
          <img src = {'/grid.jpeg'} alt = 'logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

           
            <Nav.Link href="#home" id='nav-home' className= {activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}><img id='home-nav' className= {activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}src={'/shelter.png'}  alt="Header Img" />Home</Nav.Link>

        
            <Nav.Link href="#projects" className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()}><img id='projects-nav' className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()} src={'/coding.png'} alt="Header Img" />Projects</Nav.Link>


            <Nav.Link href="#skills" className= {activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()}><img id='skills-nav' className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> scroll()} src={'/competence.png'} alt="Header Img" />Skills</Nav.Link>


          </Nav>
          <span className = "navbar-text">
            <div className = "social-icon">
              <a href="https://www.linkedin.com/" ><img src={'/linkedin.svg'} alt="linked-in" /></a>
              <a href="https://www.github.com/"><img src={'/github.svg'} alt="github" /></a>
            </div>

            <HashLink to="#connect">
            <button className ="social-button" onClick={() => console.log("clicked")}><span>Get in Touch</span></button>
            </HashLink>

            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )
}