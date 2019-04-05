import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Home from './home/Home.js';
import Register from './register/Register.js';
import Login from './login/Login.js';
import Jokes from './jokes/Jokes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </div> 
    );
  }

  logout= () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }
}

export default withRouter(App);
