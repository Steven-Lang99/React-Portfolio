import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer'
import About from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Navigation from './pages/Navigation/Navigation';
import Portfolio from './pages/Portfolio/Portfolio';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/Navigation" element={<Navigation />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
