import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

import ContactButton from "../ContactButton";

import DrawerMenu from "../../components/DrawerMenu";
import { USER_TYPE, TYPE_CLIENTE } from "../../util";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    marginTop: 64,
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  listItem: {
    paddingLeft: 24
  },
  avatar: {
    marginLeft: "auto",
    marginRight: 15
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, children, history } = this.props;

    const userType = localStorage.getItem(USER_TYPE);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              StartSeg
            </Typography>
            <div
              style={{ display: "flex", marginLeft: "auto", marginRight: 16 }}
            >
              <Avatar src="https://avatars3.githubusercontent.com/u/19671668?s=460&v=4" />
            </div>
          </Toolbar>
        </AppBar>

        <DrawerMenu
          open={this.state.open}
          handleDrawerClose={this.handleDrawerClose}
        />

        <main className={classes.content}>
          <React.Fragment>
            {children}
            {userType === TYPE_CLIENTE ? (
              <ContactButton onPress={() => history.push("/solicitar")} />
            ) : null}
          </React.Fragment>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(MiniDrawer));
