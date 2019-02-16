import React from 'react';
import image from '../../assets/landing.png';

const Landing = () => (
  <div className="landing-wrapper">
    <img style={{ width: '100%' }} src={image} alt=""/>
    <a href="/solicitar" style={{
      height: '100%',
      width: '26%',
      position: 'absolute',
      top: 0,
      left: 0
    }}> </a>
  </div>
);

export default Landing;
