import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    marginBottom: 8,
    height: 200,
    overflow: 'hidden'
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
  const { classes, title, text, image } = props;
  return (
    <Paper elevation={0} className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p" style={{overflow:'hidden'}}>
            {text}
          </Typography>
        </CardContent>
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
