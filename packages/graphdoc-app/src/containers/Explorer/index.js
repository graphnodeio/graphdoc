import React from 'react';
import GraphiQL from 'graphiql';
import StyledWrapper from './StyledWrapper';
import 'graphiql/graphiql.min.css';

const Logo = () => <span>{'IN2'}</span>;

GraphiQL.Logo = Logo;

const Explorer = () => (
  <StyledWrapper>
    <GraphiQL
      fetcher={async graphQLParams => {
        const data = await fetch(
          'https://api.spacex.land/graphql/',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphQLParams),
            credentials: 'same-origin',
          },
        );
        return data.json().catch(() => data.text());
      }}
    />
  </StyledWrapper>
);

export default Explorer;
