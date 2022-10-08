import React, { useState } from 'react';
import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

interface DrawerComponentProps {
  menuItems: {
    name: string;
    to: string;
  }[];
  isMobile: boolean;
  logout: () => void;
}

const DrawerComponent = ({ menuItems, isMobile }: DrawerComponentProps) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {menuItems.map((menuItem) => (
            <ListItem key={menuItem.name} onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                {/* <Link to={menuItem.to} className={classes.link}>
                  {menuItem.name}
                </Link> */}
              </ListItemText>
              <Divider />
            </ListItem>
          ))}
          {isMobile && (
            <>
              <Divider />
              {/* {isUserLoggedIn ? (
                <ListItem key="signout" onClick={() => setOpenDrawer(false)}>
                  <ListItemText
                    primary="Logout"
                    className={classes.link}
                    style={{ color: '#3f51b5' }}
                    onClick={logout}
                  />
                </ListItem>
              ) : (
                <ListItem key="signin" onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link to="/auth" className={classes.link}>
                      Sign in
                    </Link>
                  </ListItemText>
                </ListItem>
              )} */}
            </>
          )}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
