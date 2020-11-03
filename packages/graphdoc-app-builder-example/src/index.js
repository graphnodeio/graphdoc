import React from 'react';
import { render } from 'react-dom';
import Graphdoc from '@graphnode/graphdoc-app/dist/bundle';
import './style/index.css';
console.log("J");
render(
  <div className="flex flex-col min-h-screen">
    <Graphdoc.GraphdocConfigProvider>
      <Graphdoc.App />
    </Graphdoc.GraphdocConfigProvider>
  </div>
, document.getElementById('app'));