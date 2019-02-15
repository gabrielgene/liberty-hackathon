import React from 'react';
import Publication from '../../components/Publication';
import Box from '../../components/Box';
import Questions from '../../components/Questions';
import ContactButton from '../../components/ContactButton';

import { news } from './assets/news';
import { questions } from '../../mock/index.js';

const Main = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '50%', paddingRight: 24 }}>
      <Box title="Publicações">
        {news.map((item, index) => (
          <Publication key={index} {...item} />
        ))}
      </Box>
    </div>
    <div style={{ width: '50%', paddingRight: 24 }}>
      <Box title="Perguntas e Respostas">
        {questions.map((item, i) => (
          <Questions key={i} {...item} />
        ))}
      </Box>
    </div>
    <ContactButton onPress={() => console.log('Begin contact and stuff')} />
  </div>
);

export default Main;
