import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PostListPage from './pages/PostListPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/hot" />} />
              <Route exact path="/:sort" component={PostListPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
