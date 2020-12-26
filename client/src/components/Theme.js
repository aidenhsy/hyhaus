import { createMuiTheme } from '@material-ui/core/styles';

const purplepink = '#F04393';
const yellow = '#F9C449';

export default createMuiTheme({
  palette: {
    common: {
      purple: `${purplepink}`,
      yellow: `${yellow}`,
    },
    primary: {
      main: `${purplepink}`,
    },
    secondary: {
      main: `${yellow}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '0.9rem',
    },
  },
});
