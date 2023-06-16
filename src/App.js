import './App.css';
import React from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <h1>The BookClub</h1>
      <NavBar />
      <Switch>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
