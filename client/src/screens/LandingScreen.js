import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import MainBlock from '../components/MainBlock';

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
}));

const LandingScreen = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/photos');
      setPhotos(data);
    };
    fetchProducts();
  }, []);

  console.log(photos);

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <MainBlock />
      </Grid>
    </Grid>
  );
};

export default LandingScreen;
