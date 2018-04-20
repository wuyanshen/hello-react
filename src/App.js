import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    const user={
      name:"Xiao hong",
      hobbies:["Sports","Reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
          <h1>hello world！！</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={"Xiao Ming"} initialAge={22} user={user}>
              <p>我是子节点</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
