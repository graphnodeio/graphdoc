import React, { useState, useEffect, useRef } from 'react';

import Visualize from './Visualize';
import useSchema from '../../services/schema/useSchema';

const Schema = () => {
  // let [endpoint, setEndpoint] = useState('https://api.spacex.land/graphql');

  // const {
  //   isLoaded: schemaLoaded,
  //   schema: schema,
  //   error: schemaLoadingError,
  // } = useSchema(endpoint);

  // console.log(schema);

  return (
    <Visualize />
  );
}

export default Schema;
