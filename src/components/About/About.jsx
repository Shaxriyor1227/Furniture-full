import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronForwardOutline } from 'react-icons/io5'
import './About.css'

import shopMain from '../../assets/shopMain.png'
import Logo from '../../assets/Logo.png'
import Quality from '../Quality/Quality'

const About = () => {
  const [paymentMethod, setPaymentMethod] = useState('direct');

  return (
    <div className="checkout-page">
      {/* Hero Section */}
      <div className="checkout-hero">
        <img src={shopMain} alt="Shop Background" className="hero-bg" />
        <div className="hero-content">
          <img src={Logo} alt="Logo" className="hero-logo" />
          <h1>Checkout</h1>
          <div className="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <IoChevronForwardOutline className="icon" />
            <span>Checkout</span>
          </div>
        </div>
      </div>

      {/* Main Checkout Content */}
      <div className="checkout-container">
        {/* Billing Details Form */}
        <div className="billing-details">
          <h2>Billing details</h2>
          <form>
            <div className="form-row">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="input-group">
              <label>Company Name (Optional)</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Country / Region</label>
              <select>
                <option>Sri Lanka</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <div className="input-group">
              <label>Street address</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Town / City</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Province</label>
              <select>
                <option>Western Province</option>
                <option>Central Province</option>
                <option>Southern Province</option>
              </select>
            </div>

            <div className="input-group">
              <label>ZIP code</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Email address</label>
              <input type="email" />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Additional information" className="additional-info" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="summary-table">
            <div className="summary-header">
              <h3>Product</h3>
              <h3>Subtotal</h3>
            </div>
            <div className="summary-item">
              <span>Asgaard sofa <span className="multiplier">x 1</span></span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="summary-subtotal">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span className="total-price">Rs. 250,000.00</span>
            </div>
          </div>

          <div className="payment-methods">
            <div className="payment-option">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="payment" 
                  value="direct"
                  checked={paymentMethod === 'direct'}
                  onChange={() => setPaymentMethod('direct')}
                />
                <span className={`radio-custom ${paymentMethod === 'direct' ? 'active' : ''}`}></span>
                Direct Bank Transfer
              </label>
              {paymentMethod === 'direct' && (
                <p className="payment-description">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              )}
            </div>

            <div className="payment-option">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="payment" 
                  value="check"
                  checked={paymentMethod === 'check'}
                  onChange={() => setPaymentMethod('check')}
                />
                <span className={`radio-custom ${paymentMethod === 'check' ? 'active' : ''}`}></span>
                Direct Bank Transfer
              </label>
            </div>

            <div className="payment-option">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="payment" 
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
                <span className={`radio-custom ${paymentMethod === 'cash' ? 'active' : ''}`}></span>
                Cash On Delivery
              </label>
            </div>

            <p className="privacy-policy">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.
            </p>

            <button className="place-order-btn">Place order</button>
          </div>
        </div>
      </div>
      
      <Quality />
    </div>
  )
}

export default About