import React,{useState} from "react";
import BooksToReadCard from "./BooksToReadCard";
/* this will display all the books that the user added to their read later list and this will
allow the user to delete the books if their no longer interested or if the user has read the book
it can then be added onto the books Read */

function BooksToRead({ allBook, readLater, setreadLater }) {

    const booksReadingLater = readLater.map((eachBook) => (
        <BooksToReadCard eachBook={eachBook} />
))

  return (
    <div>
      {booksReadingLater}
    </div>
  );
}

export default BooksToRead