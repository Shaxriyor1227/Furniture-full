import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import './Comparison.css'

import shopMain from '../../assets/shopMain.png'
import Logo from '../../assets/Logo.png'
import product from '../../assets/product.png'
import product2 from '../../assets/product2.png'
import SofaComparison from '../Sofacomparison/SofaComparison'
import Quality from '../Quality/Quality'

const Comparison = () => {
  return (
    <div className="comparison-page">
      {/* Hero Section */}
      <div className="comparison-hero">
        <img src={shopMain} alt="Shop Background" className="hero-bg" />
        <div className="hero-content">
          <img src={Logo} alt="Logo" className="hero-logo" />
          <h1>Product Comparison</h1>
          <div className="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <IoChevronForwardOutline className="icon" />
            <span>Comparison</span>
          </div>
        </div>
      </div>

      {/* Comparison Top Section */}
      <div className="comparison-top">
        <div className="go-to-product">
          <h2>Go to Product<br/>page for more<br/>Products</h2>
          <NavLink to="/shop" className="view-more-link">View More</NavLink>
        </div>
        
        <div className="product-card-compare">
          <div className="product-img-box">
            <img src={product} alt="Asgaard Sofa" />
          </div>
          <h3>Asgaard Sofa</h3>
          <p className="price">Rs. 250,000.00</p>
          <div className="rating">
            <span className="score">4.7</span>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="reviews">204 Review</span>
          </div>
        </div>

        <div className="product-card-compare">
          <div className="product-img-box">
            <img src={product2} alt="Outdoor Sofa Set" />
          </div>
          <h3>Outdoor Sofa Set</h3>
          <p className="price">Rs. 224,000.00</p>
          <div className="rating">
            <span className="score">4.2</span>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="reviews">145 Review</span>
          </div>
        </div>

        <div className="add-product">
          <h2>Add A Product</h2>
          <select className="choose-product-select">
            <option value="">Choose a Product</option>
            <option value="1">Asgaard Sofa</option>
            <option value="2">Outdoor Sofa Set</option>
          </select>
        </div>
      </div>

      {/* Comparison Table Section */}
      <SofaComparison />

      {/* Quality Section */}
      <Quality />
    </div>
  )
}

export default Comparison
