import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Navbar from './components/landings/Navbar';
import Hero from './components/landings/Hero';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero/>
  </StrictMode>,
)
