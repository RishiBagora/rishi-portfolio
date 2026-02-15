import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { initSmoothScroll } from "./utils/SmoothScroll.js";

initSmoothScroll();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
