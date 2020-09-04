import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";

function App() {
  // return (
  //   <div className="App">
    
  //       <p>
  //         Friends App
  //       </p>
      
  //     <LoginForm/>
  //     <FriendsList/>
  //   </div>
  // );

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
          <Route exact path="/protected" component={FriendsList}/>
          <Route path="/login" component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
