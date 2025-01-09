import React from 'react';
import About from '../component/About';
// import Abouts from '../component/Abouts';
import Whymmv from '../component/Whymmv';
import AboutUs from '../component/Aboutus';
import MeetFounders from '../component/Meetfounder';
import ScrollButton from '../component/Scrollbutton';


const AboutPage = () => {
    return (
      <div>
        <AboutUs />
        {/* <Abouts /> Test rendering Abouts */}
        <MeetFounders />
        <About /> {/* Test rendering About */}
        <Whymmv /> {/* Test rendering Whymmv */}
        <ScrollButton />
      </div>
    );
  };
  
export default AboutPage;
