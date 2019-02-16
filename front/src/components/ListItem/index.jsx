import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    fontStyle: 'italic',
  },
  subtext: {
    display: 'inline',
    color: 'grey'
  },
});

function AlignItemsList({ classes, title, text, avatar, subtext }) {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography component="span" className={classes.inline} color="textPrimary">
              {text}
            </Typography>
            <br/>
            <Typography component="span" className={classes.subtext} color="textPrimary">
              {subtext}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
