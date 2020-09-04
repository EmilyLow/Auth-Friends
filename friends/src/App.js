import React from 'react';
import logo from './logo.svg';
import './App.css';

import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
    
        <p>
          Friends App
        </p>
      
      <LoginForm/>
      <FriendsList/>
    </div>
  );
}

export default App;
