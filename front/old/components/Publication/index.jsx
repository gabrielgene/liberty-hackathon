import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

import Comment from '../Comment';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatIcon from '@material-ui/icons/Chat';

const styles = theme => ({
  card: {
    display: 'flex',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    marginBottom: 8,
    height: 200,
    overflow: 'hidden',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 675,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
    height: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { classes, title, text, image, likes, number } = props;
  return (
    <Paper elevation={0} className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p" style={{ overflow: 'hidden' }}>
            {text}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="caption">{likes}</Typography>
          <IconButton aria-label="Comentários">
            <ChatIcon />
          </IconButton>
          <Typography variant="caption">{number}</Typography>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Paper>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
