import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import logo from '../../assets/logo.png';
import bg from '../../assets/bg.jpg';


const styles = theme => ({
  holder:{
    backgroundImage: `url(${bg})`,
    height: '100vh',
    paddingTop: '20vh',
    width: '100vw',
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  imgLogin:{
    width: 150
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends React.Component {
  state={
    email: '',
    password: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value})

  onClick = () => {
    const { email, password } = this.state;
    if(email === 'corretor' && password === '123'){
      this.props.history.push('/inicio', { type: email });
    }
    else if(email === 'cliente' && password === '123'){
      this.props.history.push('/minhas-solicitacoes', { type: email });
    }
    else alert("Usuário não encontrado");
  };

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.holder}>
        <div className={classes.main}>
          <CssBaseline />
            <Paper className={classes.paper}>
              <img className={classes.imgLogin} src={logo} alt="" />
              <Typography component="h1" variant="h5">
                StartSeg
              </Typography>
              <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Username</InputLabel>
                  <Input id="email" name="email" onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Senha</InputLabel>
                  <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange}  />
                </FormControl>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.onClick}
                >
                  Entrar
                </Button>
              </form>
          </Paper>
        </div>
      </main>
    )
  }
}

export default withStyles(styles)(SignIn);