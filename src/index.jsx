import * as React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import configureStore from './configureStore'

import App from './App';

import './fonts/fonts.css'
import './index.css';

const store = configureStore()
const theme = createMuiTheme({});

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
