import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import LeadService from '../../services/Lead';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
    width: '60%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const services = [
  {
    label: 'Patrimonial',
  },
  {
    label: 'Automovel',
  },
  {
    label: 'Saúde',
  },
];

const Document = props => {
  const { classes, history } = props;

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
      <div className={classes.wrapper}>
        <Paper className={classes.card} elevation={3}>
          <Typography
            variant="h5"
            component="h3"
            style={{ textAlign: 'center', marginBottom: 24 }}
          >
            Texto
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(Document));
