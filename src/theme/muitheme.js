import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: green.A200,
      main: green[700],
      dark: green[900],
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8
  },
});

export default theme;