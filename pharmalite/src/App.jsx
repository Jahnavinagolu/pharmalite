import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Checkout from './pages/Checkout';
import './animations.css';

function App() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <Chatbot />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer style={{
        background: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(10px)',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginTop: '4rem',
        borderTop: '1px solid rgba(255,255,255,0.6)'
      }}>
        <div className="container">
          <p style={{ color: 'hsl(var(--text-muted))' }}>© 2024 PharmaLite. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

