import React from 'react';

export const GraphdocConfigContext = React.createContext();

export const GraphdocConfigProvider = props => {
  let config = props.config || {};

  return <GraphdocConfigContext.Provider value={config} {...props} />;
};

export const useGraphdocConfig = () => {
  const context = React.useContext(GraphdocConfigContext);

  if (context === undefined) {
    throw new Error(`useGraphdocConfig must be used within a GraphdocConfigProvider`);
  }

  return context;
};

export default GraphdocConfigProvider;
