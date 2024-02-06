import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navibar } from './components/navibar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Python } from './pages/python.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navibar />} />
        <Route path="pages/python" element={<Python />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
