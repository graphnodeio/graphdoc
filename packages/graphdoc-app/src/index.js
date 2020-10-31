import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './style/index.css';

render(
  <ThemeProvider theme={theme}>
    <Navbar />
    <App />
   </ThemeProvider>
, document.getElementById('app'));