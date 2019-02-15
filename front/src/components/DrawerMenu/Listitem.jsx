import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

const ListItemMenu = ({to, icon, text, open}) => {
  return (
    <NavLink to={to} style={{textDecoration:'none'}}>
      <Tooltip title={text} placement="right" >
        <ListItem style={{ paddingLeft: 24 }} button>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Tooltip>

    </NavLink>
  )
}

export default ListItemMenu;