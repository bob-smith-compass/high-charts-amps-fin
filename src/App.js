import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stock from './components/stock/Stock';

class App extends Component {
  render() {
    return (
    <div>
      <h3>OpenFin</h3>
      <Stock />

    </div>
    
    );
  }
}

export default App;
