import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { render } from "react-dom";
import App from "./App";
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Approach from './pages/Approach/Approach'
import Career from './pages/Career/Career';
import Primo from './pages/Primo/Primo';
import Transguard from './pages/Transguard/Transguard';
import Firstep from './pages/Firstep/Firstep';
import Work from './pages/Work/Work';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} /> 
      <Route path="contact" element={<Contact />} /> 
      <Route path="approach" element={<Approach />} /> 
      <Route path="career" element={<Career />} /> 
      <Route path="work" element={<Work />} /> 

      <Route path="primo" element={<Primo />} /> 
      <Route path="transguard" element={<Transguard />} /> 
      <Route path="firstep" element={<Firstep />} /> 


      <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's no such page here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>

, rootElement);


reportWebVitals();
