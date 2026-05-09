import React, { useState } from 'react'
import './Shop.css'
import shopMain from '../../assets/shopMain.png'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { BsSliders, BsGrid3X3GapFill } from 'react-icons/bs'
import { HiViewList } from 'react-icons/hi'
import { FiShare2 } from 'react-icons/fi'
import { MdCompareArrows } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import Quality from '../Quality/Quality'

const allProducts = [
  { id: 1,  name: 'Syltherine', category: 'Stylish cafe chair',           price: 2500000, oldPrice: 3500000,  discount: 30,  isNew: false, image: card1 },
  { id: 2,  name: 'Leviosa',    category: 'Stylish cafe chair',           price: 2500000, oldPrice: null,     discount: null,isNew: false, image: card2 },
  { id: 3,  name: 'Lolito',     category: 'Luxury big sofa',             price: 7000000, oldPrice: 14000000, discount: 50,  isNew: false, image: card3 },
  { id: 4,  name: 'Respira',    category: 'Outdoor bar table and stool', price: 500000,  oldPrice: null,     discount: null,isNew: true,  image: card4 },
  { id: 5,  name: 'Grifo',      category: 'Night lamp',                  price: 1500000, oldPrice: null,     discount: null,isNew: false, image: card1 },
  { id: 6,  name: 'Muggo',      category: 'Small mug',                   price: 150000,  oldPrice: null,     discount: null,isNew: true,  image: card2 },
  { id: 7,  name: 'Pingky',     category: 'Cute bed set',                price: 7000000, oldPrice: 14000000, discount: 50,  isNew: false, image: card3 },
  { id: 8,  name: 'Potty',      category: 'Minimalist flower pot',       price: 500000,  oldPrice: null,     discount: null,isNew: true,  image: card4 },
  { id: 9,  name: 'Syltherine', category: 'Stylish cafe chair',           price: 2500000, oldPrice: 3500000,  discount: 30,  isNew: false, image: card1 },
  { id: 10, name: 'Leviosa',    category: 'Stylish cafe chair',           price: 2500000, oldPrice: null,     discount: null,isNew: false, image: card2 },
  { id: 11, name: 'Lolito',     category: 'Luxury big sofa',             price: 7000000, oldPrice: 14000000, discount: 50,  isNew: false, image: card3 },
  { id: 12, name: 'Respira',    category: 'Outdoor bar table and stool', price: 500000,  oldPrice: null,     discount: null,isNew: true,  image: card4 },
  { id: 13, name: 'Grifo',      category: 'Night lamp',                  price: 1500000, oldPrice: null,     discount: null,isNew: false, image: card1 },
  { id: 14, name: 'Muggo',      category: 'Small mug',                   price: 150000,  oldPrice: null,     discount: null,isNew: true,  image: card2 },
  { id: 15, name: 'Pingky',     category: 'Cute bed set',                price: 7000000, oldPrice: 14000000, discount: 50,  isNew: false, image: card3 },
  { id: 16, name: 'Potty',      category: 'Minimalist flower pot',       price: 500000,  oldPrice: null,     discount: null,isNew: true,  image: card4 },
  { id: 17, name: 'Syltherine', category: 'Stylish cafe chair',           price: 2500000, oldPrice: 3500000,  discount: 30,  isNew: false, image: card1 },
  { id: 18, name: 'Leviosa',    category: 'Stylish cafe chair',           price: 2500000, oldPrice: null,     discount: null,isNew: false, image: card2 },
  { id: 19, name: 'Lolito',     category: 'Luxury big sofa',             price: 7000000, oldPrice: 14000000, discount: 50,  isNew: false, image: card3 },
  { id: 20, name: 'Respira',    category: 'Outdoor bar table and stool', price: 500000,  oldPrice: null,     discount: null,isNew: true,  image: card4 },
  { id: 21, name: 'Grifo',      category: 'Night lamp',                  price: 1500000, oldPrice: null,     discount: null,isNew: false, image: card1 },
  { id: 22, name: 'Muggo',      category: 'Small mug',                   price: 150000,  oldPrice: null,     discount: null,isNew: true,  image: card2 },
  { id: 23, name: 'Pingky',     category: 'Cute bed set',                price: 7000000, oldPrice: 14000000, discount: 50,  isNew: false, image: card3 },
  { id: 24, name: 'Potty',      category: 'Minimalist flower pot',       price: 500000,  oldPrice: null,     discount: null,isNew: true,  image: card4 },
]

const Shop = () => {
  const [showCount, setShowCount] = useState(16)
  const [sortBy, setSortBy]       = useState('Default')
  const [currentPage, setCurrentPage] = useState(1)

  const perPage   = parseInt(showCount)
  const totalPages = Math.ceil(allProducts.length / perPage)
  const start     = (currentPage - 1) * perPage
  const products  = allProducts.slice(start, start + perPage)

  const handleShowChange = (e) => {
    setShowCount(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="shop-page">

      {/* ── Hero Banner ── */}
      <div className="shop-hero" style={{ backgroundImage: `url(${shopMain})` }}>
        <div className="shop-hero-content">
          <h1 className="shop-hero-title">Shop</h1>
          <nav className="shop-breadcrumb">
            <NavLink to="/" className="breadcrumb-home">Home</NavLink>
            <IoChevronForwardOutline className="breadcrumb-icon" />
            <span className="breadcrumb-current">Shop</span>
          </nav>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="shop-filterbar">
        <div className="filterbar-left">
          <button className="filter-btn">
            <BsSliders className="filter-icon" />
            Filter
          </button>
          <div className="view-icons">
            <BsGrid3X3GapFill className="view-icon active-view" title="Grid view" />
            <HiViewList className="view-icon" title="List view" />
          </div>
          <div className="filterbar-divider" />
          <p className="results-text">
            Showing {start + 1}–{Math.min(start + perPage, allProducts.length)} of {allProducts.length} results
          </p>
        </div>
        <div className="filterbar-right">
          <label className="filter-label">Show</label>
          <select className="filter-select" value={showCount} onChange={handleShowChange}>
            {[8, 16, 24, 32].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <label className="filter-label">Short by</label>
          <select className="filter-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            {['Default', 'Price: Low to High', 'Price: High to Low', 'Newest'].map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="shop-products">
        <div className="shop-grid">
          {products.map(product => (
            <div key={product.id} className="shop-card">
              <NavLink to="/asgard" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div className="shop-card-img-wrap">
                  <img src={product.image} alt={product.name} className="shop-card-img" />

                  {product.discount && <span className="badge-discount">-{product.discount}%</span>}
                  {product.isNew    && <span className="badge-new">New</span>}

                  {/* Hover Overlay */}
                  <div className="shop-card-overlay">
                    <button className="add-to-cart-btn" onClick={(e) => e.preventDefault()}>Add to cart</button>
                    <div className="card-actions">
                      <span className="card-action" onClick={(e) => e.preventDefault()}><FiShare2 /> Share</span>
                      <span className="card-action" onClick={(e) => e.preventDefault()}><MdCompareArrows /> Compare</span>
                      <span className="card-action" onClick={(e) => e.preventDefault()}><FaRegHeart /> Like</span>
                    </div>
                  </div>
                </div>

                <div className="shop-card-info">
                  <h3 className="card-name">{product.name}</h3>
                  <p className="card-category">{product.category}</p>
                  <div className="card-prices">
                    <span className="card-price">Rp {product.price.toLocaleString('id-ID')}</span>
                    {product.oldPrice && (
                      <span className="card-old-price">Rp {product.oldPrice.toLocaleString('id-ID')}</span>
                    )}
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        {/* ── Pagination ── */}
        <div className="shop-pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`page-btn ${currentPage === page ? 'active-page' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button className="page-btn next-btn" onClick={() => setCurrentPage(p => p + 1)}>
              Next
            </button>
          )}
        </div>
      </section>

      <Quality />

    </div>
  )
}

export default Shop