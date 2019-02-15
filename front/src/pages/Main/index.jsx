import React from "react";
import Box from "../../components/Box";
import Questions from "../../components/Questions";
import Publication from "../../components/Publication";
import ContactButton from "../../components/ContactButton";

import { questions } from "../../mock";

const Main = () => (
  <div style={{ display: "flex", flex: 1 }}>
    <div style={{ flex: 1, paddingRight: 24 }}>
      <Box title="Perguntas e Respostas">
        {questions.map((item, i) => (
          <Questions key={i} question={item.question} answer={item.answer} />
        ))}
      </Box>
    </div>
    <div style={{ flex: 1, paddingRight: 24 }}>
      <Box title="Publicações">
        {[...Array(20).keys()].map(i => (
          <Publication key={i} />
        ))}
      </Box>
    </div>
    <ContactButton onPress={() => console.log("Begin contact and stuff")} />
  </div>
);

export default Main;
