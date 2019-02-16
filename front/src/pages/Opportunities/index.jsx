import React from 'react';
import PropsTypes from 'prop-types';
import LeadService from '../../services/Lead';
import { withStyles } from '@material-ui/core';
import Root from '../../components/Root';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Fade } from '@material-ui/core';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Opportunities from '../../components/Opportunities';
import Box from '../../components/Box';

import classnames from 'classnames';
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Button,
  List,
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatIcon from '@material-ui/icons/Chat';

class Feed extends React.Component {
  state = {
    isLoading: true,
    leads: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    LeadService.getLeads()
      .then(data => data.json())
      .then(leads => {
        this.setState({
          isLoading: false,
          leads: leads,
        });
      })
      .catch(err =>
        this.setState({ isLoading: false }, () => this.handleError(err)),
      );
  };

  handleError = err => {};

  onCompleted = () => this.getData();

  render() {
    const { classes, title, bided, op, my } = this.props;
    const { isLoading, leads } = this.state;

    return (
      <Root>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {isLoading ? (
            <Fade in={isLoading}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '70vh',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="display1">{title}</Typography>
                <CircularProgress color="primary" style={{ marginTop: 10 }} />
              </div>
            </Fade>
          ) : (
            <Box width={800} title={title}>
              <div>
                {my
                  ? leads
                      .filter(l => l.name.substring(0, 1) === 'R')
                      .map(l => (
                        <Opportunities
                          onCompleted={this.onCompleted}
                          op={op}
                          my={my}
                          key={l._id}
                          {...l}
                          place={l.location}
                        />
                      ))
                  : leads
                      .filter(l => l.bided === !!bided)
                      .map(l => (
                        <Opportunities
                          onCompleted={this.onCompleted}
                          op={op}
                          my={my}
                          key={l._id}
                          {...l}
                          place={l.location}
                        />
                      ))}
              </div>
            </Box>
          )}
        </div>
      </Root>
    );
  }
}

const styles = theme => ({});

Feed.PropsTypes = {
  classes: PropsTypes.object.isRequired,
};

export default withStyles(styles)(Feed);
