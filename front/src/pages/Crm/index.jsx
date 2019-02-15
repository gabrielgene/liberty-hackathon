import React from "react";
import Box from "../../components/Box";
import Opportunities from "../../components/Opportunities";

const Crm = () => (
  <div style={{ display: "flex" }}>
    <div style={{ width: "30%" }}>
      <Box title="Oportunidades" style={{ width: "30%" }}>
        {[...Array(20).keys()].map(i => (
          <Opportunities key={i} />
        ))}
      </Box>
    </div>
  </div>
);

export default Crm;
