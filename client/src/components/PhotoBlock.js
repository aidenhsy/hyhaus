import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  Tabs,
  Tab,
  AppBar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PhotoCard from './PhotoCard';
import TabPanel from './TabPanel';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 550,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
  scroller: {
    flexGrow: '0',
  },
  tab: {
    maxWidth: 20,
  },
});

const PhotoBlock = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [active, setActive] = useState(0);
  const [photos, setPhotos] = useState([]);

  const handleChange = (e, value) => {
    setActive(value);
  };

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
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="sticky" color="inherit" elevation={0}>
          <Tabs
            value={active}
            onChange={handleChange}
            classes={{ root: classes.root, scroller: classes.scroller }}
            variant={'scrollable'}
            scrollButtons={'on'}
          >
            <Tab label="All" className={classes.tab} />
            <Tab label="Shanghai" className={classes.tab} />
            <Tab label="Beijing" className={classes.tab} />
            <Tab label="Chengdu" className={classes.tab} />
            <Tab label="Dalian" className={classes.tab} />
          </Tabs>
        </AppBar>
      </ElevationScroll>
      {['', 'shanghai', 'beijing', 'chengdu', 'dalian'].map((city, index) => (
        <TabPanel value={active} index={index} key={index}>
          <Grid
            container
            style={{ marginTop: '2em' }}
            justify="center"
            spacing={4}
          >
            {photos
              .filter((photo) => photo.city.includes(city))
              .map((photo) => (
                <Grid item key={photo._id} sm={12} md={6} lg={4} xl={3}>
                  <PhotoCard photo={photo} />
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      ))}
    </React.Fragment>
  );
};

export default PhotoBlock;
