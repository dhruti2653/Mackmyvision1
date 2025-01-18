import React from 'react';
// import Service from '../component/Service';
import Technology from '../component/Technology';
import Servicess from '../component/Servicess';
import ResponsiveSection from '../component/Servicedetail';
// import HistorySection from '../component/History';

const Services = () => {
  return (
    <div className='w-full overflow-hidden'>
      {/* <Service /> */}
    {/* <HistorySection /> */}
    <ResponsiveSection />
      <Servicess />
      <Technology />
    </div>
  )
}

export default Services;
