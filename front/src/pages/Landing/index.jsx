import React from 'react';
import image from '../../assets/landing.png';

const Landing = () => (
  <div className="landing-wrapper">
    <img style={{ width: '100%' }} src={image} alt=""/>
    <a href="https://www.youtube.com" style={{
      height: '100%',
      width: '26%',
      position: 'absolute',
      top: 0,
      left: 0
    }}> </a>
    <a href="https://www.google.com" style={{
      height: '100%',
      width: '74%',
      position: 'absolute',
      top: 0,
      right: 0
    }}> </a>
  </div>
);

export default Landing;
