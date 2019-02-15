import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      main: '#ffecb3',
    },
  },
});

export default theme;
