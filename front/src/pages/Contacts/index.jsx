import React from 'react';
import PropsTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Root from '../../components/Root';
import Opportunities from '../../components/Opportunities';
import Box from '../../components/Box';

class Contacts extends React.Component {
  state = {
    isLoading: true,
    contacts: [],
  };

  render() {
    const { classes } = this.props;
    const { isLoading, contacts } = this.state;

    return (
      <Root>
        <div style={{ width: '70%' }}>
          <Box title="Clientes">
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

Contacts.PropsTypes = {
  classes: PropsTypes.object.isRequired,
};

export default withStyles(styles)(Contacts);
