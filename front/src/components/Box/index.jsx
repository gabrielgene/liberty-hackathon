import React from 'react';
import Typography from '@material-ui/core/Typography';

const Box = ({ children, title, width }) => (
  <div>
    <Typography style={{ marginBottom: 16 }} variant="h6" gutterBottom>
      {title}
    </Typography>
    <div
      style={{
        overflow: 'auto',
        maxHeight: '83vh',
        paddingRight: 16,
        maxWidth: 830,
      }}
    >
      {children}
    </div>
  </div>
);

export default Box;
