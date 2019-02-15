import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";

const Comment = ({ author, content }) => (
  <ListItem style={{ marginBottom: 10 }} alignItems="flex-start">
    <ListItemAvatar>
      <Avatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
    </ListItemAvatar>
    <ListItemText primary={author} secondary={content} />
  </ListItem>
);

export default Comment;
