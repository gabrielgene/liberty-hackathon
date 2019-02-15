import React from 'react';
import Typography from '@material-ui/core/Typography';

const Box = ({ children, title }) => (
  <div>
    <Typography style={{ marginBottom: 16 }} variant="h6" gutterBottom>
      {title}
    </Typography>
    <div style={{ overflow: 'auto', maxHeight: '83vh', paddingRight: 16 }}>
      {children}
    </div>
  </div>
);

export default Box;
