import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
  MenuItem,
  Menu,
  IconButton,
} from '@material-ui/core';

import useStyles from './styles';

interface NavbarProps {
  menuItems: {
    name: string;
    to: string;
  }[];
}

const Navbar = ({ menuItems }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        {/* <Link to="/">
          <LockIcon fontSize="large" />
        </Link> */}
      </div>
      <Toolbar className={classes.toolbar}>
        {!isMobile && (
          <div>
            <Menu
              id="menu-appbar"
              open={open}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem>
                Settings
              </MenuItem>
              <MenuItem
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
