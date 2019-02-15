import React from 'react';
import Box from '../../components/Box';
import Opportunities from '../../components/Opportunities';

const Main = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '30%' }}>
      <Box title="Q&E">
        <Opportunities />
        <Opportunities />
        <Opportunities />
        <Opportunities />
        <Opportunities />
      </Box>
    </div>
    <div style={{ width: '30%' }}>
      <Box title="Oportunidades" style={{ width: '30%' }}>
        <Opportunities />
        <Opportunities />
        <Opportunities />
        <Opportunities />
        <Opportunities />
      </Box>
    </div>
    <div style={{ width: '40%' }}>
      <Box title="Feed">
        <Opportunities />
        <Opportunities />
        <Opportunities />
        <Opportunities />
        <Opportunities />
      </Box>
    </div>
  </div>
);

export default Main;
