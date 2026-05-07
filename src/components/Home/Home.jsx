import React from 'react'
import './Home.css'
import { products , funiro} from "./data.js"
import card1 from "../../assets/m-card1.png"
import card2 from "../../assets/m-card2.png"
import card3 from "../../assets/m-card3.png"
import b1 from "../../assets/b1.png"
import b2 from "../../assets/b2.png"



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


      <section className="inspiration-section">
  <div className="container">
    <div className="content-wrapper">

      {/* Left Text */}
      <div className="text-content">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
        <button className="explore-btn">Explore More</button>
      </div>

      {/* Main Big Image */}
      <div className="main-image">
        <img 
          src={b1} 
          alt="Inner Peace Bedroom" 
        />
        <div className="image-overlay">
          <p className="room-number">01 — Bed Room</p>
          <h3 className="room-title">Inner Peace</h3>
          <button className="arrow-btn">→</button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="side-image">
        <img 
          src={b2} 
          alt="Dining Room" 
        />
        <button className="side-arrow">→</button>
      </div>

    </div>

    {/* Navigation Dots */}
    <div className="dots">
      <span className="dot active"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  </div>
</section>

<section className="funiro">
  <p>Share your setup with</p>
  <h1>#FuniroFurniture</h1>
  <div className="funiro-imgs">


    <div className="funiro1">
         <div className="f1">
            <img src={funiro[0].image} alt="Funiro 1" />
         </div>
         <div className="f2">
            <img src={funiro[1].image} alt="Funiro 2" />
          </div>
    </div>


    <div className="f3">
      <img src={funiro[2].image} alt="Funiro 3" />
    </div>

  <div className="funiro2">
    <div className="f4">
      <img src={funiro[3].image} alt="Funiro 4" />
    </div>
    <div className="f5">
      <img src={funiro[4].image} alt="Funiro 5" />
    </div>
  </div>
    
  <div className="funiro3">
    <div className="f6">
      <img src={funiro[5].image} alt="Funiro 6" />
    </div>
    <div className="f7">
      <img src={funiro[6].image} alt="Funiro 7" />
    </div>
  </div>
    
    <div className="funiro4">
      <div className="f8">
      <img src={funiro[7].image} alt="Funiro 8" />
    </div>
    <div className="f9">
      <img src={funiro[8].image} alt="Funiro 9" />
    </div>
    </div>
    
  </div>
</section>
      
    </div>
  )
}

export default Home