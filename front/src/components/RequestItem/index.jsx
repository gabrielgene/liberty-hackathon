import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
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

const RequestItem = ({ classes, name, service, cpf, location, bided, tel }) => (
  <Paper elevation={0} className={classes.paper}>
    <ListItem alignItems="flex-start">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <div>
          <Avatar className={classes.bigAvatar} style={{ margin: 8 }}>
            {name.substring(0, 1)}
          </Avatar>
        </div>
        <div style={{ marginTop: 16, marginLeft: 28 }}>
          <Typography variant="h6" gutterBottom>
            {service}
          </Typography>
          <div
            style={{
              display: "flex",
              color: "#9d9d9d",
              marginTop: 16
            }}
          >
            <PersonIcon />
            <Typography
              style={{ marginLeft: 16, marginRight: 16 }}
              variant="body2"
              gutterBottom
            >
              {name}
            </Typography>
            <PhoneIcon />
            <Typography
              style={{ marginLeft: 16, marginRight: 16 }}
              variant="body2"
              gutterBottom
            >
              {tel}
            </Typography>
            <LocIcon />
            <Typography
              style={{ marginLeft: 16, marginRight: 16 }}
              variant="body2"
              gutterBottom
            >
              {location}
            </Typography>
          </div>
        </div>
        <div>
          <Button
            style={{ marginTop: 16 }}
            variant="flat"
            color={bided ? "secondary" : "primary"}
          >
            {bided ? "Em negociação" : "Pendente"}
          </Button>
        </div>
      </div>
    </ListItem>
  </Paper>
);

export default withStyles(styles)(RequestItem);
