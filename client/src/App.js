import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
