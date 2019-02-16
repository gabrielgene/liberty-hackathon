import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBack";
import LinearProgress from "@material-ui/core/LinearProgress";

import ContactButton from "../../components/ContactButton";

import Grow from "@material-ui/core/Grow";

import DocumentService from "../../services/Document";
import { USER_TYPE, TYPE_CLIENTE } from "../../util";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
    width: "60%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 40
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Document extends React.Component {
  state = {
    isLoading: true,
    document: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    DocumentService.getDocument(id)
      .then(data => data.json())
      .then(document =>
        this.setState({
          isLoading: false,
          document: document
        })
      )
      .catch(err =>
        this.setState({ isLoading: false, document: null }, () =>
          this.handleError(err)
        )
      );
  }

  handleError = () => {};

  render() {
    const { classes, history } = this.props;
    const { isLoading, document } = this.state;

    const userType = localStorage.getItem(USER_TYPE);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => history.goBack()}
            >
              <BackIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Documento
            </Typography>
          </Toolbar>
        </AppBar>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <Grow in={!isLoading}>
            <div className={classes.wrapper}>
              <Paper className={classes.card} elevation={3}>
                <Typography
                  variant="h5"
                  component="h3"
                  style={{ textAlign: "center", marginBottom: 24 }}
                >
                  {document.title}
                </Typography>
                <img
                  alt="article"
                  style={{ width: "100%" }}
                  src={document.img}
                />
                <Typography variant="body1" style={{ marginBottom: 24 }}>
                  <p dangerouslySetInnerHTML={{ __html: document.content }} />
                </Typography>
              </Paper>
            </div>
          </Grow>
        )}
        {userType === TYPE_CLIENTE ? (
          <ContactButton
            onPress={() => this.props.history.push("/solicitar")}
          />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Document));
