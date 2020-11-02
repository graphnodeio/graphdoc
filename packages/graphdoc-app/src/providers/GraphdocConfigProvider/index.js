import React from 'react';

const GraphdocConfigContext = React.createContext();

export const GraphdocConfigProvider = props => {
  let config = {foo: 'bar'};

  return <GraphdocConfigContext.Provider value={{ config }} {...props} />;
};

export const useGraphdocConfig = () => {
  const context = React.useContext(GraphdocConfigContext);

  if (context === undefined) {
    throw new Error(`useGraphdocConfig must be used within a AuthProvider`);
  }

  return context;
};

export default GraphdocConfigProvider;
