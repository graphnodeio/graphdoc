import React from 'react';
import GlobalStyle from '../globalStyles';
import Schema from './Schema';
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
        <div className="container mx-auto">
          <Router>
            <Switch>
              <Route path="/">
                <Schema />
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
        </div>
      </StyledWrapper>
    </div>
  )
};
export default App;