import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PersonIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import ExitIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Work';
import LearnIcon from '@material-ui/icons/LocalLibrary';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';

import SolicitacoesIcon from '@material-ui/icons/Assignment';
import InfoIcon from '@material-ui/icons/InsertDriveFile';

import ListItemMenu from './Listitem';

import { USER_TYPE, TYPE_CORRETOR } from '../../util';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    marginTop: 64,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  listItem: {
    paddingLeft: 24,
  },
});

class DrawerMenu extends React.Component {
  render() {
    const { classes, open, handleDrawerClose } = this.props;

    const userType = localStorage.getItem(USER_TYPE);

    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <List>
          <ListItemMenu to="/inicio" icon={<HomeIcon />} text="Inicio" />
          {userType === TYPE_CORRETOR ? (
            <React.Fragment>
              <ListItemMenu to="/aprenda" icon={<LearnIcon />} text="Aprenda" />
              <ListItemMenu
                to="/oportunidades"
                icon={<DashboardIcon />}
                text="Oportunidades"
              />
              <ListItemMenu
                to="/contatos"
                icon={<PersonIcon />}
                text="Clientes"
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ListItemMenu
                to="/minhas-solicitacoes"
                icon={<SolicitacoesIcon />}
                text="Minhas Solicitações"
              />
              <ListItemMenu
                to="/solicitar"
                icon={<InfoIcon />}
                text="Solicitar"
              />
            </React.Fragment>
          )}
        </List>
        <Divider />
        <List>
          <ListItemMenu to="/" icon={<ExitIcon />} text="Sair" />
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerMenu);
