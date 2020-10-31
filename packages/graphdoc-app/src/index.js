import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './style/index.css';

render(
  <ThemeProvider theme={theme}>
    <App />
   </ThemeProvider>
, document.getElementById('app'));