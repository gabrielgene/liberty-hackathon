import React from 'react';
import PropsTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Root from '../../components/Root';
import Opportunities from '../../components/Opportunities';
import Box from '../../components/Box';

import RequestItem from '../../components/RequestItem';

import LeadServices from '../../services/Lead';

class Requests extends React.Component {
  state = {
    isLoading: true,
    requests: [],
  };

  componentDidMount() {
    LeadServices.getLeads()
      .then(data => data.json())
      .then(leads =>
        this.setState({
          isLoading: false,
          requests: leads.filter(el => el.name.substring(0, 1) === 'R'),
        }),
      );
  }

  render() {
    const { classes } = this.props;
    const { isLoading, requests } = this.state;

    return (
      <Root>
        <div style={{ width: '70%' }}>
          <Box title="Minhas Solicitações">
            {requests.map(item => (
              <RequestItem key={item._id} {...item} />
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
