import React from 'react';
import './App.css';
import Item from './components/Item';
import data from './data.json';
import stacklineLogo from './assets/images/stackline_logo.svg'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={stacklineLogo} alt="Stackline Logo" className="navbar-logo" />
      </nav>
      <Item data={data[0]} />
    </div>
  );
}

export default App;
