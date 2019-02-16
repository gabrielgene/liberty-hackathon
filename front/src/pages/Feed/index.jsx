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
<<<<<<< HEAD
      <div>
        {isLoading ? (
          <LinearProgress color="secondary" />
        ) : (
          documents.map(document => (
            <div key={document.id}>
              <h2>{document.title}</h2>
              <img
                style={{ width: 400, height: 300 }}
                alt="article"
                src={document.img}
              />
              <p>{document.content}</p>
=======
      <Root>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color="secondary" />
>>>>>>> 1428c4f609c1cbb29bf22b4fe80386750fdb3809
            </div>
          ) : (
            [...Array(20)].map(document => (
              <Paper
                key={document}
                elevation={0}
                style={{
                  marginBottom: 24,
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  width: '70%',
                }}
              >
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Teste
                    </Typography>
                    <Typography component="p" style={{ overflow: 'hidden' }}>
                      Teste2
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <Typography variant="caption">2</Typography>
                    <IconButton aria-label="Comentários">
                      <ChatIcon />
                    </IconButton>
                    <Typography variant="caption">10</Typography>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </div>
              </Paper>
            ))
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
