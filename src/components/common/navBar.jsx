import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <button
                            className={`hamburger ${isOpen ? "open" : ""}`}
                            onClick={toggleMenu}
                            aria-label="Toggle navigation menu"
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="/" onClick={closeMenu}>Home</Link>
                            </li>
                            <li className={active === "about" ? "nav-item active" : "nav-item"}>
                                <Link to="/about" onClick={closeMenu}>About</Link>
                            </li>
                            <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                                <Link to="/projects" onClick={closeMenu}>Projects</Link>
                            </li>
                            <li className={active === "docs" ? "nav-item active" : "nav-item"}>
                                <Link to="/docs" onClick={closeMenu}>Docs</Link>
                            </li>
                            <li className={active === "contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/contact" onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
