import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { FaFacebook, FaLinkedin, FaTwitter, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import './Asgard.css'

import asgard1 from '../../assets/asgard1.png'
import asgard2 from '../../assets/asgard2.png'
import asgard3 from '../../assets/asgard3.png'
import asgard4 from '../../assets/asgard4.png'
import asgard5 from '../../assets/asgard5.png'

const Asgard = () => {
  const images = [asgard1, asgard2, asgard3, asgard4, asgard5]
  const [mainImage, setMainImage] = useState(asgard1)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('L')
  const [selectedColor, setSelectedColor] = useState('purple')

  return (
    <div className="asgard-page">
      {/* Breadcrumb */}
      <div className="asgard-breadcrumb">
        <div className="breadcrumb-content">
          <NavLink to="/">Home</NavLink>
          <IoChevronForwardOutline className="icon" />
          <NavLink to="/shop">Shop</NavLink>
          <IoChevronForwardOutline className="icon" />
          <span className="divider">|</span>
          <span className="current">Asgaard sofa</span>
        </div>
      </div>

      <div className="asgard-container">
        {/* Left: Images */}
        <div className="asgard-images">
          <div className="thumbnails">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-image-container">
            <img src={mainImage} alt="Asgaard sofa" className="main-image" />
          </div>
        </div>

        {/* Right: Info */}
        <div className="asgard-info">
          <h1 className="title">Asgaard sofa</h1>
          <p className="price">Rs. 250,000.00</p>
          
          <div className="reviews">
            <div className="stars">
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStarHalfAlt className="star-icon" />
            </div>
            <span className="divider">|</span>
            <span className="review-count">5 Customer Review</span>
          </div>
          
          <p className="description">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced
            audio which boasts a clear midrange and extended highs for a
            sound.
          </p>

          <div className="options">
            <div className="size-option">
              <p>Size</p>
              <div className="sizes">
                {['L', 'XL', 'XS'].map(size => (
                  <button 
                    key={size} 
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-option">
              <p>Color</p>
              <div className="colors">
                {[{name: 'purple', hex: '#816DFA'}, {name: 'black', hex: '#000000'}, {name: 'gold', hex: '#B88E2F'}].map(color => (
                  <button 
                    key={color.name}
                    className={`color-btn ${selectedColor === color.name ? 'active' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="actions">
            <div className="quantity">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button className="add-cart-btn">Add To Cart</button>
            <button className="compare-btn">+ Compare</button>
          </div>

          <div className="meta">
            <div className="meta-item">
              <span className="meta-label">SKU</span>
              <span className="meta-colon">:</span>
              <span className="meta-value">SS001</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-colon">:</span>
              <span className="meta-value">Sofas</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Tags</span>
              <span className="meta-colon">:</span>
              <span className="meta-value">Sofa, Chair, Home, Shop</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Share</span>
              <span className="meta-colon">:</span>
              <div className="social-icons">
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Asgard