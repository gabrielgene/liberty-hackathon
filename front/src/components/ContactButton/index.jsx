import React from "react";
import { withStyles, Fab } from "@material-ui/core";

const styles = theme => ({
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  }
});

const ContactButton = ({ classes, onPress }) => (
  <Fab
    variant="extended"
    size="large"
    color="primary"
    aria-label="Contact"
    className={classes.fab}
    onClick={() => onPress()}
  >
    Entre em contato
  </Fab>
);

export default withStyles(styles)(ContactButton);
