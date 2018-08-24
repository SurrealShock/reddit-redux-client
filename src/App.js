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
// import PostDetailPage from './pages/PostDetailPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/hot?raw_json=1" />}
              />
              <Route exact path="/:sort" component={PostListPage} />
              {/* <Route
                exact
                path="/r/:subreddit/comments/:id/:titleid"
                component={PostDetailPage}
              /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
