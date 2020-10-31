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
            <Route path="/">
              {/*<div className="container mx-auto">
                <Schema />
              </div>*/}
              <Explorer />
            </Route>
            <Route path="/guides">
              Guides
            </Route>
            <Route path="/collections">
              Collections
            </Route>
            <Route path="/explorer">
              Explorer
            </Route>
          </Switch>
        </Router>
      </StyledWrapper>
    </main>
  )
};
export default App;