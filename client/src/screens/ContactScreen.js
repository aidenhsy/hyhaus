import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  TextField,
  Hidden,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import airplane from '../assets/send.svg';
import background from '../assets/contact.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '52em',
  },
  contactBtn: {
    backgroundColor: theme.palette.common.purple,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    borderRadius: 50,
    height: 45,
    width: 245,
    [theme.breakpoints.down('xm')]: {
      height: 40,
      width: 225,
    },
  },
  messsage: {
    border: '0.5px #949494 solid ',
    marginTop: '2em',
    borderRadius: 7,
  },
}));

const ContactScreen = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

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
        <Grid item style={{ maxWidth: '20em' }}>
          <Grid container style={{ paddingBottom: '10em' }}>
            <Grid item>
              <Typography variant="h2">Contact</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: '20em' }}
            >
              <Grid item style={{ marginTop: '1em', maxWidth: '20em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ margin: '1em 0', maxWidth: '20em' }}>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item style={{ margin: '1em 0', maxWidth: '20em' }}>
                <TextField
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item style={{ maxWidth: matchesXS ? '100%' : '20em' }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  multiline
                  rows={10}
                  fullWidth
                  className={classes.messsage}
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginTop: '2em' }}>
                <Button
                  variant="contained"
                  className={classes.contactBtn}
                  onClick={() => setOpen(true)}
                >
                  Send
                  <img
                    src={airplane}
                    alt="paper airplane"
                    style={{ marginLeft: '1em' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
            borderRadius: 40,
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginTop: '1em', maxWidth: '20em' }}>
              <TextField
                label="Name"
                id="name"
                type="name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ margin: '1em 0', maxWidth: '20em' }}>
              <TextField
                label="Email"
                id="email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                label="Phone"
                id="phone"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                value={message}
                InputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                fullWidth
                className={classes.messsage}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? 'column' : 'row'}
            style={{ marginTop: '2em' }}
            alignItems="center"
          >
            <Grid item>
              <Button
                color="primary"
                style={{ fontWeight: 300 }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.contactBtn}
                onClick={() => setOpen(true)}
              >
                Send
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: '1em' }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Hidden smDown>
        <Grid item container className={classes.background} md={7}></Grid>
      </Hidden>
    </Grid>
  );
};

export default ContactScreen;
