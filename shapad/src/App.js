import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import StartAproject from './Components/StartAproject';
import Nolly from './Components/NollyCineTv';
import ScrollToTop from './Components/ScrollToTop';
import { preloadImages } from './ultis/preLoadImages'; // Import the utility function
import { useEffect } from 'react';
import Cup from './assets/CUP.webp';
import cap from './assets/cap.webp';
import Hat from './assets/White hat.webp';
import Polo from './assets/POLO 2.webp';
import Leather from './assets/leather logo.webp';
import Black from './assets/black.webp';
import letterhead from './assets/letterhead-1.webp';
import typo from './assets/typo.webp';
import youtube from './assets/youtube banner 2.webp';
import billboard from './assets/Billboard.webp'
import usage from './assets/usage (1).webp'
import mock from './assets/MOCKUP EDIT 1.webp';
import flash from './assets/FLASH DRIVE.webp'
import car from './assets/CAR MOCK.webp';
import instagram from './assets/Instagram Mockup 2021.webp'
import Corporate from './assets/hero.webp';
function App() {
  useEffect(() => {
    // Preload images for the NollyCineTv component
    const nollyImages = [Cup, cap, Hat, Polo, Leather, Black, letterhead,
      typo, youtube, billboard, usage, mock, flash, car, instagram, Corporate]

    preloadImages(nollyImages);
  }, []); // Runs only once when the app loads
  return (

    <Router>
      {/* Navbar is placed outside Routes to make it visible on all pages */}
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start-a-project" element={<StartAproject />} />
        <Route path="/nolly-cine-tv" element={<Nolly />} />
      </Routes>
    </Router>
  );
}

export default App;
