import React from 'react';
import GlobalStyle from '../globalStyles';
import Schema from './Schema';
import Explorer from './Explorer';
import StyledWrapper from './StyledWrapper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <main className="flex flex-grow">
      <GlobalStyle/>
      <StyledWrapper>
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="container mx-auto">
                <Schema />
              </div>
            </Route>
            <Route exact path="/guides">
              Guides
            </Route>
            <Route exact path="/collections">
              Collections
            </Route>
            <Route exact path="/explorer">
              <Explorer />
            </Route>
          </Switch>
        </Router>
      </StyledWrapper>
    </main>
  )
};
export default App;