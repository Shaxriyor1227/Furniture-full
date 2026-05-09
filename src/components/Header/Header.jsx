import React, { useState } from 'react'
import "./Header.css"
import Logo from "../../assets/Logo.png"
import { NavLink } from 'react-router-dom'
import { FiUserCheck } from "react-icons/fi"
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import { RiMenu3Line } from "react-icons/ri"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <>
            <header>
                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h1>Furniro</h1>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul>
                        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                    </ul>
                </nav>

                {/* Icons + Hamburger */}
                <div className="header-right">
                    <div className="header-icons">
                        <div className="icons"><FiUserCheck /></div>
                        <div className="icons"><IoSearchOutline /></div>
                        <div className="icons"><FaRegHeart /></div>
                        <div className="icons"><MdOutlineShoppingCartCheckout /></div>
                    </div>
                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen
                            ? <IoCloseOutline className="hamburger-icon" />
                            : <RiMenu3Line className="hamburger-icon" />
                        }
                    </button>
                </div>
            </header>

            {/* Mobile Nav Drawer */}
            <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
                    <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>
            </div>

            {/* Overlay */}
            {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
        </>
    )
}

export default Header