import './App.css';
import React from 'react';
import NavBar from './NavBar';
import HomePage from './Homepage';
import BooksList from './BooksList';
import BooksToRead from './BooksToRead';
import BooksRead from './BooksRead';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';




function App() {
  return (
    <div className="App">
      <h1>The BookClub</h1>
      <NavBar />
      <Switch>
        <Route path="/bookslist">
          <BooksList/>
        </Route>
        <Route path="/readlater">
          <BooksToRead/>
        </Route>
        <Route path="/booksread">
          <BooksRead/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
