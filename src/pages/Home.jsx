import React from 'react'
import Slider from '../component/Slider';
import Aboutus from '../component/Aboutus';
import Process from '../component/Process';
import Service from '../component/Service';
import Whymmv from '../component/Whymmv';
import Technology from '../component/Technology';
import Testimonial from '../component/Testimonial';

const Home = () => {
  return (
    <div className=' w-full overflow-hidden'>
      <Slider />
      <Aboutus />
      
      <Process />
      <Service />  
      <Technology />
      <Whymmv />
      <Testimonial />
    </div>
  )
}

export default Home;
