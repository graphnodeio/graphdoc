import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { ThemeProvider } from 'styled-components';
import { GraphdocConfigProvider } from './providers/GraphdocConfigProvider';
import theme from './theme';
import './style/index.css';
import './style/markdown.css';

let config = {
  content: '# Hello world!'
};

render(
  <ThemeProvider theme={theme}>
      <GraphdocConfigProvider config = {config}>
        <App />
      </GraphdocConfigProvider>
   </ThemeProvider>
, document.getElementById('app'));