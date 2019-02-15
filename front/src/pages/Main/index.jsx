import React from 'react';
import Box from '../../components/Box';
import Opportunities from '../../components/Opportunities';
import Questions from '../../components/Questions';
import Publication from '../../components/Publication';

const Main = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '30%', paddingRight: 24 }}>
      <Box title="Perguntas e Respostas">
        {[...Array(20).keys()].map(i => (
          <Opportunities key={i} />
        ))}
      </Box>
    </div>
    <div style={{ width: '40%', paddingRight: 24 }}>
      <Box title="Publicações">
        {[...Array(20).keys()].map(i => (
          <Publication key={i} />
        ))}
      </Box>
    </div>
    <div style={{ width: '30%' }}>
      <Box title="Oportunidades" style={{ width: '30%' }}>
        {[...Array(20).keys()].map(i => (
          <Questions key={i} />
        ))}
      </Box>
    </div>
  </div>
);

export default Main;
