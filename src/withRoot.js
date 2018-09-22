import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import red from '@material-ui/core/colors/red';
import 'typeface-dosis';

const theme = createMuiTheme({
  palette: {
    error: red,
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: 'Dosis, sans-serif',
    htmlFontSize: 10,
    fontSize: 20,
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
