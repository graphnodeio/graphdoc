import * as React from 'react';
import { Voyager } from 'graphql-voyager';
import fetch from 'isomorphic-fetch';
import 'graphql-voyager/dist/voyager.css';
import StyledWrapper from './StyledWrapper';

function introspectionProvider(query) {
  return fetch('https://api.spacex.land/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query }),
  }).then((response) => response.json());
}
const Visualize = () => {
  return (
    <StyledWrapper>
      <Voyager introspection={introspectionProvider} />
     </StyledWrapper>
   );
};

export default Visualize;
