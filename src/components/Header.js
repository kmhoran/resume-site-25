import React from "react";
import { NavLink } from "react-router";
import { VscRocket } from "react-icons/vsc";

const Header = () => {
  return (
    <header>
      <VscRocket className="header-icon" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bio">Bio</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="cta">
        <NavLink to="/contact">
          <button>Contact</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
