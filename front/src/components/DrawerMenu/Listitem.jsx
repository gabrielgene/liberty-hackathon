import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

const ListItemMenu = ({to, icon, text}) => {
  return (
    <NavLink to={to} style={{textDecoration:'none'}}>
      <ListItem style={{ paddingLeft: 24 }} button>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </NavLink>
  )
}

export default ListItemMenu;