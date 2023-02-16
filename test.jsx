

<div className="App">
      <ScrollToTop />
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(skills)} className="skills">
            Skills
          </li>
        </ul>
      </div>
      <div ref={skills} className="services">
        <h3>Skills</h3>
      </div>
    </div>