import React, { useState, useEffect } from 'react';

const useContent =(path) => {
  const initialState = {
    isLoaded: false,
    content: null,
    error: null
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((payload) => {
        setState({
          isLoaded: true,
          content: payload,
          error: null
        });
      })
      .catch((err) => {
        setState({
          isLoaded: true,
          content: null,
          error: err
        });
        console.log(err);
      });
  }, []);

  return {
    isLoaded: state.isLoaded,
    content: state.content,
    error: state.error
  };
}

export default useContent;
