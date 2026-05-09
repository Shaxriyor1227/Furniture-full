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

import divan from '../../assets/divan.png'
import divan2 from '../../assets/divan2.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'

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

      {/* Description & Details Section */}
      <div className="asgard-description-section">
        <div className="tabs">
          <h3 className="active">Description</h3>
          <h3>Additional Information</h3>
          <h3>Reviews [5]</h3>
        </div>
        <div className="tab-content">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
        <div className="description-images">
          <img src={divan} alt="Sofa details 1" />
          <img src={divan2} alt="Sofa details 2" />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          <div className="product-card">
            <img src={card1} alt="Syltherine" />
            <div className="product-info">
              <h4>Syltherine</h4>
              <p>Stylish cafe chair</p>
              <h5>Rp 2.500.000 <span className="old-price">Rp 3.500.000</span></h5>
            </div>
            <div className="badge discount">-30%</div>
          </div>
          <div className="product-card">
            <img src={card2} alt="Leviosa" />
            <div className="product-info">
              <h4>Leviosa</h4>
              <p>Stylish cafe chair</p>
              <h5>Rp 2.500.000</h5>
            </div>
          </div>
          <div className="product-card">
            <img src={card3} alt="Lolito" />
            <div className="product-info">
              <h4>Lolito</h4>
              <p>Luxury big sofa</p>
              <h5>Rp 7.000.000 <span className="old-price">Rp 14.000.000</span></h5>
            </div>
            <div className="badge discount">-50%</div>
          </div>
          <div className="product-card">
            <img src={card4} alt="Respira" />
            <div className="product-info">
              <h4>Respira</h4>
              <p>Outdoor bar table and stool</p>
              <h5>Rp 500.000</h5>
            </div>
            <div className="badge new">New</div>
          </div>
        </div>
        <button className="show-more-btn">Show More</button>
      </div>

    </div>
  )
}

export default Asgard