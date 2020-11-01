import React from 'react';
import { render } from 'react-dom';
import Graphdoc from '@graphnode/graphdoc-app/dist/bundle';
import './style/index.css';

render(
  <div className="flex flex-col min-h-screen">
    <Graphdoc.App />
  </div>
, document.getElementById('app'));