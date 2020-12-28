import React from 'react';
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Hidden,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import backgroudImage from '../assets/backgroudImage.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '480px',
    backgroundColor: '#F8F7FD',
  },
  backgroundImage: {
    height: '300px',
    marginTop: '4rem',
  },
  signupButton: {
    backgroundColor: theme.palette.common.purple,
    color: 'white',
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    border: 'none',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  title: {
    marginBottom: '1.4rem',
    marginTop: '4rem',
  },
}));

const MainBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }} md={6}>
        <Typography variant="h2" className={classes.title}>
          Discover China's top photographers
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '1.4rem' }}>
          Hyhaus is the leading destination to find & showcase photographies and
          home to the China's best photographers.
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to="/signin"
          className={classes.signupButton}
        >
          Sign up
        </Button>
      </Grid>
      <Hidden smDown>
        <Grid item md={6}>
          <img
            alt="mainBlockIcon"
            className={classes.backgroundImage}
            src={backgroudImage}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default MainBlock;
