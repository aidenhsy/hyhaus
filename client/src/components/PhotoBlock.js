import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';

import PhotoCard from './PhotoCard';

const PhotoBlock = () => {
  const [photos, setPhotos] = useState([]);
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios.get('/api/photos');
      setPhotos(data);
    };
    fetchPhotos();
  }, []);
  return (
    <Grid
      container
      spacing={4}
      style={{
        padding: matchesXS
          ? undefined
          : matchesSM
          ? '2em 2em'
          : matchesMD
          ? '2em 4em'
          : matchesLG
          ? '2em 8em'
          : '2em 12em',
      }}
    >
      {photos.map((photo) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={photo._id}>
          <PhotoCard photo={photo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoBlock;
