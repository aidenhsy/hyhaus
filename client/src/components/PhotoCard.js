import React from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  card: {
    maxWidth: 345,
    borderRadius: 30,
  },
  cardHeader: {
    height: 15,
  },
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const PhotoCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://petapixel.com/assets/uploads/2017/11/finger-800x600.jpg"
        title="Paella dish"
      />
      <CardActions>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9KtAZaHVOs0UUmGsYOrvaTRYBWF5yylw4Q&usqp=CAU"
              className={classes.avatar}
              component={Link}
              to="/profile/meganli"
            />
          }
          title={
            <Link to="/profile/meganli" style={{ color: 'black' }}>
              Megan Li
            </Link>
          }
          subheader="September 14, 2021"
          className={classes.cardHeader}
        />
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
