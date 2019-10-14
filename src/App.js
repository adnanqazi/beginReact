import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './hello-world'

function App() {
const names = ["loco", "hobbit","marco","john"]
  return (names.map( (name,i) =>
  <div>
    <HelloWorld title="first" id={i} message={name}/>
  </div>

));
}

export default App;
