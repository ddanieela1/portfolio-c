import {useState,useEffect} from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState('false');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
  
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    }, [])


    const onUpdateActiveLink = (value) =>{
      setActiveLink(value);
    }


    return (
      <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src = {'/headerImg.svg'} alt = 'logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className= {activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>


            <Nav.Link href="#projects" className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>


            <Nav.Link href="#skills" className= {activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
          </Nav>
          <span className = "navbar-text">
            <div className = "social-icon">
              <a href="#linked-in"><img src={'/linkedin.svg'} alt="linked-in" /></a>
              <a href="#github"><img src={'/github.svg'} alt="github" /></a>
            </div>
            <HashLink to="#connect">
            <button className ="social-button" onClick={() => console.log("clicked")}><span>Let's Connect</span></button>
            </HashLink>

            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )
}