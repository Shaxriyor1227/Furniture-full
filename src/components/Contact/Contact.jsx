import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'
import './Contact.css'

import shopMain from '../../assets/shopMain.png'
import Logo from '../../assets/Logo.png'
import Quality from '../Quality/Quality'

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <img src={shopMain} alt="Shop Background" className="hero-bg" />
        <div className="hero-content">
          <img src={Logo} alt="Logo" className="hero-logo" />
          <h1>Contact</h1>
          <div className="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <IoChevronForwardOutline className="icon" />
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-container">
        <div className="contact-header-text">
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Product & Services. Please Feel Free To Drop Us<br/>
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="contact-body">
          {/* Info Section */}
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-text">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New<br/>York NY10000, United<br/>States</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div className="info-text">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="info-icon" />
              <div className="info-text">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 -<br/>22:00<br/>Saturday-Sunday: 9:00 -<br/>21:00</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Your name</label>
                <input type="text" placeholder="Abc" />
              </div>
              
              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Abc@def.com" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="This is an optional" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Hi! i'd like to ask about"></textarea>
              </div>

              <button type="button" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Quality />
    </div>
  )
}

export default Contact