import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '../../components/ListItem';
import List from '@material-ui/core/List';
import Root from '../../components/Root';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Contacts extends Component {
  render() {
    return (
      <Root>
        <div>
          <List>

          </List>
        </div>
      </Root>
    )
  }
}

export default withStyles(styles)(Contacts);
