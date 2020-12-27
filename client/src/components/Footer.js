import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.yellow,
    width: '100%',
    height: '250px',
  },
  mainContainer: {
    position: 'absolute',
  },
  linkTitle: {
    color: theme.palette.common.purple,
    fontFamily: 'Arial',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  link: {
    color: '#FEFBEB',
    fontFamily: 'Arial',
    fontSize: '0.9rem',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '2em 4em',
  },
  icon: {
    color: '#FEFBEB',
    height: '70px',
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '2em',
    right: '8em',
    [theme.breakpoints.down('sm')]: {
      right: '15em',
    },
    alignItems: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.linkTitle}>
                For photographers
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/findwork"
              >
                Find work
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/meetups"
              >
                Local meetups
              </Grid>
              <Grid item className={classes.link} component={Link} to="/policy">
                Policy
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.linkTitle}>
                Hire photographers
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/postproject"
              >
                Post a freelance project
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/searchphotographer"
              >
                Search for photographers
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.linkTitle}>
                Company
              </Grid>
              <Grid item className={classes.link} component={Link} to="/about">
                About
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/careers"
              >
                Careers
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
              >
                Contact us
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                API
              </Grid>
              <Grid item className={classes.link} component={Link} to="/terms">
                Terms of services
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid item>
          <FacebookIcon className={classes.icon} />
          <TwitterIcon className={classes.icon} />
          <InstagramIcon className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
