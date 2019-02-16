import React from 'react';
import PropsTypes from 'prop-types';
import DocumentService from '../../services/Document';
import { withStyles } from '@material-ui/core';
import Root from '../../components/Root';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    documents: [],
  };

  componentDidMount() {
    DocumentService.getDocuments()
      .then(data => data.json())
      .then(documents =>
        this.setState({
          isLoading: false,
          documents: documents,
        }),
      )
      .catch(err =>
        this.setState({ isLoading: false }, () => this.handleError(err)),
      );
  }

  handleError = err => {};

  render() {
    const { classes } = this.props;
    const { isLoading, documents } = this.state;

    return (
      <Root>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Box width={800} title="Oportunidades">
            <div>
              {[...Array(20).keys()].map(i => (
                <Opportunities key={i} />
              ))}
            </div>
          </Box>
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
