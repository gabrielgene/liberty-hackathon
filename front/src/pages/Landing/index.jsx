import React from 'react';
import image from '../../assets/landing.png';

const Landing = () => (
  <div className="landing-wrapper">
    <img style={{ width: '100%' }} src={image} alt="" />
    <a
      href="/"
      style={{
        height: 153,
        width: 600,
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    >
      {' '}
    </a>
    <a
      href="/aprenda"
      style={{
        height: 153,
        width: 180,
        position: 'absolute',
        top: 0,
        right: 600,
      }}
    >
      {' '}
    </a>
    <a
      href="/"
      style={{
        height: 153,
        width: 180,
        position: 'absolute',
        top: 0,
        right: 780,
      }}
    >
      {' '}
    </a>
    <a
      href="/"
      style={{
        height: 800,
        width: '36%',
        position: 'absolute',
        top: 154,
        left: 0,
      }}
    >
      {' '}
    </a>
  </div>
);

export default Landing;
