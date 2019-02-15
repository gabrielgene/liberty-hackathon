import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

import classnames from "classnames";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Button,
  List
} from "@material-ui/core";

import Comment from "../Comment";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatIcon from "@material-ui/icons/Chat";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    fontSize: 12,
    display: "inline"
  },
  paper: {
    marginBottom: 8
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  button: {
    margin: theme.spacing.unit,
    width: "20%"
  },
  input: {
    width: "80%"
  },
  form: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Opportunities extends React.Component {
  state = {
    isExpanded: false
  };

  handleExpandClick = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  render() {
    const { classes, question, likes, comments } = this.props;
    const { isExpanded } = this.state;

    return (
      <Card className={classes.paper}>
        <CardContent>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText primary={question} />
          </ListItem>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="caption">{likes}</Typography>
          <IconButton aria-label="Comentários" onClick={this.handleExpandClick}>
            <ChatIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: isExpanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={isExpanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Divider />
          <CardContent>
            <Typography variant="h6">Respostas</Typography>
            <List>
              {comments.map((item, i) => (
                <Comment key={i} author={item.author} content={item.content} />
              ))}
            </List>
            <Divider />
            <form className={classes.form}>
              <TextField
                className={classes.input}
                label="Resposta"
                margin="normal"
                variant="outlined"
              />
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                Comentar
              </Button>
            </form>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(Opportunities);
