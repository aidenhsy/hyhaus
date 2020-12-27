import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import PhotoCard from '../components/PhotoCard';
import MainBlock from '../components/MainBlock';

const useStyles = makeStyles((theme) => ({
  containerOne: {
    marginTop: '4rem',
  },
}));

const LandingScreen = () => {
  const classes = useStyles();

  //data fetcing
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
      <Grid item>
        <PhotoCard />
      </Grid>
    </Grid>
  );
};

export default LandingScreen;
