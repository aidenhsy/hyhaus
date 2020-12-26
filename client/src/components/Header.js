import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Container,
  ButtonGroup,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import logohandwriting from '../assets/logohandwriting.svg';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1em',
    },
  },
  logo: {
    height: '2em',
    [theme.breakpoints.down('md')]: {
      height: '1.7em',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  toolbar: {
    height: '3em',
    [theme.breakpoints.down('md')]: {
      height: '1em',
    },
    margin: '0.5em 0',
  },
  buttonGroup: {
    marginLeft: '2em',
  },
  button: {
    textTransform: 'none',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
  },
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  menu: {},
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const buttons = (
    <React.Fragment>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
        className={classes.buttonGroup}
      >
        <Button className={classes.button} component={Link} to="/findwork">
          Find work
        </Button>
        <Button className={classes.button} component={Link} to="/hire">
          Hire Photographer
        </Button>
      </ButtonGroup>
      <Avatar
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup={anchorEl ? 'true' : undefined}
        onClick={(event) => handleClick(event)}
        style={{ marginLeft: 'auto' }}
        className={classes.avatar}
      >
        AY
      </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/settings">
          Settings & Privacy
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/help">
          Help & Support
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/logout">
          Log out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="inherit">
          <Container>
            <Toolbar disableGutters className={classes.toolbar}>
              <Link to="/">
                <img
                  src={logohandwriting}
                  className={classes.logo}
                  alt="logo"
                />
              </Link>
              {buttons}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
