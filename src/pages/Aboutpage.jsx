import React from 'react';
import About from '../component/About';
import Abouts from '../component/Abouts';
import Whymmv from '../component/Whymmv';
import AboutUs from '../component/Aboutus';
// import FounderCard from '../component/FounderCard';


const AboutPage = () => {
    return (
      <div>
        <AboutUs />
        {/* <FounderCard /> */}
        <Abouts /> {/* Test rendering Abouts */}
        <About /> {/* Test rendering About */}
        <Whymmv /> {/* Test rendering Whymmv */}
      </div>
    );
  };
  
export default AboutPage;
