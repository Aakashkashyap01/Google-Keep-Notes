import React from "react";
import { styled} from "@mui/material/styles";
import {AppBar, Toolbar,IconButton, Typography} from '@mui/material';
import { Menu } from "@mui/icons-material";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
color: #5f6368;
font-size:24px;
margin-left:25px;
`

const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{marginRight: '20px'}}>
          <Menu/>
          </IconButton>
          <img src={logo} alt="logo" style={{width: 30}}/>
          <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
