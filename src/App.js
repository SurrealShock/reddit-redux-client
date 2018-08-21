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
          <div className="row mr-0">
            <div className="col-2">
              <SideBar />
            </div>
            <div className="col-10 mt-3 mb-3">
              <div
                className="rounded float-left"
                style={{
                  boxShadow:
                    '0 0 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15)'
                }}
              >
                <PostList />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
