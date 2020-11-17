import React from 'react';
import {FunctionList, Student} from './components'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux'
import {store} from "./store/Store";

function App() {
  return (
      <Provider store={store()}>
          <Router>
              <Switch>
                  <Route exact path="/" render={(props) => (<FunctionList {...props}  />) } />
                  <Route path="/student">
                      <Student />
                  </Route>
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
