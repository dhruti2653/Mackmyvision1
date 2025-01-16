import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage'; // Correct path to Aboutus component
import Services from './pages/Services';
import Blogpage from './pages/Blogpage';
import Contactpage from './pages/Contactpage';
import Support from './component/Support';
import MouseEffect from './component/Mouseeffect';
import AOS from "aos";
import "aos/dist/aos.css";

// Home Component with About Section
// const Home = () => (
//   <div>
    
//     <Slider />
//     <Abouts />
//     <About /> {/* Include About Section in the Home Page */}
//     <Process />
//    <Service />
//     <Whymmv />
//   </div>
// );




const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS dynamically
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Router>
      <MouseEffect />
      <Navbar />
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page with About Section */}
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogpage" element={<Blogpage />} />
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path='/support' element={<Support />} />

          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
