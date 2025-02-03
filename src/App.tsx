import React from 'react';
import './App.css';
import Item from './components/Item';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Item data={data[0]} />
    </div>
  );
}

export default App;
