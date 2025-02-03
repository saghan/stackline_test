import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Item from './components/Item';
import stacklineLogo from './assets/images/stackline_logo.svg';
import { AppState, AppDispatch, fetchData } from './store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: AppState) => state);

  useEffect(() => {
    // Dispatch the thunk action to fetch data immediately.
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <nav className="navbar">
        <img src={stacklineLogo} alt="Stackline Logo" className="navbar-logo" />
      </nav>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data.length > 0 && <Item data={data[0]} />}
    </div>
  );
}

export default App;
