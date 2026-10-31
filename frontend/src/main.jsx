import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Navbar from './components/landings/Navbar';
import Hero from './components/landings/Hero';
import Features from './components/landings/Features';
import Stats from './components/landings/Stats';
import HowItWorks from './components/landings/HowItWorks';
import Signup from './components/landings/Signup';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero/>
    <Features />
    <Stats />
    <HowItWorks />
    <Signup />
  </StrictMode>,
)
