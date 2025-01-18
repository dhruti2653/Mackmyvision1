import React from "react";
import About from "../component/About";
// import Abouts from '../component/Abouts';
import Whymmv from "../component/Whymmv";
import AboutUs from "../component/Aboutus";
import MeetFounders from "../component/Meetfounder";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <AboutUs />
      {/* <Abouts /> Test rendering Abouts */}
      <MeetFounders />
      <About /> {/* Test rendering About */}
      <Whymmv /> {/* Test rendering Whymmv */}
    </div>
  );
};

export default AboutPage;
