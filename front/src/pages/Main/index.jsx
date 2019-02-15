import React from "react";
import Box from "../../components/Box";
import Questions from "../../components/Questions";
import Publication from "../../components/Publication";

import { questions } from "../../mock";

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
        {[...Array(20).keys()].map(i => (
          <Publication key={i} />
        ))}
      </Box>
    </div>
  </div>
);

export default Main;
