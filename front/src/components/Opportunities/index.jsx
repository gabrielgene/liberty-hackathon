import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import LocIcon from "@material-ui/icons/LocationOn";

import { USER_TYPE, TYPE_CLIENTE } from "../../util";

const styles = theme => ({
  root: {
    width: 800,
    height: 150,
    backgroundColor: theme.palette.background.paper,
    display: "flex"
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

const Opportunities = props => {
  const { classes, name, tel, service, cpf, place, bided } = props;

  const userType = localStorage.getItem(USER_TYPE);

  return (
    <Paper elevation={0} className={classes.paper}>
      <div className={classes.root}>
        <div
          style={{
            flex: 0.8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Avatar className={classes.bigAvatar}>R</Avatar>
        </div>
        <div
          style={{
            flex: 4,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              flex: 1,
              padding: 10,
              paddingTop: 20,
              display: "flex",
              alignItems: "flex-end"
            }}
          >
            <Typography variant="h6">{service}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              padding: 10
            }}
          >
            <PersonIcon />
            <Typography
              style={{ marginLeft: 16, marginRight: 16 }}
              variant="body2"
              gutterBottom
            >
              {name.length > 20 ? name.substring(0, 20) + "..." : name}
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
              {place}
            </Typography>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {userType === TYPE_CLIENTE ? (
            bided ? (
              <Button variant="outlined" color="secondary" disabled>
                Em negociação
              </Button>
            ) : (
              <Button variant="outlined" color="primary" disabled>
                Pendente
              </Button>
            )
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                props.history.push("/contatos");
              }}
            >
              Entrar em contato
            </Button>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(withRouter(Opportunities));
