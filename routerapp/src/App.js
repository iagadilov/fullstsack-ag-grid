import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation with Link components */}
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        {/* Routing table */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
