import React from 'react'
import "./Header.css"
import Logo from "../../assets/Logo.png"
import { NavLink } from 'react-router-dom'
import { FiUserCheck } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";





    const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>Furniro</h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="header-icons">
                <div className="icons"><FiUserCheck /></div>
                <div className="icons"><IoSearchOutline /></div>
                <div className="icons"><FaRegHeart /></div>
                <div className="icons"><MdOutlineShoppingCartCheckout /></div>
            </div>
            </header>
        </div>
    )
    }

    export default Header