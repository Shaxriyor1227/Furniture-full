import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Asgard from './components/Asgard/Asgard'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/asgard" element={<Asgard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App