import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { loadUser } from "./actions/auth";
// import { get_breeds, get_breeds_cats } from "./actions/form";
import store from "./store";

import HomePage from "views/Index.js";

var hist = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={hist}>
          <Fragment>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
