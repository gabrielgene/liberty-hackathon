import React from 'react';
import image from '../../assets/landing.png';

const Landing = () => (
  <React.Fragment>
    <img style={{ width: '100%' }} src={image} />
    <map name="imgmap">
      <area
        shape="rect"
        coords="48,341,294,275"
        href="http://www.example.com/"
      />
    </map>
  </React.Fragment>
);

export default Landing;
