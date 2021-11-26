import React from 'react';
import './Banner.css';
// import Zoom from 'react-reveal/Zoom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="banner mb-3">
      <div
        data-aos="fade-right"
        className="d-flex align-items-center justify-content-center"
        style={{ backgroundColor: '#06B6D4', height: '50%', width: '30%' }}
      >
        <h1 style={{ color: 'white', fontWeight: 'bold' }}>
          Find Your Best
          <br></br>Cars
        </h1>
      </div>
    </div>
  );
};

export default Banner;
