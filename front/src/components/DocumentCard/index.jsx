import React from "react";
import {
  withStyles,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Paper
} from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";

const DocumentCard = ({ title, classes, content, index }) => (
  <Grow in={true}>
    <Paper
      elevation={0}
      style={{
        marginBottom: 24,
        border: "1px solid rgba(0, 0, 0, 0.2)",
        width: "70%"
      }}
    >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p" style={{ overflow: "hidden" }}>
            {content}
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
  </Grow>
);

const styles = theme => ({});

export default withStyles(styles)(DocumentCard);
