import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/logo.png';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    width: '45%'
  },
  pos: {
    color: 'white',
    marginBottom: 12,
  },
};

export class Login extends Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
  const { classes } = this.props;
  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}>

      <div className="login-wrapper">
        <Card raised className={classes.card} style={{
              backgroundColor: '#fbc02d',
              width: 1200,
              height: 650,
              borderRadius: 4,
            }}>
          <CardContent>
            <div className="text-wrapper" style={{marginTop:'22%', marginLeft:80}}>
              <Typography className={classes.title} component="h2" gutterBottom>
                Bem vindo a maior plataforma de gestão de corretores do Brasil
              </Typography>
              <Typography >
                Faça seu login para continuar
              </Typography>
            </div>
            <Paper  style={{
              position: 'absolute',
              border:'solid',
              borderWidth:1,
              borderColor: '#f0f0f0',
              top: 26,
              right: 308,
              width: 500,
              height: 750,
            }}>
              <CardActionArea style={{textAlign: 'center', marginTop: 30}}>
                <img
                  className={classes.media}
                  style={{width:150, margin: 'auto'}}
                  src={logo}
                  alt="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    StartSeg
                  </Typography>
                  <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                      id="outlined-name"
                      label="Email"
                      className={classes.textField}
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-name"
                      label="Senha"
                      className={classes.textField}
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                  </form>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="primary">
                  Login
                </Button>
              </CardActions>
            </Paper>
          </CardContent>
        </Card>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Login);
