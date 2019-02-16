import React from "react";
import { withRouter } from "react-router-dom";
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

const DocumentCard = ({ title, _id, classes, trunc, index, history }) => (
  <Grow in={true}>
    <Paper
      elevation={2}
      style={{
        marginBottom: 24,
        border: "1px solid rgba(0, 0, 0, 0.2)",
        width: "70%",
        cursor: "pointer"
      }}
      onClick={() => history.push(`/artigo/${_id}`)}
    >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p" style={{ overflow: "hidden" }}>
            {trunc}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="caption">
            {Math.floor(Math.random() * Math.floor(400))}
          </Typography>
          <IconButton aria-label="Comentários">
            <ChatIcon />
          </IconButton>
          <Typography variant="caption">
            {Math.floor(Math.random() * Math.floor(40))}
          </Typography>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
    </Paper>
  </Grow>
);

const styles = theme => ({});

export default withStyles(styles)(withRouter(DocumentCard));
