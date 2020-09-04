import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";
import PrivateRoute from"./components/PrivateRoute";

function App() {


  return (
    <Router>
      <div classname="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList}/>
          <Route path="/login" component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
