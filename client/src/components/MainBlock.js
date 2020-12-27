import React from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4rem',
  },
}));

const MainBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="row" className={classes.root} justify="center">
      <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
        <Typography variant="h2" style={{ marginBottom: '1.4rem' }}>
          Discover China's top photographers
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '1.4rem' }}>
          Hyhaus is the leading destination to find & showcase photographies and
          home to the China's best photographers.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MainBlock;
