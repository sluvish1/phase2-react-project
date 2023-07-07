
import './App.css';
import React,{useState, useEffect} from 'react';
import NavBar from './NavBar';
import BooksList from './BooksList';
import BooksToRead from './BooksToRead';
import BooksRead from './BooksRead';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

//to run json
//json-server --watch db.json

function App() {
  const [allBooks, setAllBooks] = useState([])
  const [readLater, setReadLater] = useState([])
  const [booksCompleted, setBooksCompleted] = useState([])

// console.log(setReadLater)
   useEffect(() => {
     fetch(" http://localhost:3000/books")
       .then((r) => r.json())
       .then((allBooksData) => setAllBooks(allBooksData));
   }, []);
console.log(allBooks);
  return (
    <div className="App">
      <h1>The BookClub</h1>
      <NavBar />
      <Switch>
        <Route path="/readlater">
          <BooksToRead
            allBooks={allBooks}
            readLater={readLater}
            setReadLater={setReadLater}
            booksCompleted={booksCompleted}
            setBooksCompleted={setBooksCompleted}
            setAllBooks={setAllBooks}
          />
        </Route>
        <Route path="/booksread">
          <BooksRead
            allBooks={allBooks}
            booksCompleted={booksCompleted}
            setBooksCompleted={setBooksCompleted}
          />
        </Route>
        <Route path="/">
          <BooksList
            allBooks={allBooks}
            setAllBooks={setAllBooks}
            readLater={readLater}
            setReadLater={setReadLater} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
