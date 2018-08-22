import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PostListPage from './pages/PostListPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostListPage />
        </div>
      </Provider>
    );
  }
}

export default App;
