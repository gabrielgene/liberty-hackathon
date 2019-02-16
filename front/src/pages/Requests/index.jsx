import React from 'react';
import PropsTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Root from '../../components/Root';
import Opportunities from '../../components/Opportunities';
import Box from '../../components/Box';

class Requests extends React.Component {
  state = {
    isLoading: true,
    solicitations: [],
  };

  render() {
    const { classes } = this.props;
    const { isLoading, solicitations } = this.state;

    return (
      <Root>
        <div style={{ width: '70%' }}>
          <Box title="Solicitacoes">
            {[...Array(20).keys()].map(i => (
              <Opportunities key={i} />
            ))}
          </Box>
        </div>
      </Root>
    );
  }
}

const styles = theme => ({});

Request.PropsTypes = {
  classes: PropsTypes.object.isRequired,
};

export default withStyles(styles)(Requests);
