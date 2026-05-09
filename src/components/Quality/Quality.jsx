import React from 'react'
import "./Quality.css"
import q1 from "../../assets/q1.png"
import q2 from "../../assets/q2.png"
import q3 from "../../assets/q3.png"
import q4 from "../../assets/q4.png"

const features = [
  { id: 1, icon: q1, title: "High Quality",        subtitle: "crafted from top materials" },
  { id: 2, icon: q2, title: "Warranty Protection", subtitle: "Over 2 years" },
  { id: 3, icon: q3, title: "Free Shipping",        subtitle: "Order over 150 $" },
  { id: 4, icon: q4, title: "24 / 7 Support",       subtitle: "Dedicated support" },
]

const Quality = () => {
  return (
    <section className="quality-section">
      {features.map((item) => (
        <div key={item.id} className="quality-item">
          <img src={item.icon} alt={item.title} className="quality-icon" />
          <div className="quality-text">
            <h3 className="quality-title">{item.title}</h3>
            <p className="quality-subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Quality
