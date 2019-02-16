import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import LocIcon from "@material-ui/icons/LocationOn";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  paper: {
    marginBottom: 8,
    border: "solid 1px rgba(0, 0, 0, 0.1)"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

const Opportunities = ({ classes, name, tel, service, cpf, location }) => (
  <Paper elevation={0} className={classes.paper} />
);

export default withStyles(styles)(Opportunities);
