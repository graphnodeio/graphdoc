import React from 'react';
import GlobalStyle from '../globalStyles';
import StyledWrapper from './StyledWrapper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <StyledWrapper>
        <Router>
          <Switch>
            <Route path="/app">
              App
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </Router>
      </StyledWrapper>
    </div>
  )
};
export default App;