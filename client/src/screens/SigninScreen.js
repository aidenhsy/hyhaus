import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, TextField, Hidden } from '@material-ui/core';
import background from '../assets/camera.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '52em',
  },
  signinBtn: {
    backgroundColor: theme.palette.common.purple,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    borderRadius: 50,
    height: 45,
    width: 245,
  },
}));

const SignInScreen = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const onChange = (e) => {
    let valid;
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        md={5}
      >
        <Grid item style={{ maxWidth: '15em' }}>
          <Grid container style={{ paddingBottom: '10em' }}>
            <Grid item style={{ maxWidth: '15em' }}>
              <Typography variant="h2">Sign In</Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item style={{ margin: '1em 0', maxWidth: '15em' }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ maxWidth: '15em' }}>
                <TextField
                  label="Password"
                  id="password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.password)}
                />
              </Grid>
              <Grid item style={{ marginTop: '2em' }}>
                <Button
                  component={Link}
                  to="/"
                  variant="contained"
                  className={classes.signinBtn}
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item container className={classes.background} md={7}></Grid>
      </Hidden>
    </Grid>
  );
};

export default SignInScreen;
