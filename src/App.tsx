import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import FatCalculatorSection from './pages/FatCalculator';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fat-calculator" element={<FatCalculatorSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
