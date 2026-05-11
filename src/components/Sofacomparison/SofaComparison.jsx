import React from 'react'
import './SofaComparison.css'

const SofaComparison = () => {
  return (
    <div className="comparison-table-section">
      <div className="comparison-container">
        {/* General Section */}
        <div className="comparison-row main-category">
          <div className="feature-col">
            <h3>General</h3>
          </div>
          <div className="product-col"></div>
          <div className="product-col"></div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Sales Package</div>
          <div className="product-col">1 sectional sofa</div>
          <div className="product-col">1 Three Seater, 2 Single Seater</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Model Number</div>
          <div className="product-col">TFCBL0R0BBRBHS</div>
          <div className="product-col">DTUBL0R0BBRBHS</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Secondary Material</div>
          <div className="product-col">Solid Wood</div>
          <div className="product-col">Solid Wood</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Configuration</div>
          <div className="product-col">L-shaped</div>
          <div className="product-col">L-shaped</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Upholstery Material</div>
          <div className="product-col">Fabric + Cotton</div>
          <div className="product-col">Fabric + Cotton</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Upholstery Color</div>
          <div className="product-col">Bright Grey & Lion</div>
          <div className="product-col">Bright Grey & Lion</div>
        </div>

        {/* Product Section */}
        <div className="comparison-row main-category">
          <div className="feature-col">
            <h3>Product</h3>
          </div>
          <div className="product-col"></div>
          <div className="product-col"></div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Filling Material</div>
          <div className="product-col">Foam</div>
          <div className="product-col">Matte</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Finish Type</div>
          <div className="product-col">Bright Grey & Lion</div>
          <div className="product-col">Bright Grey & Lion</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Adjustable Headrest</div>
          <div className="product-col">No</div>
          <div className="product-col">Yes</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Maximum Load Capacity</div>
          <div className="product-col">280 KG</div>
          <div className="product-col">300 KG</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Origin of Manufacture</div>
          <div className="product-col">India</div>
          <div className="product-col">India</div>
        </div>

        {/* Dimensions Section */}
        <div className="comparison-row main-category">
          <div className="feature-col">
            <h3>Dimensions</h3>
          </div>
          <div className="product-col"></div>
          <div className="product-col"></div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Width</div>
          <div className="product-col">265.32 cm</div>
          <div className="product-col">265.32 cm</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Height</div>
          <div className="product-col">76 cm</div>
          <div className="product-col">76 cm</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Depth</div>
          <div className="product-col">167.76 cm</div>
          <div className="product-col">167.76 cm</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Weight</div>
          <div className="product-col">45 KG</div>
          <div className="product-col">65 KG</div>
        </div>

        {/* Warranty Section */}
        <div className="comparison-row main-category">
          <div className="feature-col">
            <h3>Warranty</h3>
          </div>
          <div className="product-col"></div>
          <div className="product-col"></div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Warranty Summary</div>
          <div className="product-col">1 Year Manufacturing Warranty</div>
          <div className="product-col">1.2 Year Manufacturing Warranty</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Warranty Service Type</div>
          <div className="product-col">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
          <div className="product-col">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Covered in Warranty</div>
          <div className="product-col">Warranty Against Manufacturing Defects</div>
          <div className="product-col">Warranty of the Product is Limited to Manufacturing Defects Only.</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Not Covered in Warranty</div>
          <div className="product-col">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
          <div className="product-col">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
        </div>
        <div className="comparison-row">
          <div className="feature-col">Domestic Warranty</div>
          <div className="product-col">1 Year</div>
          <div className="product-col">3 Months</div>
        </div>

        <div className="comparison-row actions">
          <div className="feature-col"></div>
          <div className="product-col">
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
          <div className="product-col">
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SofaComparison
