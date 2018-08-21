import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './components/PostList';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" style={{ color: 'black' }}>
          <div
            className="rounded m-5 float-left pb-3"
            style={{
              boxShadow: '0 0 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15)'
            }}
          >
            <PostList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
