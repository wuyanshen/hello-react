import React, { Component } from 'react';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
