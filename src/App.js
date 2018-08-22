import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './components/PostList';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" style={{ color: 'black' }}>
          <div className="row mr-0">
            <div className="col-2">
              <SideBar />
            </div>
            <div className="col-10">
              <div className="row align-items-center mt-3 mb-3">
                <div className="col-md-auto">
                  <h5 className="m-0">Hot</h5>
                </div>
                <div className="col-6">
                  <h5 className="m-0" style={{ color: '#ff4500' }}>
                    Past 24 hours <i className="fas fa-angle-down" />
                  </h5>
                </div>
                <div className="col-md-auto">
                  <i className="fas fa-envelope" />
                </div>
                <div className="pl-0 col-1">
                  <input
                    type="text"
                    className="shadow"
                    placeholder="Search"
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      paddingLeft: '1rem',
                      borderRadius: '25px',
                      border: 'none',
                      width: '200px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
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
