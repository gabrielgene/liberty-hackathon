import React from "react";
import { withStyles, Fab } from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";

const styles = theme => ({
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  },
  icon: {
    marginRight: theme.spacing.unit
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
    <InfoIcon className={classes.icon} />
    Entre em contato
  </Fab>
);

export default withStyles(styles)(ContactButton);
