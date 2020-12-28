import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import MainBlock from '../components/MainBlock';
import PhotoBlock from '../components/PhotoBlock';

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
}));

const LandingScreen = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <MainBlock />
        <PhotoBlock />
      </Grid>
    </Grid>
  );
};

export default LandingScreen;
