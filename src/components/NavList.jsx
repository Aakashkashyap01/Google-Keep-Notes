import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Link } from 'react-router-dom';
const NavList = () => {
  const navList = [
    { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon />, route: '/' },
    { id: 2, name: 'Archive', icon: <ArchiveOutlinedIcon />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <DeleteOutlineOutlinedIcon /> , route: '/delete' }
  ];
  return (
    <List>
      {navList.map(item => (
        <ListItem button key={item.id}>
          <Link to={item.route} style={{textDecoration: 'none' , display: 'flex', color: 'inherit'}}>        
            <ListItemIcon style={{ alignItems: 'center'}}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default NavList;
