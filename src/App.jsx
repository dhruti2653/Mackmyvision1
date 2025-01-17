import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage"; // Correct path to Aboutus component
import Services from "./pages/Services";
import Contactpage from "./pages/Contactpage";
import Support from "./component/Support";
import MouseEffect from "./component/Mouseeffect";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./component/Scrolltop";
import ScrollButton from "./component/Scrollbutton";

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
      <ScrollToTop />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Home Page with About Section */}
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path="/support" element={<Support />} />
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
        <ScrollButton />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
