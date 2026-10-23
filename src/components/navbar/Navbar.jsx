import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaGraduationCap, FaHouse, FaUser, FaUserPlus, FaXmark } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="students-navbar">
            <NavLink to="/" className="students-navbar-brand" onClick={closeMenu}>
                <span className="students-navbar-mark"><FaGraduationCap /></span>
                <span>Student Desk</span>
            </NavLink>

            <button
                className="students-navbar-toggle"
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                {menuOpen ? <FaXmark /> : <FaBars />}
            </button>

            <nav
                className={`students-navbar-links${menuOpen ? " is-open" : ""}`}
                aria-label="Main navigation"
            >
                <NavLink to="/" end onClick={closeMenu}>
                    <FaHouse aria-hidden="true" />
                    <span>Students</span>
                </NavLink>
                <NavLink to="/login" onClick={closeMenu}>
                    <FaUser aria-hidden="true" />
                    <span>Login</span>
                </NavLink>
                <NavLink to="/signup" className="students-navbar-signup" onClick={closeMenu}>
                    <FaUserPlus aria-hidden="true" />
                    <span>Sign up</span>
                </NavLink>
            </nav>
        </header>
    );
}

export default Navbar;