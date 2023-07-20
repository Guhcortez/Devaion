import React from 'react';
import './index.css';
import './index.scss';
import logoBBC from '../src/assets/logo-bbc.png';
import logoForbes from '../src/assets/logo-forbes.png';
import logoTech from '../src/assets/logo-techcrunch.png';
import logoBI from '../src/assets/logo-bi.png';
import realtor1 from '../src/assets/realtor-1.jpeg';
import realtor2 from '../src/assets/realtor-2.jpeg';
import realtor3 from '../src/assets/realtor-3.jpeg';
import logo from '../src/assets/logo.png';
import sprite from '../src/assets/sprite.svg';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>

      <header className="header">
        <img src={logo} alt="Logo" className="header__logo" />
        <h3 className="heading-3">Your own website:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our projects</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img src={logoBBC} alt="BBC Logo" />
          <img src={logoForbes} alt="Forbes Logo" />
          <img src={logoTech} alt="Techcrunch Logo" />
          <img src={logoBI} alt="BI Logo" />
        </div>
      </header>

      <div className="realtors">
        <h3 className="heading-3">Our Professionals</h3>
        <div className="realtors__list">
        <img src={realtor1} alt="Realtor 1" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Nafravia</h4>
            <p className="realtors__sold">Design</p>
          </div>

          <img src={realtor2} alt="Realtor 2" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Dogonaldo</h4>
            <p className="realtors__sold">Fullstack Dev</p>
          </div>

          <img src={realtor3} alt="Realtor 3" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Gutabaldo</h4>
            <p className="realtors__sold">Frontend Dev</p>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="feature">
        <svg className="feature__icon">
        <use xlinkHref={`${sprite}#icon-global`} />
        </svg>
          <h4 className="heading-4 heading-4--dark">Devaion</h4>
          <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>

        {/* Rest of the features */}

      </section>

      {/* Rest of the HTML code */}

      <footer className="footer">
        <ul className="nav">
          <li className="nav__item"><a href="#" className="nav__link">A</a></li>
          <li className="nav__item"><a href="#" className="nav__link">B</a></li>
          <li className="nav__item"><a href="#" className="nav__link">C</a></li>
          <li className="nav__item"><a href="#" className="nav__link">D</a></li>
          <li className="nav__item"><a href="#" className="nav__link">E</a></li>
          <li className="nav__item"><a href="#" className="nav__link">F</a></li>
        </ul>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Devaion. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
