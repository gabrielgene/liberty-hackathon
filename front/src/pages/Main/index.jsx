import React from 'react';
import Opportunities from '../../components/Opportunities';
import Publication from '../../components/Publication';
import Box from "../../components/Box";
import Questions from "../../components/Questions";

import { questions } from "../../mock";
import { news } from './assets/news';

const Main = () => (
  <div style={{ display: "flex" }}>
    <div style={{ width: "50%", paddingRight: 24 }}>
      <Box title="Perguntas e Respostas">
        {questions.map((item, i) => (
          <Questions key={i} question={item.question} answer={item.answer} />
        ))}
      </Box>
    </div>
    <div style={{ width: "50%", paddingRight: 24 }}>
      <Box title="Publicações">
        {news.map((item, index) => (
          <Publication key={index} title={item.title} image={item.image} text={item.text} />
        ))}
      </Box>
    </div>
  </div>
);

export default Main;
