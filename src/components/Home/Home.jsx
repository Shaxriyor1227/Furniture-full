import React from 'react'
import './Home.css'
import { products } from "./data.js"
import card1 from "../../assets/m-card1.png"
import card2 from "../../assets/m-card2.png"
import card3 from "../../assets/m-card3.png"


const Home = () => {





  return (
    <div>
      <main>
         <div className="home-card">
           <h4>New Arrival</h4>
           <h1>Discover Our <br /> New Collection</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />elit tellus, luctus nec ullamcorper mattis.</p>
           <button>BUY NOW</button>
        </div>
      </main>

      <section className="browse">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="browse-card">
          <div className="flex">
            <div className="images">
              <img src={card1} alt="Card 1" />
              <h2>Dining</h2>
            </div>
            <div className="images">
              <img src={card2} alt="Card 2" />
              <h2>Living</h2>
            </div>
            <div className="images">
              <img src={card3} alt="Card 3" />
              <h2>Bedroom</h2>
            </div>
          </div>
        </div>
      </section>


      <section className="products">
        <h1>Our Products</h1>
        <div className="products-grid">
          {
            products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.discount && <span className="discount-badge">-{product.discount}%</span>}
                {product.isNew && <span className="new-badge">New</span>}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">Rp {product.price.toLocaleString('id-ID')}</p>
              </div>
            </div>
            ))
          }
        </div>
        <button>Show More</button>
      </section>
      
    </div>
  )
}

export default Home