import React from 'react';
import './App.css';
import Login from './Login'

function App() {
  console.log(process.env.TEST);
  return (
    <div className="App">
      <h1>Hello</h1>
      <Login />
    </div>
  );
}

export default App;
