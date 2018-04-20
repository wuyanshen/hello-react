import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor(){
    super();
    this.state={
      homeLink:"Home"
    }
  }
  onGreet(age){
    alert(age);
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink:newName
    })
  }
  render() {
    const user={
      name:"Xiao hong",
      hobbies:["Sports","Reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
          <h1>hello world！！</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home 
              changLink={this.onChangeLinkName.bind(this)}
              name={"Xiao Ming"} 
              initialAge={22} 
              user={user} 
              greet={this.onGreet}
              initailName={this.state.homeLink}
            >
              <p>我是子节点</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
